import Image from 'next/image';

export default function Rate() {
  return (
    <div className="fixed bg-black inset-0 z-50 flex items-center justify-center">
      <div className="cont bg-white-20 p-8 my-4 rounded-lg w-3/5 h-2/3">
        <h2 className="font-regular text-lg font-light text-center">How do you like the site?</h2>
        <div className="imgs flex justify-center gap-12 items-center pt-10">
          <div className="like">
            <Image src="/emoji/dislike.png" width={280} height={280} quality={100} className='relative hover:scale-110 cursor-pointer top-10' />
          </div>
          <div className="dislike">
            <Image src="/emoji/like.png" width={280} height={280} quality={100} className='relative hover:scale-110 cursor-pointer top-10' />
          </div>
        </div>
      </div>
    </div>
  );
}