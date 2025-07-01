// Modules
import type { HTMLAttributes } from 'astro/types';

// Types
import type { ColorsType } from './Colors';
import type { CasingType, FontsType } from './Fonts';
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

export type HeadingTag = `h${1 | 2 | 3 | 4 | 5 | 6}`;
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export interface TitleType extends HTMLAttributes<HeadingTag> {
  level?: HeadingLevel;
  fontFamily?: FontsType;
  fontSize?: string;
  casing?: CasingType;
  color?: ColorsType;
  title?: string;
}
