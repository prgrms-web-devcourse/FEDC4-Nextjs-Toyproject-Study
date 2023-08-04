import React from 'react';

interface Input {
  readonly id: string;
  readonly type?: string;
  value: string;
  readonly placeHolder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

export const Input = ({
  id,
  type,
  value,
  placeHolder,
  onChange,
  disabled,
}: Input) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      placeholder={placeHolder}
      onChange={onChange}
      className='w-full px-5 py-2.5 focus:outline-none border border-solid border-blue-gray-200 hover:border-blue-gray-400 focus:border-blue-gray-999 text-body-2 placeholder:text-blue-gray-200'
      disabled={disabled}
    ></input>
  );
};
