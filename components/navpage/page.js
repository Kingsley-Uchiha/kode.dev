"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function NavPage() {
  const [home, setHome] = useState("Home");
  const [skills, setSkills] = useState("Skills");
  const [bio, setBio] = useState("Bio");
  const [projects, setProjects] = useState("Projects");
  const [reachOut, setReachOut] = useState("Reach-Out");

  const linkHover = (link, setLink) => {
    const constLink = link;
    let int = 0;
    const interval = setInterval(() => {
      setLink(link.split("")
        .map((letter, i) => {
          if (i < int) {
            return constLink[i];
          }
          return link[Math.floor(Math.random() * link.length)];
        })
        .join(""));
      
      if (int >= link.length) {
        clearInterval(interval);
      }
      int += 1 / 4;
    }, 30);
  }

  return (
    // * If we had another state to check if the function is running...
    // * we can prevent the changing text bug
    <div className="navpage top-full absolute flex bg-black z-50">
      <ul className="text-lg font-code relative links flex flex-col p-32">
        <li>
          <Link
            href="#"
            className="hover:opacity-100 opacity-20 font-light hover:font-normal block"
            onMouseEnter={() => linkHover(home, setHome)}
          >
            &gt; {home}
          </Link>
        </li>
        <li>
          <Link
            href="#skills"
            className="hover:opacity-100 opacity-20 font-light hover:font-normal block"
            onMouseEnter={() => linkHover(skills, setSkills)}
          >
            &gt; {skills}
          </Link>
        </li>
        <li>
          <Link
            href="#bio"
            className="hover:opacity-100 opacity-20 font-light hover:font-normal block"
            onMouseEnter={() => linkHover(bio, setBio)}
          >
            &gt; {bio}
          </Link>
        </li>
        <li>
          <Link
            href="#projects"
            className="hover:opacity-100 opacity-20 font-light hover:font-normal block"
            onMouseEnter={() => linkHover(projects, setProjects)}
          >
            &gt; {projects}
          </Link>
        </li>
        <li>
          <Link
            href="#reach-out"
            className="hover:opacity-100 opacity-20 font-light hover:font-normal block"
            onMouseEnter={() => linkHover(reachOut, setReachOut)}
          >
            &gt; {reachOut}
          </Link>
        </li>
      </ul>
      <div className="watermark relative right-0 w-1/2 p-32">
        <Image
          className="select-none relative left-1/3 rotate-45"
          src="/htmld.png"
          width={150}
          height={150}
          alt=""
        />
        <Image
          className="select-none relative -rotate-45"
          src="/cssd.png"
          width={150}
          height={150}
          alt=""
        />
        <Image
          className="select-none left-1/2  bottom-10 relative"
          src="/jsd.png"
          width={150}
          height={150}
          alt=""
        />
      </div>
    </div>
  );
}