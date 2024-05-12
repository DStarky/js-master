import { Box } from '@radix-ui/themes';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

import NavBarDropdownMenu from './NavBarDropdownMenu';

const NavBarAuthSection = () => {
  const { status, data: session } = useSession();

  if (status === 'loading') {
    return <SimpleSpinner />;
  }

  if (status === 'unauthenticated')
    return (
      <Box>
        <Link href="/api/auth/signin">Log in</Link>
      </Box>
    );

  return (
    <Box>
      <NavBarDropdownMenu session={session} />
    </Box>
  );
};
export default NavBarAuthSection;

const SimpleSpinner = () => {
  return (
    <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-600"></div>
  );
};
