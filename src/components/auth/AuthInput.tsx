import React from 'react';
import { Input } from '../common/Input';

interface AuthInput {
  readonly label?: string;
  readonly id: string;
  readonly type?: string;
  value: string;
  readonly placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
  readonly errorText?: string;
  readonly className?: string;
}

const AuthInput = ({
  label,
  id,
  type,
  value,
  placeholder,
  onChange,
  isError,
  errorText,
  className,
}: AuthInput) => {
  return (
    <div className={className ? className : 'mb-6'}>
      <label htmlFor={id} className='block mb-1 text-subtitle-1 text-left'>
        {label}
      </label>
      <Input
        id={id}
        type={type}
        value={value}
        placeHolder={placeholder}
        onChange={onChange}
        disabled={false}
      />
      {isError && (
        <p className='mt-1 text-caption-2 text-danger text-left'>{errorText}</p>
      )}
    </div>
  );
};

export default AuthInput;
