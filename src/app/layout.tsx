import type { Metadata } from 'next';
import { title_alt } from '@/config/fonts';
import './globals.css';
import { Footer, Navbar, Sidebar } from '@/components';

export const metadata: Metadata = {
  title: 'CS Royal Palm Vista Garden',
  description: 'Private Pool & Cafe',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${title_alt.className} flex flex-col justify-between`}>
        <Navbar />
        <Sidebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
