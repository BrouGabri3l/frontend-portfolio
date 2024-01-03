import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '@/components/common/Header';
import Hero from '@/components/common/Hero';
import Heading from '@/components/common/Heading';
import About from '@/components/About';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`relative  min-h-screen bg-[#070711] ${inter.className}`}>
      <Header />
      <Hero />
      <About />
    </main>
  );
}
