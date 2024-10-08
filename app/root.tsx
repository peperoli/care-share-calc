import { Links, Meta, Outlet, Scripts } from '@remix-run/react'
import type { LinksFunction } from '@remix-run/node'
import stylesheet from './app/tailwind.css?url'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesheet }]

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <main>
          <h1 className="text-4xl">Care-Share-Calc</h1>
        </main>
        <Outlet />

        <Scripts />
      </body>
    </html>
  )
}
