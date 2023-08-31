import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LargeButton, SmallButton } from './Button';
import { AppDispatch, RootState } from '../../store';
import { logout } from '../../store/auth';
import hamburger from '../../assets/img/hamburger.svg';
import pencil from '../../assets/img/pencil.svg';
import { useMediaQuery } from 'react-responsive';

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
  const handleMyPost = () => {
    navigate('/my/post');
  };
  const handleMyInfo = () => {
    navigate('/my/info');
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
    setIsModalOpen(false);
  };

  const isPc = useMediaQuery({
    query: '(min-width:891px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 442px) and (max-width:890px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width:441px)',
  });
  
  return (
    <div>
      {isPc && (
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
                        src={hamburger}
                        alt='햄버거바'
                        width={42}
                        height={42}
                      />
                    </button>
                    {isModalOpen && (
                      <div className='absolute top-20 -right-16 -translate-x-1/2 flex flex-col justify-between items-center w-36 h-auto border bg-blue-gray-10 shadow-md z-10'>
                        <div className='w-5/6 text-heading-4 border-b py-6 text-center font-semibold'>
                          {auth.user.name} 님
                        </div>
                        <div
                          className='cursor-pointer w-5/6 border-b py-2 text-center'
                          onClick={handleMyPost}
                        >
                          내 반성문
                        </div>
                        <div
                          className='cursor-pointer w-5/6 border-b py-2 text-center'
                          onClick={handleMyInfo}
                        >
                          내 정보
                        </div>
                        <div
                          className='cursor-pointer w-5/6 py-3 text-center'
                          onClick={handleLogout}
                        >
                          로그아웃
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                location.pathname === '/' && (
                  <LargeButton
                    text={'로그인'}
                    onClick={handleLoginButtonClick}
                  />
                )
              )}
            </div>
          </div>
        </header>
      )}
      {isTablet && (
        <header className='border-b border-solid border-blue-gray-800 bg-blue-gray-10'>
          <div className='flex justify-between max-w-screen-xl mx-auto px-12 py-4'>
            <Link to='/'>
              <h1 className='p-4 text-heading-1'>고해성사</h1>
            </Link>
            <div className='flex items-center justify-evenly'>
              {auth.isLogin ? (
                <div className='flex items-center'>
                  {location.pathname === '/' && (
                    <button onClick={handlePostButtonClick}>
                      <img
                        src={pencil}
                        alt='반성문작성'
                        width={42}
                        height={42}
                      />
                    </button>
                  )}
                  <button onClick={handleModal}>
                    <div className=''>
                      <div>
                        <span className='inline-block w-5 h-11 align-middle'></span>
                        <img
                          className='relative inline-block'
                          src={hamburger}
                          alt='햄버거바'
                          width={42}
                          height={42}
                        />
                        <span className='inline-block w-5 h-11 align-middle'></span>
                      </div>
                    </div>
                  </button>
                  {isModalOpen && (
                    <div className='absolute top-32 right-0 -translate-x-1/2 flex flex-col justify-between items-center w-36 h-auto border bg-blue-gray-10 shadow-md z-10'>
                      <div className='w-5/6 text-heading-4 border-b py-6 text-center font-semibold'>
                        {auth.user.name} 님
                      </div>
                      <div
                        className='cursor-pointer w-5/6 border-b py-2 text-center'
                        onClick={handleMyPost}
                      >
                        내 반성문
                      </div>
                      <div
                        className='cursor-pointer w-5/6 border-b py-2 text-center'
                        onClick={handleMyInfo}
                      >
                        내 정보
                      </div>
                      <div
                        className='cursor-pointer w-5/6 py-3 text-center'
                        onClick={handleLogout}
                      >
                        로그아웃
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                location.pathname === '/' && (
                  <div className=''>
                    <LargeButton
                      style={{ width: '150px', height: '60px' }}
                      text={'로그인'}
                      onClick={handleLoginButtonClick}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </header>
      )}
      {isMobile && (
        <header className='border-b border-solid border-blue-gray-800 bg-blue-gray-10'>
          <div className='flex justify-between max-w-screen-xl mx-auto px-2 py-2'>
            <Link to='/'>
              <h1 className='p-4 text-heading-1'>고해성사</h1>
            </Link>
            <div className='flex items-center justify-evenly'>
              {auth.isLogin ? (
                <div className='flex items-center'>
                  {location.pathname === '/' && (
                    <button onClick={handlePostButtonClick}>
                      <img
                        src={pencil}
                        alt='반성문작성'
                        width={42}
                        height={42}
                      />
                    </button>
                  )}
                  <button onClick={handleModal}>
                    <div className=''>
                      <div>
                        <span className='inline-block w-5 h-11 align-middle'></span>
                        <img
                          className='relative inline-block'
                          src={hamburger}
                          alt='햄버거바'
                          width={42}
                          height={42}
                        />
                        <span className='inline-block w-5 h-11 align-middle'></span>
                      </div>
                    </div>
                  </button>
                  {isModalOpen && (
                    <div className='absolute top-28 -right-12 -translate-x-1/2 flex flex-col justify-between items-center w-36 h-auto border bg-blue-gray-10 shadow-md z-10'>
                      <div className='w-5/6 text-heading-4 border-b py-6 text-center font-semibold'>
                        {auth.user.name} 님
                      </div>
                      <div
                        className='cursor-pointer w-5/6 border-b py-2 text-center'
                        onClick={handleMyPost}
                      >
                        내 반성문
                      </div>
                      <div
                        className='cursor-pointer w-5/6 border-b py-2 text-center'
                        onClick={handleMyInfo}
                      >
                        내 정보
                      </div>
                      <div
                        className='cursor-pointer w-5/6 py-3 text-center'
                        onClick={handleLogout}
                      >
                        로그아웃
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                location.pathname === '/' && (
                  <div className=''>
                    <LargeButton
                      style={{ width: '150px', height: '60px' }}
                      text={'로그인'}
                      onClick={handleLoginButtonClick}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </header>
      )}
    </div>
  );
};

export default Header;
