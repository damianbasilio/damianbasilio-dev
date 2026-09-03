import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

/* One typeface for the entire site. Mixing faces reads as cheap. */
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://damianbasilio.dev'),
  title: 'Damian Basilio',
  description: "I build backends and I'm learning how to break them.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* The font variable lives on <html> so :root-level --font-sans resolves. */
    <html lang="en" className={geistSans.variable}>
      <body>
        {/* Scroll reveals start hidden and are un-hidden by JS. Without this
            override a visitor with JS disabled would see an empty page. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
