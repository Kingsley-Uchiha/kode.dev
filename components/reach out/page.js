"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ReachOut() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [msgSent, setMsgSent] = useState("");

  const sentMsg = () => {
    setName("");
    setEmail("");
    setMessage("");
    setMsgSent("sent");
    setTimeout(() => {
      setMsgSent("");
    }, 1500);
  };
  const sendFailed = () => {
    setMsgSent("failed");
    setTimeout(() => {
      setMsgSent("");
    }, 1500);
  }
  const sendEmail = (e) => {
    e.preventDefault();
    if (name == "" || email == "" || message == "") {
      sendFailed();
      return;
    }
    const myEmail = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
        myEmail,
        process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.status, result.text);
          sentMsg();
        },
        (error) => {
          console.log(error);
          sendFailed();
        }
      );
  };

  return (
    <div className="px-20 py-10 " id="reach-out">
      <h1 className="text-xl font-medium font-special">
        Reach{" "}
        <span className="pb-2 pr-2 text-black rounded bg-white-100">Out</span>
      </h1>
      <div className="form gap-20 p-8 my-12 rounded-lg bg-white-20 flex justify-between font-code">
        <div className="w-1/3 gap-1 flex flex-col">
          <div className="p-8 rounded-md bg-white-20 code-area font-code select-none font-light">
            <span className="text-pink">const</span>
            <span className="text-blue"> msg</span> =
            <span className="text-gold">{` {`}</span>
            <br />
            &nbsp; <span className="opacity-60">name</span>: "
            {name.slice(0, 20)}
            {name.length > 20 ? "..." : ""}
            ", <br />
            &nbsp; <span className="opacity-60">email</span>: "
            {email.slice(0, 20)}
            {email.length > 20 ? "..." : ""}
            ", <br />
            &nbsp; <span className="opacity-60">description</span>: "
            {message.slice(0, 20)}
            {message.length > 20 ? "..." : ""}
            ", <br />
            <span className="text-gold">{`}`}</span> <br />
            <br />
            <span className="text-pink">const</span>
            <span className="text-blue"> sendMsg</span>
            <span className="text-gold">()</span> =&gt;
            <span className="text-gold">{` {`}</span>
            <br />
            &nbsp; <span className="text-blue">fetch</span>
            <span className="text-pink">(</span>
            <span className="URL">"private url!"</span>,{" "}
            <span className="text-gold">{" {"}</span>
            <br />
            &nbsp; &nbsp; <span className="opacity-60">method</span>: "POST",{" "}
            <br />
            &nbsp; &nbsp; <span className="opacity-60">headers</span>:{" "}
            <span className="text-gold">{`{}`}</span>, <br />
            &nbsp; &nbsp; <span className="opacity-60">body</span>:{" "}
            <span className="text-pink">JSON</span>.
            <span className="text-blue">stringify</span>
            <span className="text-gold">(</span>msg
            <span className="text-gold">)</span>
            <br />
            &nbsp; <span className="text-gold">{" }"}</span>
            <span className="text-pink">)</span>
            <br />
            <span className="text-gold">{" }"}</span>
          </div>

          <div className="social-icons p-8 rounded-md bg-white-20">
            <h1 className="text-md font-light font-regular">
              Ibhasebhor Kingsley
            </h1>
            <h3 className="font-light font-regular">
              ibhasebhorkingsley@gmail.com
            </h3>
            <div className="links flex gap-5 mt-5 items-center">
              <Link href="https://github.com/Kingsley-Uchiha">
                <Image
                  src="/social/GitHub.png"
                  width={40}
                  height={40}
                  alt="GitHub"
                />
              </Link>
              <Link href="https://twitter.com/Kingsley_Uchiha">
                <Image
                  src="/social/X.png"
                  width={40}
                  height={40}
                  alt="X (Twitter)"
                />
              </Link>
              <Link href="https://www.linkedin.com/in/kingsley-ibhasebhor-43306b232/">
                <Image
                  src="/social/In.png"
                  width={40}
                  height={40}
                  alt="LinkedIn"
                />
              </Link>
            </div>
          </div>
        </div>
        <form
          className="form flex-col flex-1 items-end justify-end relative"
          id="my-form"
          onSubmit={sendEmail}
        >
          <div className="flex gap-5 justify-between text-md font-thin">
            <label htmlFor="name" className="mt-1">
              name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-3/4 py-1 px-2 bg-white-20 rounded-md outline-none border-none"
            />
          </div>
          {}
          <div className="flex gap-5 my-1 justify-between text-md font-thin">
            <label htmlFor="email" className="mt-1">
              email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-3/4 py-1 px-2 bg-white-20 rounded-md outline-none border-none"
            />
          </div>
          {}
          <div className="flex gap-5 justify-between">
            <label htmlFor="desc" className="mt-1 text-md font-thin">
              description:
            </label>
            <textarea
              name="desc"
              id="desc"
              cols="30"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-3/4 py-1 px-2 bg-white-20 rounded-md outline-none resize-none border-none font-thin text-md"
            ></textarea>
          </div>
          <button
            className={`${
              msgSent && "disabled:"
            } outline-none bg-white-20 text-white font-thin py-2 px-8 rounded-md absolute right-5 form-submit backdrop-blur-md`}
          >
            Send &gt;
          </button>
          {msgSent == "failed" && <div className="failed rounded-md bg-black border-pink border-1 font-code px-3 py-2 inline absolute z-10 font-light right-0 -translate-y-1/3">
            Failed to send message, try again
          </div>}
          {msgSent == "sent" && <div className="failed rounded-md bg-black border-blue border-1 font-code px-3 py-2 inline absolute z-10 font-light right-0 -translate-y-1/3">
            Successfully sent message
          </div>}
        </form>
      </div>
    </div>
  );
}
