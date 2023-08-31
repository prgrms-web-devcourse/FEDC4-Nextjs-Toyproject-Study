import React from 'react';

interface Input {
  readonly id: string;
  readonly type?: string;
  value: string;
  readonly placeHolder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  styleOption?: string;
  disabled: boolean;
}

export const Input = ({
  id,
  type,
  value,
  placeHolder,
  onChange,
  onKeyDown,
  disabled,
  styleOption,
}: Input) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      placeholder={placeHolder}
      onKeyDown={onKeyDown}
      onChange={onChange}
      className={
        styleOption
          ? styleOption
          : `w-full px-5 py-2.5 focus:outline-none border border-solid border-blue-gray-200 hover:border-blue-gray-400 focus:border-blue-gray-999 text-body-2 placeholder:text-blue-gray-200`
      }
      disabled={disabled}
    ></input>
  );
};
