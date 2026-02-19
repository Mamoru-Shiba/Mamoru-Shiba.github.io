import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const services = defineCollection({
  loader: file("src/content/services.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    url: z.string().url(),
    icon: z.string(),
  }),
});

export const collections = { services };
