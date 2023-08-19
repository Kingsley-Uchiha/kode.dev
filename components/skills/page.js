import Image from 'next/image';

export default function Skills() {
  return (
    <div className="px-20 py-10 skills">
      <h1 className="text-xl font-medium font-special">
        My <span className="px-2 text-black rounded bg-white-100 _checking">Skills</span>
      </h1>
      <div className="grid grid-cols-11 grid-rows-3 gap-5 p-8 my-4 rounded-lg bg-white-20 skills-container">
        <div className="flex items-center justify-center col-span-2 row-span-2 rounded-md skill bg-white-100 p-7 b">
          <Image src="/skills/next.js.png" width={200} height={200} alt="next.js" />
        </div>
        <div className="flex items-center justify-center col-span-3 row-span-2 rounded-md skill bg-white-100 p-7 b">
          <Image src="/skills/tailwind.png" width={170} height={170} alt="tailwind" />
        </div>
        <div className="flex items-center justify-center col-span-2 row-span-3 rounded-md skill bg-white-100 p-7 b">
          <Image src="/skills/firebase.png" width={110} height={110} alt="firebase" />
        </div>
        <div className="flex items-center justify-center col-span-2 row-span-2 rounded-md skill bg-white-100 p-7 b">
          <Image src="/skills/javascript.png" width={200} height={200} alt="javascript" />
        </div>
        <div className="flex items-center justify-center p-5 rounded-md skill bg-white-100 b">
          <Image src="/skills/git.png" width={90} height={90} alt="git" />
        </div>
        <div className="flex items-center justify-center p-5 rounded-md skill bg-white-100 b">
          <Image src="/skills/npm.png" width={90} height={90} alt="npm" />
        </div>
        <div className="flex items-center justify-center col-span-2 row-span-2 rounded-md skill bg-white-100 p-7 b">
          <Image src="/skills/react.png" width={200} height={200} alt="react" />
        </div>
        <div className="flex items-center justify-center p-6 rounded-md skill bg-white-100 b">
          <Image src="/skills/node.png" width={90} height={90} alt="node" />
        </div>
        <div className="flex items-center justify-center col-span-3 gap-3 p-5 rounded-md skill bg-white-100 b">
          <Image src="/skills/html.png" width={60} height={60} alt="html" />
          <Image src="/skills/and.png" width={30} height={30} alt="and" />
          <Image src="/skills/css.png" width={60} height={60} alt="css" />
        </div>
        <div className="flex items-center justify-center p-5 rounded-md skill bg-white-100 b">
          <Image src="/skills/bootstrap.png" width={90} height={90} alt="bootstrap" />
        </div>
        <div className="flex items-center justify-center p-5 rounded-md skill bg-white-100 b">
          <Image src="/skills/typescript.png" width={90} height={90} alt="typescript" />
        </div>
        <div className="flex items-center justify-center p-5 rounded-md skill bg-white-100 b">
          <Image src="/skills/sass.png" width={90} height={90} alt="sass" />
        </div>
      </div>
    </div>
  );
}