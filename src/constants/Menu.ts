import { ROUTES } from '~/constants/Routes';

export const MENU_ITEMS = [
  {
    id: 'collection',
    label: 'Collection',
    url: ROUTES.COLLECTION,
    disabled: false,
  },
  {
    id: 'clothing',
    label: 'Clothing',
    url: ROUTES.CLOTHING,
    disabled: true,
  },
  {
    id: 'footwear',
    label: 'Footwear',
    url: ROUTES.FOOTWEAR,
    disabled: true,
  },
  {
    id: 'culture',
    label: 'Culture',
    url: ROUTES.CULTURE,
    disabled: false,
  },
] as const;

export const MENU_MODES = ['default', 'burger'] as const;
