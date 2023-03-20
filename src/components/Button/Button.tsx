import styled from 'styled-components';
import { Text } from '../';
import { ButtonProps } from './'

export const Button = (props: ButtonProps) => {
  const {
    text,
    icon,
  } = props;

  return (
    <ButtonWrapper>
      <ButtonItem>
        <Text>{text}</Text>
      </ButtonItem>
    </ButtonWrapper>
  )
};