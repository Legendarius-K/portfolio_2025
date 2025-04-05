import Link from "next/link";
import { AiOutlineSpotify } from "react-icons/ai";
import { IoMicCircleOutline } from "react-icons/io5";

const Misc = () => {
  return (
    <section className="max-w-[500px] mx-auto flex flex-col gap-4 border-l-[1px] border-gray-400 pl-4 self-start">
      <div>
        <h1 className="text-2xl underline decoration-[1px] decoration-gray-400">
          misc
        </h1>
        <h2 className="text-xl decoration-[1px] decoration-gray-400">
          i side hustle as a voice over artist, and i used to work full time as
          a music producer. here are a few of my creations.
        </h2>
      </div>
      <Link
        href="https://open.spotify.com/playlist/1BcCV3dmJo6dCmgfMkymnj?si=fb5b1c4bd6e84db9"
        className="group flex items-center gap-4 cursor-pointer"
        target="_blank"
      >
        <AiOutlineSpotify className="text-5xl min-w-[48px] text-gray-400 group-hover:text-gray-500" />
        <h3 className="text-xl">A few of my songs</h3>
      </Link>
      <Link
        href="https://www.youtube.com/watch?v=bURV-p73XXo&ab_channel=Barilla"
        className="group flex items-center gap-4 cursor-pointer"
        target="_blank"
      >
        <IoMicCircleOutline className="text-5xl min-w-[48px] text-gray-400 group-hover:text-gray-500" />
        <h3 className="text-xl">A commercial for Barilla</h3>
      </Link>
      <Link
        href="https://www.youtube.com/watch?v=xdn14aOnzqM&ab_channel=Storytel"
        className="group flex items-center gap-4 cursor-pointer"
        target="_blank"
      >
        <IoMicCircleOutline className="text-5xl min-w-[48px] text-gray-400 group-hover:text-gray-500" />
        <h3 className="text-xl">A commercial for Storytel</h3>
      </Link>
      <Link
        href="https://www.youtube.com/watch?v=01fjZ0Z91EQ&ab_channel=HauptLakrits"
        className="group flex items-center gap-4 cursor-pointer"
        target="_blank"
      >
        <IoMicCircleOutline className="text-5xl min-w-[48px] text-gray-400 group-hover:text-gray-500" />
        <h3 className="text-xl">A commercial for Haupt Lakrits</h3>
      </Link>
      <Link
        href="https://www.youtube.com/watch?v=VM-Q1HgSWf8"
        className="group flex items-center gap-4 cursor-pointer"
        target="_blank"
      >
        <IoMicCircleOutline className="text-5xl min-w-[48px] text-gray-400 group-hover:text-gray-500" />
        <h3 className="text-xl">A commercial for Nasonex</h3>
      </Link>
      <Link
        href="https://youtu.be/chNFKmjvlio?si=FemEh4sCYSn_DjRM&t=48"
        className="group flex items-center gap-4 cursor-pointer"
        target="_blank"
      >
        <IoMicCircleOutline className="text-5xl min-w-[48px] text-gray-400 group-hover:text-gray-500" />
        <h3 className="text-xl">A trailer for Disney Pixar&apos;s Lightyear</h3>
      </Link>
    </section>
  );
};

export default Misc;
