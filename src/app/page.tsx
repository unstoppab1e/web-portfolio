'use client';
import BreakLines from '@/components/BreakLines';
import Contact from '@/components/Contact';
import Description from '@/components/Description';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Now from '@/components/Now';
import Overview from '@/components/Overview';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
import { DM_Mono } from 'next/font/google';
import { useRef } from 'react';

const mono = DM_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--dm-mono',
});

const Home: React.FC = () => {
  const sectionRef = useRef<null | HTMLDivElement>(null);
  const nowRef = useRef<null | HTMLDivElement>(null);
  const stackRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'projects' && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'now' && nowRef.current) {
      nowRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'stack' && stackRef.current) {
      stackRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'contact' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <main className='flex flex-col font-mono text-base max-w-2xl mx-auto pt-14 pb-24 px-4 sm:px-6 lg:px-8'>
      <Navbar />
      <div
        className={`${mono.variable} dark:text-[#A1A1AA] h-full selection:bg-gray-50 dark:selection:bg-gray-800`}
      >
        <Description />
        <Overview scrollToSection={scrollToSection} />
        <Projects sectionRef={sectionRef} />
        <BreakLines />
        <Now nowRef={nowRef} />
        <BreakLines />
        <Stack stackRef={stackRef} />
        <BreakLines />
        <Contact contactRef={contactRef} />
        <BreakLines />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
