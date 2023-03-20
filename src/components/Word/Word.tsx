import styled from 'styled-components';
import { ChangeEventHandler } from 'react';
import {
  BACKGROUND_INPUT,
  BORDER_DEFAULT,
  FONT_LINE_HEIGHT_DEFAULT,
  FONT_SIZE_DEFAULT,
  BORDER_RADIUS_DEFAULT,
  FONT_COLOR_DEFAULT
} from '../..';

type WordProps = {
  value: string,
  left: number,
  height: number,
  onChange: ChangeEventHandler,
};

const WordWrap = styled.div`
  position: absolute;
  top: 2px;
`;

const WordInput = styled.textarea`
  position: relative;
  border: none;
  outline: none;
  resize: none;
  font-size: ${FONT_SIZE_DEFAULT};
  line-height: ${FONT_LINE_HEIGHT_DEFAULT};
  width: 10px;
  background: ${BACKGROUND_INPUT};
  z-index: 3;
  text-align: center;
`;

const WordBorder = styled.div`
  position: absolute;
  width: ${FONT_LINE_HEIGHT_DEFAULT};
  border: ${BORDER_DEFAULT};
  background: ${BACKGROUND_INPUT};
  border-radius: ${BORDER_RADIUS_DEFAULT};
  z-index: 1;
  left: -1px
`;

export const Word = (props: WordProps) => {
  const {
    value,
    onChange,
    height,
    left
  } = props;

  return (
    <WordWrap style={{ left: left + 4 }}>
      <WordBorder style={{ height: height + 5 }}/>
      <WordInput
        value={value}
        onChange={onChange}
        style={{
          height,
          caretColor: !value.length ? BACKGROUND_INPUT : FONT_COLOR_DEFAULT,
        }}
      />
    </WordWrap>
  )
};