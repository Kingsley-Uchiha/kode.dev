import Image from 'next/image';
import { useState } from 'react';
import NavPage from '../navpage/page';

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="navbar bg-black fixed z-10">
      <nav className={`nav border-b-2 flex justify-between items-center`}>
        <div className="logo flex items-baseline">
          <Image
            src="/white logo.png"
            width={50}
            height={50}
            quality={100}
            className=""
            alt="Kode"
          />
          <div className="logo-text font-regular text-md font-normal">
            <span className="text-gold">.js</span>
            <span className="text-pink">.dev</span>
          </div>
        </div>
        <div
          onClick={() => setOpenNav(!openNav)}
          className={`${
            openNav ? "open" : ""
          } bars bg-black w-11 h-10 flex flex-col justify-between cursor-pointer relative`}
        >
          <div className="bar h-2 w-full bg-white-100 transition-all"></div>
          <div className="bar h-2 w-full bg-white-100 transition-all absolute right-0 top-1/2 -translate-y-1/2"></div>
          <div className="bar h-2 w-full bg-white-100 transition-all"></div>
        </div>
      </nav>
      {openNav && <NavPage />}
    </div>
  );
}