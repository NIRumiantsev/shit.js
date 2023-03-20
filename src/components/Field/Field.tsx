import { useEffect, useRef, useState } from 'react';
import { FieldInput, FieldWrapper } from './'
import { Word } from '..';

export const Field = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const words = inputValue ? inputValue.split(' ') : [];

  const fieldRef = useRef<any>(null);

  useEffect(() => {
    if (!fieldRef.current || words.length === 0) return;
    const wordFields = fieldRef.current?.querySelectorAll('textarea');
    const lastWordField = Array.from(wordFields)?.splice(-1)[0];
    const lastWordValue = lastWordField.value;
    lastWordField.value = '';
    lastWordField.focus();
    lastWordField.value = lastWordValue;
  }, [words.length]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleWordChange = (e: any, index: number) => {
    const lastSymbol = e.nativeEvent.data;
    const value = e.target.value;
    const newWords = [...words];
    if (lastSymbol === ' ') {
      fieldRef.current.focus();
      setInputValue(inputValue + ' ');
      return;
    }
    if (!value) {
      const fieldInput = fieldRef.current.firstChild;
      fieldInput.value = '';
      fieldInput.focus();
      fieldInput.value = inputValue;
      newWords.splice(index, 1);
      setInputValue(newWords.join(' '));
      return;
    }
    newWords[index] = value;
    setInputValue(newWords.join(' '));
  };

  return (
    <FieldWrapper ref={fieldRef}>
      <FieldInput
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      {inputValue.length > 0 && words.map((word, index) => (
        <Word
          value={word}
          onChange={(e) => handleWordChange(e, index)}
          height={word.length * 14}
          left={index * 20}
        />
      ))}
    </FieldWrapper>
  )
};