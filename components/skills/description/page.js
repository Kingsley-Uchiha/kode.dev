import Link from "next/link";
import Image from 'next/image';

export default function Description({ head, body, posi, open, skill, link }) {
  return (
    <div
      className={`${
        !open && "opacity-0"
      } fixed border-2 border-white rounded-lg bg-black max-w-sm transition-all z-10 -translate-x-1/4 -translate-y-1/4`}
      style={posi}
      onMouseMove={(e) => e.stopPropagation()}
    >
      <div className="bg-white-20 font-code py-2 px-4 font-normal flex justify-between items-center">
        <h3>{head}</h3>
        <div className="skill flex gap-2">
          {skill &&
            skill.map((point, i) => (
              <div
                key={i}
                className={`${
                  point === 1 ? "bg-blue" : "border-2 border-blue"
                } w-3 h-3 rounded-full`}
              ></div>
            ))}
        </div>
      </div>
      <div className="font-regular font-light py-2 px-4 pb-5">
        <p>{body}</p>
        <Link
          href={link}
          target="_blank"
          className="text-blue underline pt-2 flex gap-2 items-center link"
        >
          {link}
          <Image
            src="/jump.png"
            width={15}
            height={15}
            className="-rotate-45 opacity-50"
          />{" "}
          {/* ---- new tab images ---- */}
          {/* ---- how to edit child on hover "Tailwind" ---- */}
        </Link>
      </div>
    </div>
  );
}
