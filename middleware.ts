
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const isPublicPath = path === '/login'

  // Attempt to get the token from cookies
  const token = request.cookies.get('firebaseIdToken')?.value || ''

  // If trying to access a protected route without a token, redirect to login
  if (!isPublicPath && !token && path.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // If trying to access the login page with a token, redirect to admin
  if (isPublicPath && token) {
     return NextResponse.redirect(new URL('/admin', request.url))
  }

  return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/admin/:path*',
    '/login'
  ],
}
