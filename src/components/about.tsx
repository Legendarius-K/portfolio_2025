"use client";

const About = ({ onClick }: { onClick: () => void }) => {
  return (
    <section className="max-w-[500px] mx-auto flex flex-col gap-4 border-l-[1px] border-gray-400 pl-4">
      <div>
        <h1 className="text-2xl underline decoration-[1px] decoration-gray-400">
          darius kaya
        </h1>
        <h2 className="text-xl  decoration-[1px] decoration-gray-400">
          frontend developer
        </h2>
      </div>
      <p className="text-gray-600">
        I’m a frontend developer proficient in React, Next.js, TypeScript, and
        React Native. I love building scalable, responsive, and user-friendly
        applications with a focus on details.
      </p>
      <p className="text-gray-600">
        Currently, I’m developing Nenda’s customer portal app, where I manage
        frontend architecture, API integrations, and TypeScript-heavy logic. I
        have also worked on web projects for{" "}
        <a
          href="https://www.parkingtime.se/sv"
          target="blank"
          className="text-black underline cursor-pointer"
        >
          Parking Time
        </a>{" "}
        and{" "}
        <a
          href="https://www.tryggtandvard.se/"
          target="blank"
          className="text-black underline cursor-pointer"
        >
          Trygg Tandvård
        </a>
        , focusing on clean, maintainable code, design, and intuitive user
        experiences.
      </p>
      <p className="text-gray-600">
        With a background in{" "}
        <a
          href="https://open.spotify.com/playlist/1BcCV3dmJo6dCmgfMkymnj?si=fb5b1c4bd6e84db9"
          target="blank"
          className="text-black underline cursor-pointer"
        >
          music production
        </a>{" "}
        and{" "}
        <a
          href="https://www.youtube.com/watch?v=bURV-p73XXo&ab_channel=Barilla"
          target="blank"
          className="text-black underline cursor-pointer"
        >
          voice acting
        </a>
        , I bring a creative and structured approach to problem-solving. I
        thrive in agile environments, enjoy working in cross-functional teams
        with skilled colleagues, and always seek opportunities to learn and
        improve.
      </p>
      <p onClick={onClick} className="text-black underline cursor-pointer">
        Let’s chat!
      </p>
    </section>
  );
};

export default About;
