import { getCollection } from "astro:content";
import { useEffect, useState } from "react";
import type { CollectionEntry } from "astro:content";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { FaGlobe } from "react-icons/fa";

export default function Projects() {
  const [blog, setBlog] = useState<CollectionEntry<"blog">[]>();
  const [query, setQuery] = useState<string>("");
  useEffect(() => {
    console.log("masuk sini");
    const blog = getCollection("blog").then((value) => {
      setBlog(value);
      console.log({ value });
    });
  }, []);
  return (
    <div className="w-full">
      <div className="justify-center items-center gap-5 grid sm:grid-cols-2 lg:grid-cols-3">
        {blog?.map((value, key) => (
          <div
            className="sm:max-w-[300px] sm:h-[330px] md:h-[350px] border rounded-lg shadow-sm flex flex-col"
            key={key}>
            <div className="flex flex-col h-full">
              <a href={"/blog/" + value.slug}>
                <img src={value.data.thumbnail} alt={value.data.title} />
              </a>
              <div className="px-2 py-4 h-full flex flex-col justify-between">
                <div>
                  <a href={"/blog/" + value.slug}>
                    <h3 className="text-xl">{value.data.title}</h3>
                  </a>
                  <p>
                    {value.data.desc.length > 65
                      ? `${value.data.desc.slice(0, 65)} ....`
                      : value.data.desc}
                  </p>
                </div>
                <a
                  href={"/blog/" + value.slug}
                  className="text-right block text-blue-800">
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
