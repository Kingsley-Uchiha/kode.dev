import Image from 'next/image';

export default function Profile() {
  return (
    <div className="relative">
      <div className="absolute rounded w-60 h-60 bg-gold -z-10 -top-6 -left-6"></div>
      <Image src="/profile.jpg" width={400} height={400} className="rounded"  alt="An image of a wonderful developer"/>
      <div className="absolute px-2 py-1 text-black rounded-sm outline bg-blue top-3 left-3 font-regular text-md">Ibhasebhor Kingsley</div>
      <div className="absolute rounded w-96 h-96 bg-pink -z-10 top-12 left-12"></div>
    </div>
  );
}