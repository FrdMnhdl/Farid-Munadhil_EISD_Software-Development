import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cihuy Store App',
  description: 'A simple e-commerce landing page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-gray-900 text-white'}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}