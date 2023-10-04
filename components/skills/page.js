"use client";
import Image from "next/image";
import Description from "./description/page";
import { useState } from "react";

export default function Skills() {
  const [activeImg, setActiveImg] = useState();
  const [posi, setPosi] = useState({
    left: 0, // window.innerWidth // 384
    top: 0, // window.innerHeight
  });
  const descriptions = {
    nextjs: {
      name: "Next.js",
      info: "Next.js is a popular React framework that simplifies server-side rendering and routing for web applications, enabling efficient and SEO-friendly React development.",
      skill: [1, 1, 0],
      link: "https://www.google.com",
    },
    tailwindcss: {
      name: "Tailwind CSS",
      info: "Tailwind CSS is a utility-first CSS framework that streamlines web design by providing a set of pre-defined utility classes for rapid and customizable styling.",
      skill: [1, 1, 1],
      link: "https://www.google.com",
    },
    firebase: {
      name: "Firebase",
      info: "Firebase is a comprehensive platform for building web and mobile applications, offering features like real-time database, authentication, cloud functions, and hosting, all managed by Google.",
      skill: [1, 1, 0],
      link: "https://www.google.com",
    },
    typescript: {
      name: "TypeScript",
      info: "TypeScript is a statically-typed superset of JavaScript that enhances code quality and developer productivity by adding type checking and advanced tooling to JavaScript projects.",
      skill: [1, 1, 0],
      link: "https://www.google.com",
    },
    git: {
      name: "Git",
      info: "Git is a distributed version control system that tracks changes in source code, facilitating collaboration among developers and enabling code management and version tracking.",
      skill: [1, 1, 1],
      link: "https://www.google.com",
    },
    npm: {
      name: "npm",
      info: "npm (Node Package Manager) is the default package manager for Node.js, used for installing, managing, and sharing JavaScript packages and dependencies.",
      skill: [1, 1, 1],
      link: "https://www.google.com",
    },
    nodejs: {
      name: "Node.js",
      info: "Node.js is a runtime environment that allows developers to execute JavaScript on the server-side, enabling the creation of scalable and efficient network applications.",
      skill: [1, 0, 0],
      link: "https://www.google.com",
    },
    htmlcss: {
      name: "HTML & CSS",
      info: "HTML (Hypertext Markup Language) is the standard language for creating web content, while CSS (Cascading Style Sheets) is used for styling and formatting HTML elements.",
      skill: [1, 1, 1],
      link: "https://www.google.com",
    },
    bootstrap: {
      name: "Bootstrap",
      info: "Bootstrap is a popular front-end framework that provides pre-designed UI components and responsive layouts, simplifying the process of building attractive and mobile-friendly websites.",
      skill: [1, 1, 1],
      link: "https://www.google.com",
    },
    javascript: {
      name: "JavaScript",
      info: "JavaScript is a versatile and widely-used programming language that enables interactivity and functionality in web applications, making it a core technology for web development.",
      skill: [1, 1, 1],
      link: "https://www.google.com",
    },
    sass: {
      name: "SASS",
      info: "SASS (Syntactically Awesome Style Sheets) is a CSS preprocessor that extends the capabilities of CSS by introducing variables, nesting, and mixins for more efficient and maintainable stylesheets.",
      skill: [1, 1, 0],
      link: "https://www.google.com",
    },
    reactjs: {
      name: "React.js",
      info: "React.js is a JavaScript library for building user interfaces, allowing developers to create reusable UI components and manage the dynamic rendering of web applications.",
      skill: [1, 1, 0],
      link: "https://www.google.com",
    },
  };

  return (
    <div
      className="px-20 py-10 skills relative"
      onMouseMove={() => setActiveImg()}
      onScroll={() => setActiveImg()}
    >
      <Description
        head={activeImg ? descriptions[activeImg].name : ""}
        skill={activeImg ? descriptions[activeImg].skill : ""}
        body={activeImg ? descriptions[activeImg].info : ""}
        link={activeImg ? descriptions[activeImg].link : ""}
        posi={posi}
        open={activeImg}
      />
      <h1 className="text-xl font-medium font-special">
        My{" "}
        <span className="px-2 text-black rounded bg-white-100 _checking">
          Skills
        </span>
      </h1>
      <div className="grid grid-cols-11 grid-rows-3 gap-5 p-8 my-4 rounded-lg bg-white-20 skills-container">
        <div
          className="flex items-center justify-center col-span-2 row-span-2 rounded-md skill bg-white-100 p-7 hover:opacity-90 b"
          onMouseEnter={(e) => {
            setActiveImg("nextjs");
            setPosi({
              left:
                e.screenX + 384 > window.innerWidth
                  ? window.innerWidth - 384
                  : e.screenX,
              top:
                e.screenY + 150 > window.innerHeight
                  ? e.screenY - 216 - 80
                  : e.screenY,
            });
            e.stopPropagation();
          }}
          onMouseMove={(e) => e.stopPropagation()}
        >
          <Image
            src="/skills/next.js.png"
            width={200}
            height={200}
            alt="next.js"
            className="hover:opacity-90 hover:scale-110 transition-all"
            priority
          />
        </div>
        <div
          className="flex items-center justify-center col-span-3 row-span-2 rounded-md skill bg-white-100 p-7 hover:opacity-90 b"
          onMouseEnter={(e) => {
            setActiveImg("tailwindcss");
            setPosi({
              left:
                e.screenX + 384 > window.innerWidth
                  ? window.innerWidth - 384
                  : e.screenX,
              top:
                e.screenY + 150 > window.innerHeight
                  ? e.screenY - 216 - 80
                  : e.screenY,
            });
            e.stopPropagation();
          }}
          onMouseMove={(e) => e.stopPropagation()}
        >
          <Image
            src="/skills/tailwind.png"
            width={170}
            height={170}
            alt="tailwind"
            className="hover:opacity-90 hover:scale-110 transition-all"
            priority
          />
        </div>
        <div
          className="flex items-center justify-center col-span-2 row-span-3 rounded-md skill bg-white-100 p-7 hover:opacity-90 b"
          onMouseEnter={(e) => {
            setActiveImg("firebase");
            setPosi({
              left:
                e.screenX + 384 > window.innerWidth
                  ? window.innerWidth - 384
                  : e.screenX,
              top:
                e.screenY + 150 > window.innerHeight
                  ? e.screenY - 216 - 80
                  : e.screenY,
            });
            e.stopPropagation();
          }}
          onMouseMove={(e) => e.stopPropagation()}
        >
          <Image
            src="/skills/firebase.png"
            width={110}
            height={110}
            alt="firebase"
            className="hover:opacity-90 hover:scale-110 transition-all"
            priority
          />
        </div>
        <div
          className="flex items-center justify-center col-span-2 row-span-2 rounded-md skill bg-white-100 p-7 hover:opacity-90 b"
          onMouseEnter={(e) => {
            setActiveImg("typescript");
            setPosi({
              left:
                e.screenX + 384 > window.innerWidth
                  ? window.innerWidth - 384
                  : e.screenX,
              top:
                e.screenY + 150 > window.innerHeight
                  ? e.screenY - 216 - 80
                  : e.screenY,
            });
            e.stopPropagation();
          }}
          onMouseMove={(e) => e.stopPropagation()}
        >
          <Image
            src="/skills/typescript.png"
            width={200}
            height={200}
            alt="typescript"
            className="hover:opacity-90 hover:scale-110 transition-all"
            priority
          />
        </div>
        <div
          className="flex items-center justify-center p-5 rounded-md skill bg-white-100 hover:opacity-90 b"
          onMouseEnter={(e) => {
            setActiveImg("git");
            setPosi({
              left:
                e.screenX + 384 > window.innerWidth
                  ? window.innerWidth - 384
                  : e.screenX,
              top:
                e.screenY + 150 > window.innerHeight
                  ? e.screenY - 216 - 80
                  : e.screenY,
            });
            e.stopPropagation();
          }}
          onMouseMove={(e) => e.stopPropagation()}
        >
          <Image
            src="/skills/git.png"
            width={90}
            height={90}
            alt="git"
            className="hover:opacity-90 hover:scale-110 transition-all"
            priority
          />
        </div>
        <div
          className="flex items-center justify-center p-5 rounded-md skill bg-white-100 hover:opacity-90 b"
          onMouseEnter={(e) => {
            setActiveImg("npm");
            setPosi({
              left:
                e.screenX + 384 > window.innerWidth
                  ? window.innerWidth - 384
                  : e.screenX,
              top:
                e.screenY + 150 > window.innerHeight
                  ? e.screenY - 216 - 80
                  : e.screenY,
            });
            e.stopPropagation();
          }}
          onMouseMove={(e) => e.stopPropagation()}
        >
          <Image
            src="/skills/npm.png"
            width={90}
            height={90}
            alt="npm"
            className="hover:opacity-90 hover:scale-110 transition-all"
            priority
          />
        </div>
        <div
          className="flex items-center justify-center col-span-2 row-span-2 rounded-md skill bg-white-100 p-7 hover:opacity-90 b"
          onMouseEnter={(e) => {
            setActiveImg("reactjs");
            setPosi({
              left:
                e.screenX + 384 > window.innerWidth
                  ? window.innerWidth - 384
                  : e.screenX,
              top:
                e.screenY + 150 > window.innerHeight
                  ? e.screenY - 216 - 80
                  : e.screenY,
            });
            e.stopPropagation();
          }}
          onMouseMove={(e) => e.stopPropagation()}
        >
          <Image
            src="/skills/react.png"
            width={200}
            height={200}
            alt="react"
            className="hover:opacity-90 hover:scale-110 transition-all"
            priority
          />
        </div>
        <div
          className="flex items-center justify-center p-6 rounded-md skill bg-white-100 hover:opacity-90 b"
          onMouseEnter={(e) => {
            setActiveImg("nodejs");
            setPosi({
              left:
                e.screenX + 384 > window.innerWidth
                  ? window.innerWidth - 384
                  : e.screenX,
              top:
                e.screenY + 150 > window.innerHeight
                  ? e.screenY - 216 - 80
                  : e.screenY,
            });
            e.stopPropagation();
          }}
          onMouseMove={(e) => e.stopPropagation()}
        >
          <Image
            src="/skills/node.png"
            width={90}
            height={90}
            alt="node"
            className="hover:opacity-90 hover:scale-110 transition-all"
            priority
          />
        </div>
        <div
          className="flex items-center justify-center col-span-3 gap-3 p-5 rounded-md skill bg-white-100 hover:opacity-90 b"
          onMouseEnter={(e) => {
            setActiveImg("htmlcss");
            setPosi({
              left:
                e.screenX + 384 > window.innerWidth
                  ? window.innerWidth - 384
                  : e.screenX,
              top:
                e.screenY + 150 > window.innerHeight
                  ? e.screenY - 216 - 80
                  : e.screenY,
            });
            e.stopPropagation();
          }}
          onMouseMove={(e) => e.stopPropagation()}
        >
          <Image
            src="/skills/html.png"
            width={60}
            height={60}
            alt="html"
            className="hover:opacity-90 hover:scale-110 transition-all"
            priority
          />
          <Image
            src="/skills/and.png"
            width={30}
            height={30}
            alt="and"
            className="hover:opacity-90 hover:scale-110 transition-all"
            priority
          />
          <Image
            src="/skills/css.png"
            width={60}
            height={60}
            alt="css"
            className="hover:opacity-90 hover:scale-110 transition-all"
            priority
          />
        </div>
        <div
          className="flex items-center justify-center p-5 rounded-md skill bg-white-100 hover:opacity-90 b"
          onMouseEnter={(e) => {
            setActiveImg("bootstrap");
            setPosi({
              left:
                e.screenX + 384 > window.innerWidth
                  ? window.innerWidth - 384
                  : e.screenX,
              top:
                e.screenY + 150 > window.innerHeight
                  ? e.screenY - 216 - 80
                  : e.screenY,
            });
            e.stopPropagation();
          }}
          onMouseMove={(e) => e.stopPropagation()}
        >
          <Image
            src="/skills/bootstrap.png"
            width={90}
            height={90}
            alt="bootstrap"
            className="hover:opacity-90 hover:scale-110 transition-all"
            priority
          />
        </div>
        <div
          className="flex items-center justify-center p-5 rounded-md skill bg-white-100 hover:opacity-90 b"
          onMouseEnter={(e) => {
            setActiveImg("javascript");
            setPosi({
              left:
                e.screenX + 384 > window.innerWidth
                  ? window.innerWidth - 384
                  : e.screenX,
              top:
                e.screenY + 150 > window.innerHeight
                  ? e.screenY - 216 - 80
                  : e.screenY,
            });
            e.stopPropagation();
          }}
          onMouseMove={(e) => e.stopPropagation()}
        >
          <Image
            src="/skills/javascript.png"
            width={90}
            height={90}
            alt="javascript"
            className="hover:opacity-90 hover:scale-110 transition-all"
            priority
          />
        </div>
        <div
          className="flex items-center justify-center p-5 rounded-md skill bg-white-100 hover:opacity-90 b"
          onMouseEnter={(e) => {
            setActiveImg("sass");
            setPosi({
              left:
                e.screenX + 384 > window.innerWidth
                  ? window.innerWidth - 384
                  : e.screenX,
              top:
                e.screenY + 150 > window.innerHeight
                  ? e.screenY - 216 - 80
                  : e.screenY,
            });
            e.stopPropagation();
          }}
          onMouseMove={(e) => e.stopPropagation()}
        >
          <Image
            src="/skills/sass.png"
            width={90}
            height={90}
            alt="sass"
            className="hover:opacity-90 hover:scale-110 transition-all"
            priority
          />
        </div>
      </div>
    </div>
  );
}
