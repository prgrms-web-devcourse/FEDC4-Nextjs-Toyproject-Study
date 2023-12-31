import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LargeButton, SmallButton } from './Button';
import { AppDispatch, RootState } from '../../store';
import { logout } from '../../store/auth';
import user_profile from '../../assets/img/user_profile.svg';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handlePostButtonClick = () => {
    navigate('/post');
  };

  const handleLoginButtonClick = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
    setIsModalOpen(false);
  };

  return (
    <header className='border-b border-solid border-blue-gray-800 bg-blue-gray-10'>
      <div className='flex justify-between max-w-screen-xl mx-auto px-12 py-4'>
        <Link to='/'>
          <h1 className='text-heading-1'>고해성사</h1>
        </Link>
        <div className='mr-10'>
          {auth.isLogin ? (
            <div className='flex flex-row justify-center'>
              {location.pathname === '/' && (
                <LargeButton
                  text={'반성문 쓰기'}
                  onClick={handlePostButtonClick}
                />
              )}
              <div className='flex relative ml-8'>
                <button onClick={handleModal}>
                  <img
                    src={user_profile}
                    alt='유저프로필'
                    width={42}
                    height={42}
                  />
                </button>
                {isModalOpen && (
                  <div className='absolute top-20 left-1/2 -translate-x-1/2 flex flex-col justify-between items-center w-36 h-32 px-5 py-6 border bg-blue-gray-10 shadow-md z-10'>
                    <div className='text-heading-4'>{auth.user.name} 님</div>
                    <SmallButton text={'로그아웃'} onClick={handleLogout} />
                  </div>
                )}
              </div>
            </div>
          ) : (
            location.pathname === '/' && (
              <LargeButton text={'로그인'} onClick={handleLoginButtonClick} />
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
