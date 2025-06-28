// Const
import { FONTS, CASING } from '~/constants/Fonts';

// Types
export type FontKey = keyof typeof FONTS;
export type FontsType = (typeof FONTS)[FontKey];
export type FontsRecordType = typeof FONTS;

export type CasingKey = keyof typeof CASING;
export type CasingType = (typeof CASING)[CasingKey];
export type CasingRecordType = typeof CASING;
