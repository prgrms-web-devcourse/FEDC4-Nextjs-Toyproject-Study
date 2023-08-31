import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import { signUp } from '../../api/auth';
import AuthInput from './AuthInput';
import { LargeButton } from '../common/Button';
import { useMediaQuery } from 'react-responsive';

const SignupForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isNameError, setIsNameError] = useState(false);
  const [isIdError, setIsIdError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isPasswordConfirmError, setIsPasswordConfirmError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      alert('이름은 한번 정해지면 수정이 불가합니다!');
    }, 300);
  }, []);

  const signupMutation = useMutation(signUp, {
    onError: (error: AxiosError) => {
      const errorData = error?.response?.data;
      alert(`회원가입에 실패했습니다. ${errorData && errorData['message']}`);
    },
    onSuccess: () => {
      alert('🎉가입되었습니다.🎉');
      navigate('/login');
    },
  });

  const handleNameChange = useCallback((value: string) => {
    setName(value);

    if (value.length >= 2 && value.length <= 5) {
      setIsNameError(false);
    } else {
      setIsNameError(true);
    }
  }, []);

  const handleIdChange = useCallback((value: string) => {
    const idRegex = /^[a-z0-9]{6,}$/; // 영문, 숫자 조합 6자 이상
    setId(value);

    if (idRegex.test(value)) {
      setIsIdError(false);
    } else {
      setIsIdError(true);
    }
  }, []);

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
    if (!name) {
      setIsNameError(true);
    }
    if (!id) {
      setIsIdError(true);
    }
    if (!password) {
      setIsPasswordError(true);
    }
    if (!passwordConfirm) {
      setIsPasswordConfirmError(true);
    }
    if (
      name &&
      id &&
      password &&
      passwordConfirm &&
      !isNameError &&
      !isIdError &&
      !isPasswordError &&
      !isPasswordConfirmError
    ) {
      signupMutation.mutate({
        loginId: id,
        name,
        password,
      });
    }
  };

  const isPcOrTablet = useMediaQuery({
    query: '(min-width:516px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width:515px)',
  });

  return (
    <>
      <div>
        {isPcOrTablet && (
          <form className='max-w-md mx-auto' onSubmit={handleSubmit}>
            <div className='px-5 py-6 border border-blue-gray-880 bg-white shadow-card-1'>
              <AuthInput
                label='이름'
                id='name'
                type='text'
                value={name}
                placeholder='이름을 입력해주세요.'
                onChange={(e) => handleNameChange(e.target.value)}
                isError={isNameError}
                errorText='2~5자로 입력해주세요.'
              />
              <AuthInput
                label='아이디'
                id='id'
                value={id}
                placeholder='아이디를 입력해주세요.'
                onChange={(e) => handleIdChange(e.target.value)}
                isError={isIdError}
                errorText='영문 소문자, 숫자만 사용하여 최소 6자 이상 입력해주세요.'
              />
              <AuthInput
                label='비밀번호'
                id='password'
                type='password'
                value={password}
                placeholder='비밀번호를 입력해주세요.'
                onChange={(e) => handlePasswordChange(e.target.value)}
                isError={isPasswordError}
                errorText='영문, 숫자를 필수로 포함하여 4자 이상 입력해주세요.'
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
            </div>
            <div className='mt-14 text-center'>
              <LargeButton text='회원가입' />
            </div>
          </form>
        )}
        {isMobile && (
          <form className='max-w-md mx-auto' onSubmit={handleSubmit}>
            <div className='m-5 px-5 py-6 border border-blue-gray-880 bg-white shadow-card-1'>
              <AuthInput
                label='이름'
                id='name'
                type='text'
                value={name}
                placeholder='이름을 입력해주세요.'
                onChange={(e) => handleNameChange(e.target.value)}
                isError={isNameError}
                errorText='2~5자로 입력해주세요.'
              />
              <AuthInput
                label='아이디'
                id='id'
                value={id}
                placeholder='아이디를 입력해주세요.'
                onChange={(e) => handleIdChange(e.target.value)}
                isError={isIdError}
                errorText='영문 소문자, 숫자만 사용하여 최소 6자 이상 입력해주세요.'
              />
              <AuthInput
                label='비밀번호'
                id='password'
                type='password'
                value={password}
                placeholder='비밀번호를 입력해주세요.'
                onChange={(e) => handlePasswordChange(e.target.value)}
                isError={isPasswordError}
                errorText='영문, 숫자를 필수로 포함하여 4자 이상 입력해주세요.'
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
            </div>
            <div className='mt-14 text-center'>
              <LargeButton text='회원가입' />
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default SignupForm;
