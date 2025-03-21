import Link from "next/link";

const Work = () => {
  return (
    <section className="max-w-[500px] mx-auto flex flex-col gap-4 border-l-[1px] border-gray-400 pl-4">
      <div>
        <h1 className="text-2xl underline decoration-[1px] decoration-gray-400">
          work
        </h1>
        <h2 className="text-xl underline decoration-[1px] decoration-gray-400">
          a small selection of my projects
        </h2>
      </div>
      <Link
        href="https://www.parkingtime.se/sv"
        className="group flex items-center gap-4 cursor-pointer"
        target="blank"
      >
        <div className="h-[60px] w-[60px] bg-gray-200 rounded-full flex justify-center items-center text-3xl text-gray-400 group-hover:bg-gray-300 transition-all">
          PT
        </div>
        <div className="flex flex-col justify-center max-w-[270px] sm:max-w-[350px]">
          <h3 className="text-xl">Parking Time</h3>
          <p className="text-gray-600 ">
            Custom website built for Parking Time using Next.js, Typescript,
            Tailwind, and utilizing Sanity, i18n, Google Analytics and more.
          </p>
        </div>
      </Link>
      <Link
        href="https://www.tryggtandvard.se/"
        className="group flex items-center gap-4 cursor-pointer"
        target="blank"
      >
        <div className="h-[60px] w-[60px] bg-gray-200 rounded-full flex justify-center items-center text-3xl text-gray-400 group-hover:bg-gray-300 transition-all">
          TT
        </div>
        <div className="flex flex-col justify-center  max-w-[270px] sm:max-w-[350px]">
          <h3 className="text-xl">Trygg Tandvård</h3>
          <p className="text-gray-600 ">
            Custom website built for Trygg Tandvård in Tranås using Next.js,
            Typescript, Tailwind.
          </p>
        </div>
      </Link>
      <Link
        href="https://buzzboard-two.vercel.app/"
        className="group flex items-center gap-4 cursor-pointer"
        target="blank"
      >
        <div className="h-[60px] w-[60px] bg-gray-200 rounded-full flex justify-center items-center text-3xl text-gray-400 group-hover:bg-gray-300 transition-all">
          BB
        </div>
        <div className="flex flex-col justify-center  max-w-[270px] sm:max-w-[350px]">
          <h3 className="text-xl">BuzzBoard</h3>
          <p className="text-gray-600 ">
            Reddit inspired social media platform built using Next.js,
            Typescript, Tailwind, Supabase, and more.
          </p>
        </div>
      </Link>
      <Link
        href="https://buzzboard-mongodb-frontend.vercel.app/"
        className="group flex items-center gap-4 cursor-pointer"
        target="blank"
      >
        <div className="h-[60px] w-[60px] bg-gray-200 rounded-full flex justify-center items-center text-3xl text-gray-400 group-hover:bg-gray-300 transition-all">
          SH
        </div>
        <div className="flex flex-col justify-center  max-w-[270px] sm:max-w-[350px]">
          <h3 className="text-xl">Shreddit</h3>
          <p className="text-gray-600 ">
            Another Reddit clone but this time using MongoDB and its ecosystem.
          </p>
        </div>
      </Link>
      <Link
        href="https://memory-testing.vercel.app/"
        className="group flex items-center gap-4 cursor-pointer"
        target="blank"
      >
        <div className="h-[60px] w-[60px] bg-gray-200 rounded-full flex justify-center items-center text-3xl text-gray-400 group-hover:bg-gray-300 transition-all">
          ME
        </div>
        <div className="flex flex-col justify-center  max-w-[270px] sm:max-w-[350px]">
          <h3 className="text-xl">Memorista</h3>
          <p className="text-gray-600 ">
            A classic memory game built for my kids using with Next.js,
            Typescript and Tailwind.
          </p>
        </div>
      </Link>
      <Link
        href=""
        className="group flex items-center gap-4 cursor-pointer pointer-events-none"
        target="blank"
      >
        <div className="h-[60px] w-[60px] bg-gray-200 rounded-full flex justify-center items-center text-3xl text-gray-400 group-hover:bg-gray-300 transition-all">
          NE
        </div>
        <div className="flex flex-col justify-center  max-w-[270px] sm:max-w-[350px]">
          <h3 className="text-xl">Nenda Effect App</h3>
          <p className="text-gray-600 ">
            An Android/iOS app built for Nenda using React Native, Typescript,
            Nativewind, Redux, RTK Query and more.
          </p>
        </div>
      </Link>
    </section>
  );
};

export default Work;
