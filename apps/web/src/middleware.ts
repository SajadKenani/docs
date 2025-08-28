export { default } from '@/lib/newyolk/middleware'

export const config = {
  matcher: [
    '/((?!api/|_next/|_proxy/|_vercel|_static|favicon.ico|sitemap.xml|blog.xml|blog.json|robots.txt|.*\\..*).*)',
    '/([\\w-]+)?/(client|agent|it)/(.+)',
  ],
}
