import { getCollection } from "astro:content";
import { useEffect, useState } from "react";
import type { CollectionEntry } from "astro:content";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { FaGlobe } from "react-icons/fa";
import BreadcrumbLayout from "../layouts/BreadcrumbLayout";
import { Image } from "astro:assets";
import DateIcon from "./icons/date";

export default function Projects() {
  const [blog, setBlog] = useState<CollectionEntry<"blog">[]>();
  const [query, setQuery] = useState<string>("");
  useEffect(() => {
    getCollection("blog").then((value) => {
      value.sort((a, b) =>
        b.data.published_date.localeCompare(a.data.published_date)
      );
      setBlog(value);
    });
  }, []);
  return (
    <div className="w-full">
      <h1 className="mb-3 text-2xl">Blog</h1>
      <BreadcrumbLayout link="/blog" />
      <div className="grid items-center justify-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {blog?.map((value, key) => (
          <div
            className="sm:max-w-[300px] sm:h-[330px] md:h-[350px] border rounded-lg shadow-sm flex flex-col"
            key={key}>
            <div className="flex flex-col h-full">
              <a href={"/blog/" + value.slug}>
                <img
                  src={value.data.thumbnail}
                  alt={value.data.title}
                  className="sm:object-cover sm:h-[164px] sm:w-full"
                />
              </a>
              <div className="flex flex-col justify-between h-full px-2 py-4">
                <div>
                  <a href={"/blog/" + value.slug}>
                    <h3 className="text-xl">{value.data.title}</h3>
                  </a>
                  <div className="flex gap-1 items-center">
                    <DateIcon /> <span>{value.data.published_date}</span>
                  </div>
                  <p>
                    {value.data.desc.length > 60
                      ? `${value.data.desc.slice(0, 60)} ....`
                      : value.data.desc}
                  </p>
                </div>
                <a
                  href={"/blog/" + value.slug}
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
