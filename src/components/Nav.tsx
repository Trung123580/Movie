'use client';
import { navHeader } from '@/utils/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoMenu } from 'react-icons/io5';
const Nav = ({ onToggleNavbar, isShowNavbar }: navTypes) => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <nav className='flex items-center justify-center gap-x-2 '>
      <ul
        className={`${
          isShowNavbar ? 'block' : 'hidden'
        } z-30 overflow-hidden lg:flex lg:gap-10 lg:gap-6 fixed lg:static text-black bg-overlay lg:bg-transparent top-0 h-full w-80 right-0 lg:w-auto`}>
        {navHeader.map(({ path, name, id }) => (
          <li
            key={id}
            className='md:py-0 md:px-0 border-b-2 border-b-black lg:border-b-transparent text-white md:text-black cursor-default hover:bg-black lg:hover:bg-transparent '>
            <Link
              onClick={onToggleNavbar}
              className={`first-letter:uppercase uppercase px-4 lg:px-0 w-full inline-block py-3 hover:bg-yellow lg:hover:text-yellow lg:hover:bg-transparent transition ${
                pathName === path ? 'bg-yellow lg:text-yellow lg:bg-transparent' : ''
              }`}
              href={path}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
      {isShowNavbar && <div className='fixed w-full z-20  h-full bg-blur left-0 calc-width lg:hidden top-0' onClick={onToggleNavbar}></div>}
      <div className='text-black md:ms-8 md:mr-0 cursor-pointer hover:opacity-90 flex '>
        <abbr title='Tìm kiếm'>
          <svg className='min-w-min' width='23' height='24' viewBox='0 0 23 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M16.6837 17.1844L21.9994 22.5001M19.375 10.6875C19.375 15.7616 15.2616 19.875 10.1875 19.875C5.11338 19.875 1 15.7616 1 10.6875C1 5.61338 5.11338 1.5 10.1875 1.5C15.2616 1.5 19.375 5.61338 19.375 10.6875Z'
              stroke='rgb(228, 216, 4)'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </abbr>
      </div>
      <a href='/favourite'>
        <abbr title='Yêu thích'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            role='img'
            className='iconify iconify--mdi text-white hover:text-yellow transition'
            width='30'
            height='30'
            viewBox='0 0 24 24'>
            <path
              fill='currentColor'
              d='M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m7 14l.72-.66C15.3 14 17 12.46 17 10.57c0-1.54-1.21-2.75-2.75-2.75c-.87 0-1.7.41-2.25 1.05a3 3 0 0 0-2.25-1.05C8.21 7.82 7 9.03 7 10.57c0 1.89 1.7 3.43 4.28 5.77z'></path>
          </svg>
        </abbr>
      </a>
      <div className='lg:hidden text-white max-w-min'>
        <div className='cursor-pointer hover:opacity-90 duration-300' onClick={onToggleNavbar}>
          <abbr title='Menu'>
            <IoMenu size={34} className='min-w-min text-yellow' />
          </abbr>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
