import type { InferEntrySchema, Render, RenderedContent } from 'astro:content';

export type PostCollection = {
  id: string;
  render(): Render['.md'];
  slug: string;
  body: string;
  collection: 'culture';
  data: InferEntrySchema<'culture'>;
  rendered?: RenderedContent;
  filePath?: string;
}[];
