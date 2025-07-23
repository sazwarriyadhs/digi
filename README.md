# Website Profil Perusahaan PT Digi Media Komunika

Ini adalah proyek Next.js untuk profil perusahaan PT Digi Media Komunika, yang dibangun dengan Firebase Studio. Proyek ini menampilkan desain modern yang responsif, dukungan multi-bahasa (Bahasa Indonesia & Inggris), tampilan multi-mata uang (IDR & USD), dan bagian FAQ yang didukung oleh AI.

## Dokumentasi Proyek

Untuk informasi terperinci tentang proyek ini, silakan merujuk ke dokumen berikut:

- **[Fitur](./feature.md):** Daftar lengkap fitur dan fungsionalitas aplikasi.
- **[Proposal](./PROPOSAL.md):** Proposal proyek resmi, yang menguraikan ruang lingkup, tujuan, dan hasil kerja.
- **[Pitch Deck](./pitchdeck.md):** Presentasi proposisi nilai dan kasus bisnis proyek.

## Fitur Unggulan

- **Next.js 15 & React 18:** Memanfaatkan fitur-fitur terbaru dari Next.js dengan App Router.
- **ShadCN UI & Tailwind CSS:** Untuk pustaka komponen yang modern, responsif, dan dapat disesuaikan.
- **Genkit (Google AI):** Mendukung asisten FAQ yang cerdas.
- **Nodemailer:** Menangani pengiriman email untuk formulir kontak.
- **Multi-bahasa & Multi-mata uang:** Mendukung Bahasa Indonesia (ID) dan Inggris (EN), dengan konversi mata uang antara IDR dan USD.
- **TypeScript:** Untuk kode yang kuat dan aman dari segi tipe.
- **Sepenuhnya Responsif:** Didesain untuk bekerja dengan lancar di semua perangkat.

## Prasyarat

Sebelum memulai, pastikan Anda telah menginstal yang berikut di mesin lokal Anda:
- [Node.js](https://nodejs.org/en/) (v18 atau lebih baru direkomendasikan)
- [npm](https://www.npmjs.com/) atau [yarn](https://yarnpkg.com/)

## Memulai

Ikuti langkah-langkah ini untuk menjalankan proyek di mesin lokal Anda.

### 1. Kloning Repositori

Pertama, kloning repositori ke mesin lokal Anda:

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

### 2. Instal Dependensi

Instal dependensi proyek yang diperlukan menggunakan npm atau yarn:

```bash
npm install
# atau
yarn install
```

### 3. Atur Variabel Lingkungan

Proyek ini menggunakan variabel lingkungan untuk konfigurasi. Anda harus mengaturnya untuk fitur AI dan pengiriman email.

1.  Repositori ini menyertakan file bernama `.env.template`. Buat salinan file ini dan ganti namanya menjadi `.env.local`.

    ```bash
    cp .env.template .env.local
    ```

2.  Perbarui file `.env.local` dengan kredensial Anda:

    -   **`GOOGLE_API_KEY`**: Dapatkan kunci API dari [Google AI Studio](https://aistudio.google.com/app/apikey).
    -   **`SMTP_HOST`**: Nama host server SMTP Anda (misalnya, `smtp.example.com`).
    -   **`SMTP_PORT`**: Port untuk server SMTP Anda (misalnya, `587` atau `465`).
    -   **`SMTP_USER`**: Nama pengguna untuk otentikasi SMTP.
    -   **`SMTP_PASS`**: Kata sandi untuk otentikasi SMTP.
    -   **`SMTP_FROM_EMAIL`**: Alamat email yang akan mengirim pemberitahuan (ini juga akan menjadi penerima kiriman formulir kontak).

    File `.env.local` Anda akan terlihat seperti ini:

    ```
    # .env.local

    # Kunci API Genkit/Google AI
    GOOGLE_API_KEY=kunci_api_google_anda_di_sini

    # Konfigurasi SMTP untuk mengirim email
    SMTP_HOST=smtp.penyedia-anda.com
    SMTP_PORT=587
    SMTP_USER=email-anda@penyedia-anda.com
    SMTP_PASS=kata-sandi-email-anda
    SMTP_FROM_EMAIL=email-anda@penyedia-anda.com
    ```
    **Catatan:** File `.env.local` termasuk dalam `.gitignore` dan tidak boleh dikomit ke sistem kontrol versi Anda.

### 4. Jalankan Server Pengembangan

Mulai server pengembangan Next.js:

```bash
npm run dev
# atau
yarn dev
```

Buka [http://localhost:9002](http://localhost:9002) di browser Anda untuk melihat aplikasi berjalan.

## Membangun untuk Produksi

Untuk membuat build aplikasi yang siap untuk produksi, jalankan perintah berikut:

```bash
npm run build
```

Perintah ini akan menghasilkan versi situs Anda yang dioptimalkan di direktori `.next`.

## Penyebaran di Hosting Anda Sendiri

Anda dapat menyebarkan aplikasi Next.js ini ke penyedia hosting mana pun yang mendukung Node.js (misalnya, Vercel, Netlify, AWS, DigitalOcean). Berikut adalah langkah-langkah umumnya:

### 1. Pilih Penyedia Hosting

- **Vercel (Disarankan):** Sebagai pencipta Next.js, Vercel menyediakan pengalaman penyebaran yang paling lancar. Cukup hubungkan repositori Git Anda, dan Vercel akan menangani proses build dan penyebaran secara otomatis.
- **Penyedia Lain (Netlify, AWS Amplify, dll.):** Sebagian besar platform hosting modern memiliki dukungan bawaan untuk Next.js. Pengaturannya biasanya mirip dengan Vercel.
- **Server Node.js Kustom:** Anda dapat meng-host aplikasi di VPS atau server tradisional, seperti yang Anda lakukan.

### 2. Konfigurasi Variabel Lingkungan di Server

Di dasbor penyedia hosting Anda, Anda harus mengatur variabel lingkungan yang sama dengan yang Anda definisikan di file `.env.local` Anda. Cari bagian yang disebut "Environment Variables" atau "Secrets" di pengaturan proyek Anda.

-   `GOOGLE_API_KEY`
-   `SMTP_HOST`
-   `SMTP_PORT`
-   `SMTP_USER`
-   `SMTP_PASS`
-   `SMTP_FROM_EMAIL`

Ini adalah langkah penting. Aplikasi tidak akan dapat terhubung ke layanan AI atau mengirim email tanpa kunci-kunci ini.

### 3. Build dan Mulai Aplikasi

Jika Anda menggunakan server kustom (seperti VPS), Anda perlu:

1.  Mendorong kode Anda ke server.
2.  Instal dependensi: `npm install`
3.  Build proyek: `npm run build`
4.  Mulai server produksi: `npm run start`

Sangat disarankan untuk menggunakan manajer proses seperti [PM2](https://pm2.keymetrics.io/) untuk menjaga aplikasi Anda berjalan terus-menerus.

```bash
# Instal PM2 secara global
npm install pm2 -g

# Mulai aplikasi dengan PM2
pm2 start npm --name "digimediakomunika-app" -- start
```

### 4. Domain dan SSL

Terakhir, konfigurasikan domain kustom Anda untuk menunjuk ke alamat IP server atau catatan CNAME penyedia hosting Anda, dan pastikan Anda telah menginstal sertifikat SSL untuk HTTPS. Sebagian besar penyedia modern menangani SSL secara otomatis.

Untuk pengaturan Anda, Anda akan mengkonfigurasi domain Anda `digimediakomunika.cloud` untuk menunjuk ke alamat IP server Anda, yaitu `103.247.11.222`.
