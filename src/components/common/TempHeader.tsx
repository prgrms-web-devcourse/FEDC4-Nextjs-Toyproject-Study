import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { LargeButton } from './Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../../store/auth';
import { Link } from 'react-router-dom';

const TempHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className='flex justify-between px-10 py-4 border-b border-solid border-blue-gray-800 bg-blue-gray-10'>
      <Link to='/' className='text-heading-1'>
        고해성사
      </Link>
      <div className='flex items-center'>
        <span className='text-subtitle-1 pr-2'>
          {auth.user.loginId} {auth.user.name}
        </span>
        {auth.isLogin ? (
          <LargeButton text={'로그아웃'} onClick={handleLogout} />
        ) : location.pathname === '/login' ? (
          <LargeButton text={'홈으로'} onClick={() => navigate('/')} />
        ) : (
          <LargeButton text={'로그인'} onClick={() => navigate('/login')} />
        )}
      </div>
    </div>
  );
};

export default TempHeader;
