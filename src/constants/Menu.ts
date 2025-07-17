import { ROUTES } from '~/constants/Routes';

export const MENU_ITEMS = [
  {
    id: 'collection',
    label: 'Collection',
    url: ROUTES.COLLECTION,
  },
  {
    id: 'clothing',
    label: 'Clothing',
    url: ROUTES.CLOTHING,
  },
  {
    id: 'footwear',
    label: 'Footwear',
    url: ROUTES.FOOTWEAR,
  },
  {
    id: 'culture',
    label: 'Culture',
    url: ROUTES.CULTURE,
  },
] as const;

export const MENU_MODES = ['default', 'burger'] as const;
