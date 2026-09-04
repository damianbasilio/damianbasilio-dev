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
        {/*
          Every entrance animation's hidden start state is scoped to `.js`.
          With scripting off the class never lands, so the page renders in its
          final state instead of staying invisible.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
