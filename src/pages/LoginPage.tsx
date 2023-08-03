import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import HeadingText from '../components/auth/HeadingText';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (auth.isLogin) {
      navigate('/');
    }
  }, []);

  return (
    <div className='pt-24'>
      <HeadingText text='로그인' />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
