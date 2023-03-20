export enum TextSize {
  S = 's',
}

export type TextSizeKey = keyof typeof TextSize;

export type TextSizeProp = TextSize[TextSizeKey];

export type TextProps = {
  size?: TextSizeProp,
};