import { defineCollection, z } from 'astro:content';
import { object } from 'astro:schema';

const cultureCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    mainImage: z.string(),
    date: z.string(),
    images: z.any().optional(),
  }),
});

export const collections = {
  culture: cultureCollection,
};
