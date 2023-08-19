import Image from 'next/image';

export default function Button({ text, alt }) {
  return (
    <button className="flex items-center gap-2 px-6 py-1 border-2 rounded-md font-special text-md bg-white-20">
      <Image
        src="/enter.png"
        width={30}
        height={30}
        quality={100}
        className=""
        alt={ alt }
      />
      <span>{ text }</span>
    </button>
  );
}