import { Pool } from 'pg';
import { faker } from '@faker-js/faker';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function main() {
  const client = await pool.connect();
  try {
    console.log('Connecting to database...');
    // Create customers table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS customers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        company VARCHAR(255),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✓ "customers" table created or already exists.');

    // Clear existing data to avoid duplicates on re-run
    await client.query('TRUNCATE TABLE customers RESTART IDENTITY CASCADE;');
    console.log('✓ "customers" table cleared.');

    // Generate 100 sample customers
    const customers = [];
    for (let i = 0; i < 100; i++) {
      customers.push([
        faker.person.fullName(),
        faker.internet.email(),
        faker.company.name(),
      ]);
    }

    console.log('Seeding 100 customers...');
    // Insert new data
    for (const customer of customers) {
      await client.query(
        'INSERT INTO customers (name, email, company) VALUES ($1, $2, $3)',
        customer
      );
    }
    console.log('✓ Seeded 100 sample customers.');

  } catch (err) {
    console.error('Error seeding database:', err);
    throw err; // rethrow to exit with non-zero code
  } finally {
    console.log('Disconnecting from database...');
    client.release();
    await pool.end();
    console.log('✓ Disconnected.');
  }
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
  process.exit(1);
});
