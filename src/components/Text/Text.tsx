import { TextProps, TextWrapper } from './';

export const Text = (props: TextProps) => {
  const {
    children,
    size,
  } = props;

  return (
    <TextWrapper>
      {children}
    </TextWrapper>
  )
};