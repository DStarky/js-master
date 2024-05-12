'use client';

import { Avatar, Box, Container, DropdownMenu } from '@radix-ui/themes';
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
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Avatar
                    src={session?.user!.image!}
                    fallback={session?.user!.name!}
                    size="2"
                    radius="full"
                    className="cursor-pointer"
                  />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Label>
                    <p>{session?.user!.email}</p>
                  </DropdownMenu.Label>
                  <DropdownMenu.Item>
                    <Link href="/api/auth/signout">Log out</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
              // <Link href="/api/auth/signout">Log out</Link>
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
