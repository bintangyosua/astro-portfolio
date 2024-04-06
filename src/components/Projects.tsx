import { getCollection } from "astro:content";
import { useEffect, useState } from "react";
import type { CollectionEntry } from "astro:content";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { FaGlobe } from "react-icons/fa";

export default function Projects() {
  const [projects, setProjects] = useState<CollectionEntry<"project">[]>();
  const [query, setQuery] = useState<string>("");
  useEffect(() => {
    console.log("masuk sini");
    const blog = getCollection("project").then((value) => {
      setProjects(value);
      console.log({ value });
    });
  }, []);
  return (
    <div className="w-full">
      <h1 className="mb-3 text-2xl">Projects</h1>
      <div className="grid items-center justify-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects?.map((value, key) => (
          <div
            className="sm:max-w-[300px] sm:h-[310px] md:h-[330px] border rounded-lg shadow-sm flex flex-col"
            key={key}>
            <img src={value.data.thumbnail} alt={value.data.title} />
            <div className="flex flex-col justify-between h-full px-2 py-4">
              <div className="">
                <h3 className="text-xl">
                  <a href={"/projects/" + value.slug}>{value.data.title}</a>
                </h3>
                <p>
                  {value.data.desc.length > 75
                    ? `${value.data.desc.slice(0, 75)} ....`
                    : value.data.desc}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {value.data.github ? (
                    <a
                      href={value.data.github}
                      className="flex items-center gap-1">
                      <GitHubLogoIcon /> Github
                    </a>
                  ) : (
                    <></>
                  )}
                  <a href={"website"} className="flex items-center gap-1"></a>
                  {value.data.website ? (
                    <a
                      href={value.data.website}
                      className="flex items-center gap-1">
                      <FaGlobe /> Website
                    </a>
                  ) : (
                    <></>
                  )}
                </div>
                <a
                  href={`/projects/${"slug"}`}
                  className="block text-right text-blue-800">
                  {"Read More ->"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
