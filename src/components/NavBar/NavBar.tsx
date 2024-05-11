'use client';

import { Box, Container } from '@radix-ui/themes';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { AiFillBug } from 'react-icons/ai';

import NavBarLinks from './NavBarLinks';

const NavBar = () => {
  const { status, data: session } = useSession();
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
          <Box className="">
            {status === 'authenticated' && (
              <Link href="/api/auth/signout">Log out</Link>
            )}
            {status === 'unauthenticated' && (
              <Link href="/api/auth/signin">Log in</Link>
            )}
          </Box>
        </div>
      </Container>
    </nav>
  );
};
export default NavBar;
