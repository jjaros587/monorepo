import { TextVariants } from '@theme';

export function getTextTag(
  variant?: TextVariants
): keyof JSX.IntrinsicElements | undefined {
  switch (variant) {
    case 'caption':
      return 'small';
    case 'data':
      return 'code';
    case 'display':
    case 'headline1':
      return 'h1';
    case 'headline2':
      return 'h2';
    case 'body':
    case 'bodyMedium':
      return 'span';
    case 'paragraph':
      return 'p';
  }
}
