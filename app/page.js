"use client"

import Bio from '@/components/bio/page';
import Footer from '@/components/footer/page';
import GithubProjects from '@/components/github projects/page';
import Header from '@/components/header/page';
import Loader from '@/components/loader/page'
import Navbar from '@/components/navbar/page';
import Projects from '@/components/projects/page';
import Quote from '@/components/quote/page';
import ReachOut from '@/components/reach out/page';
import Skills from '@/components/skills/page';
import { useEffect, useState } from 'react'
// import Image from 'next/image'
// * Project stars

export default function Home() {
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <main className='relative'>
      {loading && <Loader />}
      <Navbar />
      <Header />
      <GithubProjects />
      <Skills />
      <Quote />
      <Bio />
      <Projects />
      <ReachOut />
      <Footer />
      {/* 
      //   <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
      //         className="flex gap-2 p-8 pointer-events-none place-items-center lg:pointer-events-auto lg:p-0"
      //           className="dark:invert"
      //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
      //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
      //   <div className="grid mb-32 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      //       className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
      //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
      //       className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
      //       target="_blank"
      //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
      //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
      //       className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"  
      */}
    </main>
  );
}
