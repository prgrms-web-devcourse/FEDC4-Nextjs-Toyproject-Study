
import Button from '../designSystems/Button';
import { colors } from '../designSystems/Colors';
import {useState} from 'react'

const Header = () => {
  const isLogin = true;

  const [modalOpened, setModalOpened] = useState(false);
  

  window.addEventListener("load", function () {
    if(!modalOpened) {
      const modal = document.querySelector('#modal') as HTMLElement
      modal.style.visibility = 'hidden'
    }
  });
  

  const modalHandler = () => {
    setModalOpened((prev)=> !prev);
    console.log(modalOpened, 'clicked');

    const modal = document.querySelector('#modal') as HTMLElement
    if(modalOpened){
      modal.style.visibility = 'visible'
    }else {
      modal.style.visibility = 'hidden'
    }
  }

  
  
  return (
    <>
      <header
        className={`flex flex-row justify-around bg-[#FBFBFD] text-center p-2.5 border-b border-solid border-[${colors['border']}]`}
      >
        <div className='title text-xl flex justify-center items-center select-none'>
          고해성사
        </div>
        <div className='postButton'>
          {isLogin ? (
            <div className='flex flex-row justify-center'>
              <Button text={'반성문 쓰기'} />
              <div className='w-12 h-12 shrink-0 ml-6'>
                <div className={`h-full relative items-center justify-center user-icon `} onClick={modalHandler} >
                  <div id='modal' className={`border border-current w-36 h-32 bg-white flex flex-col justify-around items-center gap-x-5 shadow-md absolute top-12 left-8`} >
                    <span className='block text-lg select-none'>어쩌구 님</span>
                    <button className='w-24 bg-slate-300 border border-current block text-lg hover:shadow-[2px_2px_0px_0px_rgba(32,43,61,1)]'>로그아웃</button>
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
                  <div className='absolute top-[57.1%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
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
            <Button text={'로그인'} />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
