import { Box } from '@radix-ui/themes';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

import Skeleton from '@/components/ui/Skeleton';

import NavBarDropdownMenu from './NavBarDropdownMenu';

const NavBarAuthSection = () => {
  const { status, data: session } = useSession();

  if (status === 'loading') {
    return <Skeleton width={'3rem'} />;
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
