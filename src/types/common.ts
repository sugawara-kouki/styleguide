import { LANGUAGE_CONSTANTS } from '../constants/languageConstants';

/**
 * propsでchildrenのみ受け取る際の型
 */
type PropsOnlyChildren = {
  /** 子要素のReactNode */
  children: React.ReactNode;
};

/**
 * フォントサイズをtailwindcss形式で指定する際の型
 */
type FontSize =
  | 'text-xs'
  | 'text-sm'
  | 'text-base'
  | 'text-lg'
  | 'text-xl'
  | 'text-2xl'
  | 'text-3xl'
  | 'text-4xl'
  | 'text-5xl'
  | 'text-6xl'
  | 'text-7xl'
  | 'text-8xl'
  | 'text-9xl';

/**
 * シンタックスハイライトで使用できる言語の型
 */
type SupportLanguageOfSyntaxHighlight =
  (typeof LANGUAGE_CONSTANTS)[keyof typeof LANGUAGE_CONSTANTS];

/**
 * propsでfontSizeのみを受け取る際の型
 */
type PropsOnlyFontSize = {
  fontSize?: FontSize;
};

/**
 * PropsでfontSizeとtailwindのクラス名を受け取る際の型
 */
type PropsFontSizeAndTailwindClass = {
  fontSize?: FontSize;
  tailwindClass?: string;
};

/**
 * Propsでchildrenとtailwindのクラス名を受け取る際の型
 */
type PropsChildrenAndTailwindClass = {
  children: React.ReactNode;
  tailwindClass?: string;
};

export type {
  PropsOnlyChildren,
  FontSize,
  PropsOnlyFontSize,
  SupportLanguageOfSyntaxHighlight,
  PropsFontSizeAndTailwindClass,
  PropsChildrenAndTailwindClass
};
