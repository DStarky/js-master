'use client';

import { Container } from '@radix-ui/themes';
import Link from 'next/link';
import { AiFillBug } from 'react-icons/ai';

import NavBarAuthSection from './NavBarAuthSection';
import NavBarLinks from './NavBarLinks';

const NavBar = () => {
  return (
    <nav className="mb-5 border-b px-5">
      <Container>
        <div className="flex h-14 items-center justify-between ">
          <div className="flex items-center space-x-6">
            <Link href="/">
              <AiFillBug />
            </Link>
            <NavBarLinks />
          </div>
          <NavBarAuthSection />
        </div>
      </Container>
    </nav>
  );
};
export default NavBar;
