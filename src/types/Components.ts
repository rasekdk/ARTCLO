// Modules
import type { HTMLAttributes } from 'astro/types';

// Types
import type { ColorsType } from './Colors';
import type { CasingType } from './Fonts';
import type { AsideBackgroundType } from './Sections';

export type LinkPropsType = HTMLAttributes<'a'> & {
  casing?: CasingType;
  color?: ColorsType;
  isActive?: boolean;
  onClick?: (event: MouseEvent) => void;
};

export type CartScrollType = {
  count?: number;
  scroll?: boolean;
  background: AsideBackgroundType;
};
