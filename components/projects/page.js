export default function Projects() {
  return (
    <div className="px-20 py-10">
      <h1 className="text-xl font-medium font-special">
        My{" "}
        <span className="pb-2 pr-2 text-black rounded bg-white-100">
          Projects
        </span>
      </h1>
      <div className="grid grid-cols-3 grid-rows-5 gap-5 p-8 my-4 rounded-lg bg-white-20 projects">
        <div className="col-span-1 row-span-3 rounded-md bg-blue"></div>
        <div className="col-span-1 row-span-1 rounded-md bg-gold h-52"></div>
        <div className="col-span-1 row-span-2 rounded-md bg-pink"></div>
        <div className="col-span-1 row-span-3 rounded-md bg-blue"></div>
        <div className="col-span-1 row-span-1 rounded-md bg-gold"></div>
        <div className="col-span-1 row-span-2 rounded-md bg-pink"></div>
        <div className="col-span-1 row-span-2 rounded-md bg-blue"></div>
        <div className="col-span-1 row-span-1 rounded-md bg-gold"></div>
      </div>
    </div>
  );
}