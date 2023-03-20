import styled from 'styled-components';
import { BACKGROUND_INPUT, BORDER_DEFAULT, BORDER_RADIUS_DEFAULT, FONT_COLOR_DEFAULT } from '../..';

export const FieldWrapper = styled.div`
  position: relative;
`;

export const FieldInput = styled.input`
  position: relative;
  outline: none;
  background: ${BACKGROUND_INPUT};
  color: ${BACKGROUND_INPUT};
  border: ${BORDER_DEFAULT};
  border-radius: ${BORDER_RADIUS_DEFAULT};
  caret-color: ${FONT_COLOR_DEFAULT};
  z-index: 2;
`;