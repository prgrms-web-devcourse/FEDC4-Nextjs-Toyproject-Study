import React, { useCallback, useState } from 'react';
import AuthInput from '../auth/AuthInput';
import { useMutation } from 'react-query';
import { changePassword, signUp } from '../../api/auth';
import { AxiosError } from 'axios';
import { SmallButton } from '../common/Button';
import arrowDown from 'assets/img/arrow-down.svg';
import arrowUp from 'assets/img/arrow-up.svg';

const PasswordForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isPasswordConfirmError, setIsPasswordConfirmError] = useState(false);

  const toggleForm = () => {
    if (isOpen) {
      setPassword('');
      setPasswordConfirm('');
      setIsPasswordError(false);
      setIsPasswordConfirmError(false);
    }
    setIsOpen(!isOpen);
  };

  const passwordChangeMutation = useMutation(changePassword, {
    onError: (error: AxiosError) => {
      const errorData = error?.response?.data;
      alert(
        `비밀번호 변경에 실패했습니다. ${errorData && errorData['message']}`,
      );
    },
    onSuccess: () => {
      alert('변경되었습니다.');
      toggleForm();
    },
  });

  const handlePasswordChange = useCallback((value: string) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{4,}$/; // 영문, 숫자 포함 4자 이상
    setPassword(value);

    if (passwordRegex.test(value)) {
      setIsPasswordError(false);
    } else {
      setIsPasswordError(true);
    }
  }, []);

  const handlePasswordConfirmChange = useCallback(
    (value: string) => {
      setPasswordConfirm(value);

      if (password === value) {
        setIsPasswordConfirmError(false);
      } else {
        setIsPasswordConfirmError(true);
      }
    },
    [password],
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!password) {
      setIsPasswordError(true);
    }
    if (!passwordConfirm) {
      setIsPasswordConfirmError(true);
    }
    if (
      password &&
      passwordConfirm &&
      !isPasswordError &&
      !isPasswordConfirmError
    ) {
      passwordChangeMutation.mutate({
        password,
      });
    }
  };

  return (
    <div className='max-w-md mx-auto'>
      <button
        className='flex justify-between items-center w-full h-10 pr-2 pl-5 border border-blue-gray-880 bg-blue-grey-50 cursor-pointer'
        onClick={toggleForm}
      >
        <span className='text-subtitle-1'>비밀번호 변경</span>
        <img src={isOpen ? arrowUp : arrowDown} alt='' width={32} height={32} />
      </button>
      <form onSubmit={handleSubmit} className={`${isOpen ? '' : 'hidden'}`}>
        <div className='px-5 py-6 border-x border-b border-blue-gray-880 bg-white text-center shadow-card-1'>
          <AuthInput
            id='password'
            type='password'
            value={password}
            placeholder='비밀번호를 입력해주세요.'
            onChange={(e) => handlePasswordChange(e.target.value)}
            isError={isPasswordError}
            errorText='영문, 숫자를 포함해 최소 4자 이상 입력해주세요.'
            className='mb-1'
          />
          <AuthInput
            id='confirmPassword'
            type='password'
            value={passwordConfirm}
            placeholder='비밀번호를 확인해주세요.'
            onChange={(e) => handlePasswordConfirmChange(e.target.value)}
            isError={isPasswordConfirmError}
            errorText='비밀번호가 일치하지 않습니다.'
          />
          <SmallButton text='변경' />
        </div>
      </form>
    </div>
  );
};

export default PasswordForm;
