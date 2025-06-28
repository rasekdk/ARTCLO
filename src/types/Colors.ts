// Const
import COLORS from '~/constants/Colors';

// Types
export type ColorKey = keyof typeof COLORS;
export type ColorsType = (typeof COLORS)[ColorKey];
export type ColorsRecordType = typeof COLORS;
