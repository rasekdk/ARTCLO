import { defineCollection, z } from 'astro:content';

const cultureCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    mainImage: z.string(),
    date: z.string(),
  }),
});

export const collections = {
  culture: cultureCollection,
};
