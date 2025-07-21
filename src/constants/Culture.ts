import { ROUTES } from './Routes';

export const CULTURE_CATEGORY = {
  ALL: 'all',
  LOOKBOOKS: 'lookbooks',
  POSTS: 'posts',
};

export const CULTURE_PAGES = [
  {
    name: 'All',
    category: 'all',
    href: ROUTES.CULTURE,
  },
  {
    name: 'Lookbooks',
    category: CULTURE_CATEGORY.LOOKBOOKS,
    href: ROUTES.LOOKBOOKS,
  },
  {
    name: 'Posts',
    category: CULTURE_CATEGORY.POSTS,
    href: ROUTES.POSTS,
  },
] as const;
