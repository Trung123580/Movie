'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Link from 'next/link';
const Header = () => {
  const [isShowNavBar, setIsShowNavBav] = useState<boolean>(false);
  const handleToggleNavbar = () => {
    setIsShowNavBav(!isShowNavBar);
  };
  const handleResize = () => {
    const isLargeScreen = window.innerWidth > 984;
    if (isLargeScreen) {
      if (isShowNavBar) handleToggleNavbar();
    }
  };
  useEffect(() => {
    if (isShowNavBar) {
      document.body.classList.add('no-scroll');
    } else {
      if (document.body.classList.contains('no-scroll')) document.body.classList.remove('no-scroll');
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isShowNavBar]);
  return (
    <header className='container '>
      <div className='relative '>
        <div className='flex justify-between items-center relative lg:absolute gap-x-2 py-3 z-20 w-full'>
          <Link href='/' className='flex items-center gap-x-[10px] flex-basis '>
            <Image src='/icons/Logo.svg' height={34} width={34} alt='logo' />
            <span className='text-[40px] leading-[50px]'>Movie</span>
          </Link>
          <Nav onToggleNavbar={handleToggleNavbar} isShowNavbar={isShowNavBar} />
        </div>
      </div>
    </header>
  );
};

export default Header;
