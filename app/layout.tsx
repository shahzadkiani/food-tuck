import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; 

import Footer from '../components/Footer';
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Elite Food Restaurant',
  description: 'Delicious food and excellent service',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-cover bg-center`}
        style={{
          backgroundImage: 'url(/banner.png)', 
        }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
