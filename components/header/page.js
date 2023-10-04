"use client"

import Image from "next/image";
import { useState } from "react";
import Button from "../button/page";
import Cube from "../cube/page";
import Tooltip from "../tooltip/page";
import Box from "../box/page";
// import anime from 'animejs';

export default function Header() {

  const [funcVar, setFuncVar] = useState("Try edit me!");
  const [inputActive, setInputActive] = useState(false);

  const editCode = () => {
    setInputActive(!inputActive);
    runCode(funcVar);
  }
  const runCode = (log) => {
    if(inputActive) console.log(log);
  }

  return (
    <header className="flex items-center justify-between p-20 pt-32 pr-20">
      <div className="txt">
        <h1 className="text-2xl font-medium font-special">
          Hello{" "}
          <span className="pl-1 text-black rounded bg-white-100 anime-head">
            World
          </span>
        </h1>
        <p className="my-2 font-regular opacity-80 font-italic text-md">
          I'm a frontend web developer
        </p>
        {/* * Code. Move out */}
        {/* * Edit only one line */}
        <div className="px-10 py-5 rounded-lg code-area font-code bg-white-20 w-30 font-light relative">
          <Tooltip open={!inputActive}>
            {funcVar} <span className="text-blue">(Check the console)</span>
          </Tooltip>
          <div className={`${inputActive ? "blur-self" : ""} text`}>
            <span className="italic opacity-50">// function decleration</span>{" "}
            <br />
            <span className="text-pink">const</span>
            <span className="text-blue"> myFunction</span>
            <span className="text-white"> =</span>
            <span className="text-gold"> ()</span>
            <span className="text-white"> =&gt;</span>
            <span className="text-gold">{` {`}</span> <br />
            &nbsp;{" "}
            <span className="italic opacity-50">// output a message</span>{" "}
            <br />
            &nbsp; <span className="opacity-60">console</span>.
            <span className="text-blue">log</span>
            <span className="text-pink">(</span>"
            <span className="text-white">{funcVar}</span>"
            <span className="text-pink">)</span>; <br />
            <span className="text-gold">{`}`}</span> <br />
            <span className="italic opacity-50">// end of function</span>
          </div>
          <button onClick={editCode}>
            <Image
              src={`${inputActive ? "/check.png" : "/pen.png"}`}
              width={30}
              height={30}
              quality={100}
              className="absolute pen-img bottom-2 right-2"
              alt="Edit text"
            />
          </button>
          <input
            name="log variable"
            autoFocus
            type="text"
            value={funcVar}
            onChange={(e) => setFuncVar(e.target.value)}
            className={`${
              inputActive ? "scale-100 opacity-100" : "scale-0 opacity-0"
            } transition-all absolute bg-white-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline-none px-2`}
          />
        </div>
        {/* / Code. Move out */}
        <p className="my-2 mt-20 font-regular opacity-80 font-italic text-md">
          Need my help on a project?
        </p>
        {/* pur color */}
        <Button
          text="Reach Out"
          alt="Contact me"
          href="#reach-out"
          scroll={true}
        />
      </div>
      <div className="hero pr-5 relative">
        {/* <Cube /> */}
        <Box />

        <Image
          src="/hero/js.png"
          width={120}
          height={120}
          priority
          quality={100}
          className="absolute js"
          alt="Programming languages"
        />
        <Image
          src="/hero/html.png"
          width={120}
          height={120}
          priority
          quality={100}
          className="absolute html"
          alt="Programming languages"
        />
        <Image
          src="/hero/css.png"
          width={120}
          height={120}
          priority
          quality={100}
          className="absolute css"
          alt="Programming languages"
        />
      </div>
    </header>
  );
}