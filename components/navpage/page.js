import Image from 'next/image';
import Link from 'next/link';

export default function NavPage() {
  return (
    <div className="navpage top-full absolute bg-black">
      <ul className="text-lg font-regular absolute left-1/3 -translate-x-1/2 links flex flex-col p-32 list-disc">
        <li>
          <Link href="#">Home</Link>
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