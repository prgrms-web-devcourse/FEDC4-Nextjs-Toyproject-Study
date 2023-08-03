import React, { FC, useState } from 'react';

const Input: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Input Value:', inputValue);
  };

  return (
    <div>
      <input type='text' value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Input;
