import Link from 'next/link';
import Image from 'next/image';
import { Octokit } from "octokit";

// * export const revalidate = 3600 // revalidate at most every hour
// * fetch("https://...", { next: { revalidate: 3600 } });

export default async function GithubProjects() {
  const baseURL = "https://api.github.com";
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
    request: {
      agent: undefined,
      fetch: undefined,
      timeout: 3600,
      revalidate: 3600,
    },
  });
  const data = await octokit.request(`GET /user/repos`, { // * revalidate
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
      authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
    },
    baseUrl: baseURL,
    per_page: 3,
    sort: "pushed",
    page: 1,
  });
  // console.log(data.data[0]);
  const repos = data.data;

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
      <div className="tab flex border-2-border-pink flex-col items-end gap-3 my-4 px-8 py-5 bg-white-20 rounded-b-lg rounded-r-lg">
        <div className="repos flex justify-between w-full gap-5">
          {repos.map((repo) => (
            <Link
              key={repo.id}
              href={repo.html_url}
              target="blank"
              className="block w-full relative"
            >
              <div className="repo bg-white-20 py-4 px-8 border-pink w-full h-56 rounded-md relative">
                <h1 className="font-bold text-lg">{repo.name}</h1>
                <h3 className="font-code italic opacity-50">
                  {repo.full_name}
                </h3>
                <Link
                  href={repo.languages_url}
                  target="blank"
                  className="absolute bottom-0 right-0 p-4 text-gold"
                >
                  <Image
                    src={`/langs/lang ${repo.language}.png`}
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
              <Image className='absolute bottom-0 left-0 right-0 w-full' src="/langs/repo bg.png" width={300} height={270} />
            </Link>
          ))}
        </div>
        <button className="text-blue underline font-regular">see more</button>
      </div>
    </div>
  );
}