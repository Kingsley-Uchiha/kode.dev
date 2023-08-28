import Link from 'next/link';
import { Octokit } from "octokit";

export default function GithubProjects() {
  
  return (
    <div className="github-repos p-20">
      <div className="top-bar flex gap-8 items-center">
        <Link
          href="https://www.github.com/Kingsley-Uchiha"
          target="blank"
          className="URL bg-white-20 py-4 px-8 rounded-t-lg bg-design c border-2 border-pink font-regular underline font-normal"
        >
          https://www.github.com/Kingsley-Uchiha
        </Link>
        <div className="comment opacity-50 font-code font-normal italic">
          // my github projects
        </div>
      </div>
      <div className="tab flex flex-col items-end gap-3 my-4 px-8 py-5 bg-white-20 rounded-b-lg rounded-r-lg">
        <div className="repos flex justify-between w-full gap-5">
          <div className="repo bg-blue w-full h-56 rounded-md"></div>
          <div className="repo bg-gold w-full h-56 rounded-md"></div>
          <div className="repo bg-pink w-full h-56 rounded-md"></div>
        </div>
        <button className="text-blue underline font-regular">
          see more
        </button>
      </div>
    </div>
  );
}