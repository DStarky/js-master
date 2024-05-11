import { Box } from '@radix-ui/themes';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { AiFillBug } from 'react-icons/ai';

import NavBarLinks from './NavBarLinks';

const NavBar = () => {
  const { status, data: session } = useSession();
  return (
    <nav className="mb-5 flex h-14 items-center space-x-6 border-b px-5">
      <Link href="/">
        <AiFillBug />
      </Link>
      <NavBarLinks />
      <Box>
        {status === 'authenticated' && (
          <Link href="/api/auth/signout">Log out</Link>
        )}
        {status === 'unauthenticated' && <Link href="/api/auth/signin">Log in</Link>}
      </Box>
    </nav>
  );
};
export default NavBar;
