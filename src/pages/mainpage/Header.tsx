import { LargeButton } from '../../components/common/Button';
// import { colors } from '../designSystems/Colors';
import { useState } from 'react';
import { SmallButton } from '../../components/common/Button';

const Header = () => {
  const colors = { border: '#2D4053' };

  const isLogin = true;

  const [modalOpened, setModalOpened] = useState(false);

  window.addEventListener('load', function () {
    if (!modalOpened) {
      const modal = document.querySelector('#modal') as HTMLElement;
      modal.style.visibility = 'hidden';
    }
  });

  const modalHandler = () => {
    setModalOpened((prev) => !prev);
    console.log(modalOpened, 'clicked');

    const modal = document.querySelector('#modal') as HTMLElement;
    if (modalOpened) {
      modal.style.visibility = 'visible';
    } else {
      modal.style.visibility = 'hidden';
    }
  };

  return (
    <>
      <header
        className={`px-[18%] h-20 bg-[#FBFBFD] border-b border-solid border-[${colors['border']}]`}
      >
        <div className='flex flex-row h-20 justify-between pl-12 pr-10 py-5 text-center'>
          <div className='text-heading-1 leading-10 flex justify-center items-center select-none'>
            고해성사
          </div>
          <div className='postButton mr-10'>
            {isLogin ? (
              <div className='flex flex-row justify-center'>
                <LargeButton text={'반성문 쓰기'} />
                <div className='h-[40px] ml-10'>
                  <div
                    className={`h-full relative items-center justify-center user-icon cursor-pointer`}
                    onClick={modalHandler}
                  >
                    <div
                      id='modal'
                      className={`border border-current px-[20px] py-[24px] w-36 h-32 bg-white flex flex-col justify-around items-center gap-5 shadow-md absolute top-[5rem] -left-[4.5rem]`}
                    >
                      <div className='block text-lg select-none'>어쩌구 님</div>
                      <SmallButton text={'로그아웃'} />
                    </div>
                    <div className='absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                      <svg
                        className='stroke-1 stroke-[#2d4053] '
                        xmlns='http://www.w3.org/2000/svg'
                        width='40'
                        height='40'
                        viewBox='0 0 42 42'
                        fill='none'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M21 41C32.0457 41 41 32.0457 41 21C41 9.9543 32.0457 1 21 1C9.9543 1 1 9.9543 1 21C1 32.0457 9.9543 41 21 41Z'
                          stroke={colors['border']}
                        />
                      </svg>
                    </div>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 40 36'
                        fill='none'
                        width='40'
                        height='35'
                      >
                        <g clipPath='url(#clip0_145_380)'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z'
                            fill='black'
                            fillOpacity='0.2'
                            stroke={colors['border']}
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_145_380'>
                            <rect width='40' height='35' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className='absolute top-[59%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
                      <svg
                        className={`fill-[#fff] stroke-1 stroke-${colors['border']}`}
                        xmlns='http://www.w3.org/2000/svg'
                        width='28'
                        height='29'
                        viewBox='0 0 28 29'
                        fill='none'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M1 28C1 28 8 25 10 23C12 21 6 21 6 11C6 1 14 1 14 1C14 1 22 1 22 11C22 21 16 21 18 23C20 25 27 28 27 28'
                          fill='white'
                        />
                        <path
                          d='M1 28C1 28 8 25 10 23C12 21 6 21 6 11C6 1 14 1 14 1C14 1 22 1 22 11C22 21 16 21 18 23C20 25 27 28 27 28'
                          stroke={colors['border']}
                          strokeLinecap='round'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <LargeButton text={'로그인'} />
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
