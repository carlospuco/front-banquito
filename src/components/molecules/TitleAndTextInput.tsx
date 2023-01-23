import React from 'react';
import LabelText from '../atoms/LabelText';
import TextInputField from '../atoms/TextInputField';


interface TitleAndTextInputProps {
  title: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TitleAndTextInput: React.FC<TitleAndTextInputProps> = ({ title, name, value, onChange }) => {
  return (
    <div>
      <LabelText>{title}</LabelText>
      <TextInputField name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default TitleAndTextInput;
