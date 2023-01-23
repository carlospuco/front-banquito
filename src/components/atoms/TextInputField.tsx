import React from 'react';

interface TextInputProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ name, value, onChange }) => {
  return <input type="text" name={name} value={value} onChange={onChange} />;
};

export default TextInput;
