import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    github: z.string(),
    website: z.string().nullable(),
    desc: z.string(),
    thumbnail: z.string(),
    top: z.optional(z.boolean()),
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    thumbnail: z.string(),
    desc: z.string(),
    published_date: z.string(),
    // director: z.string(),
    // release_date: z.number(),
    // genres: z.array(z.string()),
  }),
});

export const collections = {
  project: projectCollection,
  blog: blogCollection,
};
