import { workItems } from "@/utils/data";
import { WorkItemProps } from "@/utils/types";
import Link from "next/link";

const WorkItem = ({
  href,
  iconText,
  title,
  description,
  disabled = false,
}: WorkItemProps) => {
  return (
    <Link
      href={href}
      className={`group flex items-center gap-4 cursor-pointer ${
        disabled ? "pointer-events-none" : ""
      }`}
      target="blank"
    >
      <div className="h-[60px] w-[60px] bg-gray-200 rounded-full flex justify-center items-center text-3xl text-gray-400 group-hover:bg-gray-300 transition-all">
        {iconText}
      </div>
      <div className="flex flex-col justify-center max-w-[270px] sm:max-w-[350px]">
        <h3 className="text-xl">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default function Work() {
  return (
    <section className="max-w-[500px] mx-auto flex flex-col gap-4 border-l-[1px] border-gray-400 pl-4">
      <div>
        <h1 className="text-2xl underline decoration-[1px] decoration-gray-400">
          work
        </h1>
        <h2 className="text-xl  decoration-[1px] decoration-gray-400">
          a small selection of my projects
        </h2>
      </div>
      {workItems.map((item, index) => (
        <WorkItem
          key={index}
          href={item.href}
          iconText={item.iconText}
          title={item.title}
          description={item.description}
          disabled={item.disabled}
        />
      ))}
    </section>
  );
}
