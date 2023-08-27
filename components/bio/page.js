import Button from "../button/page";
import Profile from "../profile/page";

export default function Bio() {
  return (
    <div className="px-20 py-10 bio">
      <h1 className="mb-10 text-xl font-medium font-special">
        My <span className="pr-2 text-black rounded bg-white-100">Bio.</span>
      </h1>
      <div className="flex justify-between">
        <Profile />
        <div className="text">
          <h1 className="text-lg font-medium font-special">Objective</h1>
          <p className="max-w-3xl text-md font-regular">
            Highly motivated and detail-oriented developer seeking a full-time
            web development job/gig to enhance my technical skills in a
            professional setting. Passionate about creating{" "}
            <span className="text-gold">user-friendly</span> and{" "}
            <span className="text-pink">visually appealing</span> web
            applications to deliver exceptional{" "}
            <span className="text-blue">user experiences</span>.
          </p>
          <br />
          <h1 className="text-lg font-medium font-special">
            Technical Skills:
          </h1>
          <ul className="list-disc list-inside text-md font-regular">
            <li>Programming Languages: JavaScript, HTML...</li>
            <li>Frameworks/Libaries: React, Tailwind...</li>
            <li>Version Control: Git GitHub</li>
            <li>Responsive Web Design</li>
            <li>Cross-Browser Compatibility</li>
            <li>Debugging and Troubleshooting</li>
          </ul>
          <br />
          <Button text="Download CV" alt="Download CV" href="" download />
        </div>
      </div>
    </div>
  );
}