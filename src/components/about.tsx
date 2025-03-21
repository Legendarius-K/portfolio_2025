const About = () => {
  return (
    <section className="max-w-[500px] mx-auto flex flex-col gap-4 border-l-[1px] border-gray-400 pl-4">
      <div>
        <h1 className="text-2xl underline decoration-[1px] decoration-gray-400">
          darius kaya
        </h1>
        <h2 className="text-xl underline decoration-[1px] decoration-gray-400">
          frontend developer
        </h2>
      </div>
      <p className="text-gray-600">
        I’m a frontend developer proficient in React, Next.js, TypeScript,
        and React Native. I love building scalable, responsive, and
        user-friendly applications with an eye for detail and performance
        optimization.
      </p>
      <p className="text-gray-600">
        Currently, I’m developing Nenda’s customer portal app, where I manage
        frontend architecture, API integrations, and TypeScript-heavy logic. I
        have also worked on web projects for Parking Time and Trygg Tandvård,
        focusing on clean, maintainable code and intuitive user experiences.
      </p>
      <p className="text-gray-600">
        With a background in music production, I bring a creative and structured
        approach to problem-solving. I thrive in agile environments, enjoy
        working in cross-functional teams, and always seek opportunities to
        learn and improve.
      </p>
      <p className="text-gray-600">Let’s build something great together!</p>
    </section>
  );
};

export default About;
