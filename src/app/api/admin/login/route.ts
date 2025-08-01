
import { NextResponse } from 'next/server'
import { z } from 'zod'

const loginSchema = z.object({
  password: z.string(),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = loginSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    const { password } = parsed.data
    const adminPassword = process.env.ADMIN_PASSWORD

    if (!adminPassword) {
      console.error('ADMIN_PASSWORD environment variable is not set.')
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 })
    }

    if (password === adminPassword) {
      return NextResponse.json({ success: true, message: 'Login successful' })
    } else {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }
  } catch (error) {
    console.error('Login API error:', error)
    return NextResponse.json({ error: 'An internal server error occurred.' }, { status: 500 })
  }
}
