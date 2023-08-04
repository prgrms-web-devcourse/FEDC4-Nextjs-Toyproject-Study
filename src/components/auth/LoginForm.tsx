import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { signIn } from '../../api/auth';
import { AppDispatch } from '../../store';
import { login } from '../../store/auth';

import AuthInput from './AuthInput';
import { LargeButton, SmallButton } from '../common/Button';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isIdError, setIsIdError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const loginMutation = useMutation(signIn, {
    onError: () => {
      alert('아이디 또는 비밀번호를 잘못 입력했습니다. 다시 확인해주세요.');
      setId('');
      setPassword('');
    },
    onSuccess: (data) => {
      dispatch(login(data.data));
      navigate('/');
    },
  });

  const handleIdChange = useCallback((value: string) => {
    setId(value);

    if (value.length < 1) {
      setIsIdError(true);
    } else {
      setIsIdError(false);
    }
  }, []);

  const handlePasswordChange = useCallback((value: string) => {
    setPassword(value);

    if (value.length < 1) {
      setIsPasswordError(true);
    } else {
      setIsPasswordError(false);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id) {
      setIsIdError(true);
    }
    if (!password) {
      setIsPasswordError(true);
    }
    if (id && password) {
      loginMutation.mutate({ loginId: id, password });
    }
  };

  return (
    <>
      <form className='max-w-md mx-auto' onSubmit={handleSubmit}>
        <div className='px-5 py-6 border border-blue-gray-880 bg-white shadow-card-1'>
          <AuthInput
            label='아이디'
            id='id'
            value={id}
            placeholder='아이디'
            onChange={(e) => handleIdChange(e.target.value)}
            isError={isIdError}
            errorText='아이디를 입력해주세요.'
          />
          <AuthInput
            label='비밀번호'
            id='password'
            type='password'
            value={password}
            placeholder='비밀번호'
            onChange={(e) => handlePasswordChange(e.target.value)}
            isError={isPasswordError}
            errorText='비밀번호를 입력해주세요.'
          />
        </div>
        <div className='mt-14 text-center'>
          <LargeButton text='로그인' />
        </div>
      </form>
      <div className='mt-8 text-center'>
        <SmallButton text='회원가입' onClick={() => navigate('/signup')} />
      </div>
    </>
  );
};

export default LoginForm;
