import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, []);

  return (
    <>
      <div
        className='flex flex-col items-center justify-center mx-auto max-w-475 w-full h-screen'
        style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
