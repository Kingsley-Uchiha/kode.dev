"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function NavPage() {
  const [home, setHome] = useState("Home");

  const linkHover = (link, setLink) => {
    const constLink = link;
    let int = 0;
    const interval = setInterval(() => {
      setLink(link.split("")
        .map((letter, i) => {
          if (i < int) {
            return constLink;
          }
          return link[Math.floor(Math.random() * link.length)];
        })
        .join(""))
      
      if (int >= link.length) clearInterval(interval);
      int += 1 / 4;
    }, 30);
  }

  return (
    <div className="navpage top-full absolute bg-black z-50">
      <ul className="text-lg font-code absolute left-1/3 -translate-x-1/2 links flex flex-col p-32 list-disc">
        <li>
          <Link href="#" onMouseEnter={() => linkHover(home, setHome)}>{home}</Link>
        </li>
        <li>
          <Link href="">Skills</Link>
        </li>
        <li>
          <Link href="">Bio</Link>
        </li>
        <li>
          <Link href="">Projects</Link>
        </li>
        <li>
          <Link href="">Reach Out</Link>
        </li>
      </ul>
      <div className="watermark"></div>
    </div>
  );
}