import Link from "next/link";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="wrap">
      <aside className="side">
        <strong><Link href="/">Stem &amp; Soil</Link></strong>
        <p>Studio flowers. Cut twice a week.</p>
        <nav className="site-nav" aria-label="Pages">
        <Link href="/">Today</Link>
        <Link href="/arrangements">Arrangements</Link>
        <Link href="/weddings">Weddings</Link>
        <Link href="/funerals">Funerals</Link>
        <Link href="/subscriptions">Subscriptions</Link>
        <Link href="/seasonal">Seasonal</Link>
        <Link href="/studio">Studio</Link>
        <Link href="/delivery">Delivery</Link>
        <Link href="/care">Care</Link>
        <Link href="/workshops">Workshops</Link>
        <Link href="/gift">Gift</Link>
        <Link href="/about">About</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      </aside>
      <main className="main">{children}</main>
    </div>
  );
}
