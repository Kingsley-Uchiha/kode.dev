import Image from "next/image";

export default function Loader() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full loaded fixed z-20 bg-black">
      <div className="flex justify-center items-center relative">
        <Image
          src="/loading image.png"
          width={300}
          height={100}
          priority
          quality={100}
          className="z-10"
          alt="Loading"
        />
        <div className="bg-white-100 load w-0 h-cover absolute left-0"></div>
      </div>
    </div>
  );
}