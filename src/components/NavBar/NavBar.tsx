import Link from 'next/link';
import { AiFillBug } from 'react-icons/ai';

import NavBarLinks from './NavBarLinks';

const NavBar = () => {
  return (
    <nav className="mb-5 flex h-14 items-center space-x-6 border-b px-5">
      <Link href="/">
        <AiFillBug />
      </Link>
      <NavBarLinks />
    </nav>
  );
};
export default NavBar;
