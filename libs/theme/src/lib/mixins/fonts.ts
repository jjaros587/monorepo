import { css } from 'styled-components';
import { FontColorsTokens, TextColors } from '../tokens/colors';
import { FontSize, FontFamily, FontWeight } from '../tokens/font';

type TextMixinProps = {
  size?: keyof typeof FontSize;
  family?: keyof typeof FontFamily;
  weight?: keyof typeof FontWeight;
  color?: TextColors;
};

const _textMixin =
  ({
    weight = 'regular',
    size = 'body',
    family = 'body',
    color: defaultColor = 'basic',
  }: TextMixinProps = {}) =>
  (color?: TextColors) =>
    css`
      font: ${FontWeight[weight]} ${FontSize[size]} ${FontFamily[family]};
      color: ${FontColorsTokens[color || defaultColor]};
    `;

const textVariants = {
  display: _textMixin({ size: 'display' }),
  headline1: _textMixin({ weight: 'medium', size: 'headline1' }),
  headline2: _textMixin({ weight: 'medium', size: 'headline2' }),
  body: _textMixin(),
  bodyMedium: _textMixin({ weight: 'medium' }),
  data: _textMixin({ family: 'data' }),
  caption: _textMixin({ size: 'caption' }),
  paragraph: _textMixin(),
} as const;

export const font = Object.assign(_textMixin, textVariants);
export type TextVariants = keyof typeof textVariants;
