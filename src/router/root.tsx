import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import "../app/stylesheet.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Recipe Manager</title>
        <Meta />
        <Links />
        <link rel="icon" type="image/svg" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// Optional: Shown during initial SPA bundle loading
export function HydrateFallback() {
  return <div>Loading Application State...</div>;
}

export default function Root() {
  return <Outlet />;
}
