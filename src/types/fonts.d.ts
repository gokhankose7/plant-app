import {fonts} from '../utils/fonts';

export type FontFamily = keyof typeof fonts;

export type FontSizeKey =
  | 's4'
  | 's3'
  | 's2'
  | 's1'
  | 'm'
  | 'l1'
  | 'l2'
  | 'l3'
  | 'l4'
  | 'l5'
  | 'l6'
  | 'l7'
  | 'l8'
  | 'l9'
  | 'l10';
