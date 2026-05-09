import type {Metadata} from 'next';
import { Kanit } from 'next/font/google';
import './globals.css';

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-kanit',
});

export const metadata: Metadata = {
  title: 'Satvik -- AI & ML Engineer',
  description: 'Portfolio of Satvik, AI & ML Engineer',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${kanit.variable} bg-[#0C0C0C] text-[#D7E2EA] antialiased`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
