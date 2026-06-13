import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael's Vision Lab",
  description:
    "A personal visual research archive on child-led photography, visual storytelling, and ethical ways of seeing."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* 顶部导航：保持安静、清晰，像研究档案的目录。 */}
        <header className="site-header">
          <Link className="brand" href="/" aria-label="Michael's Vision Lab home">
            Michael's Vision Lab
          </Link>
          <nav className="site-nav" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <div className="nav-group">
              <Link href="/research">Research</Link>
              <div className="nav-dropdown" aria-label="Research projects">
                <Link href="/through-their-eyes">Through Their Eyes</Link>
                <Link href="/research#guizhou-echo">The Guizhou Echo <span>planned</span></Link>
              </div>
            </div>
            <Link href="/ethics">Ethics</Link>
            <Link href="/about">About Me</Link>
          </nav>
        </header>
        <main>{children}</main>
        {/* 页脚：强调这是静态研究档案，而非产品平台。 */}
        <footer className="site-footer">
          <p>Personal visual research archive for Michael Wang.</p>
          <p>Child-led photography, visual storytelling, and ethical ways of seeing.</p>
          <p>Work in progress · Stage review version · June 2026</p>
        </footer>
      </body>
    </html>
  );
}
