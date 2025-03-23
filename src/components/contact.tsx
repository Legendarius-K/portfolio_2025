import { useState, useEffect } from "react";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";

const Contact = () => {
  const [mailtoLink, setMailtoLink] = useState("");

  useEffect(() => {
    const emailUser = "darius.kaya";
    const emailDomain = "gmail.com";
    setMailtoLink(`mailto:${emailUser}[$€¢]${emailDomain}`);
  }, []);

  return (
    <section className="max-w-[500px] mx-auto flex flex-col gap-4 border-l-[1px] border-gray-400 pl-4">
      <div>
        <h1 className="text-2xl underline decoration-[1px] decoration-gray-400">
          contact
        </h1>
        <h2 className="text-xl decoration-[1px] decoration-gray-400">
          i'd love to get in touch
        </h2>
      </div>
      <Link
        href="https://linkedin.com/in/darius-kaya-76278826a"
        className="group flex items-center gap-4 cursor-pointer"
        target="_blank"
      >
        <CiLinkedin className="text-5xl text-gray-400 group-hover:text-gray-500" />
        <h3 className="text-xl">LinkedIn</h3>
      </Link>
      {mailtoLink && (
        <Link
          href={mailtoLink}
          className="group flex items-center gap-4 cursor-pointer"
          target="_blank"
        >
          <IoMailOutline className="text-5xl text-gray-400 group-hover:text-gray-500" />
          <h3 className="text-xl">E-mail</h3>
        </Link>
      )}
      <Link
        href="https://github.com/Legendarius-K"
        className="group flex items-center gap-4 cursor-pointer"
        target="_blank"
      >
        <FaGithub className="text-5xl text-gray-400 group-hover:text-gray-500" />
        <h3 className="text-xl">GitHub</h3>
      </Link>
    </section>
  );
};

export default Contact;
