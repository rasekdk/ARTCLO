// Modules
import type { HTMLAttributes } from 'astro/types';

// Consts
import { asideColors } from '~/constants/Aside';

// Types
import type { ColorsType } from './Colors';

// Common
type ComponentSizeType = 'xsmall' | 'small' | 'medium' | 'large' | 'xLarge';

// Layout
export type LayoutPropsType = {
  headerSize?: HeaderSizeType;
  mainSize?: MainSizeType;
  asideBackground?: 'pattern' | ColorsType;
  asideSize?: AsideSizeType;
};

// Header
export type HeaderSizeType = ComponentSizeType;

//Main
export type MainSizeType = ComponentSizeType;

// Aside
export type AsideSizeType = ComponentSizeType;
export type AsideBackgroundType = keyof typeof asideColors;
export type AsideColorsType = (typeof asideColors)[AsideBackgroundType];

export interface AsidePropsType extends HTMLAttributes<'aside'> {
  size?: AsideSizeType;
  background?: AsideBackgroundType;
}
