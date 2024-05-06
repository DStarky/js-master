'use client';

import { usePathname } from 'next/navigation';

import NavBarLink from './NavBarLink';

const NavBarLinks = () => {
  const currentPath = usePathname();

  const links = [
    {
      label: 'Dashboard',
      href: '/',
    },
    {
      label: 'Questions',
      href: '/questions',
    },
  ];

  return (
    <ul className="flex space-x-6">
      {links.map(link => (
        <NavBarLink
          key={link.href}
          href={link.href}
          active={currentPath === link.href}
          label={link.label}
        />
      ))}
    </ul>
  );
};
export default NavBarLinks;
