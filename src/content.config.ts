import { defineCollection, z } from "astro:content";

import { glob, file } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    updatedDate: z.date(),
    tags: z.array(z.string()),
    category: z.string(),
    draft: z.boolean(),
    minutesRead: z.number(),
  }),
});

export const collections = { posts };
