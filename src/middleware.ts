import { NextRequest, NextResponse } from 'next/server'
import { getUrl } from './lib/get-url'

export function middleware(request: NextRequest) {
  const token = request.cookies.get(
    process.env.COOKIE_NAME || '__Secure-authjs.session-token',
  )
  console.log('token: ', token)
  const pathname = request.nextUrl.pathname
  console.log('pathname: ', pathname)
  if (pathname === '/auth' && token) {
    return NextResponse.redirect(new URL(getUrl('/app')))
  }

  if (pathname.includes('/app') && !token) {
    return NextResponse.redirect(new URL(getUrl('/auth')))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
