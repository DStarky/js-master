import Link from 'next/link';

import { cn } from '@/lib/utils/cn';

interface NavBarLinkProps {
  href: string;
  label: string;
  active: boolean;
}

const NavBarLink = ({ href, label, active }: NavBarLinkProps) => {
  return (
    <li>
      <Link
        className={cn('text-zinc-500 transition-colors hover:text-zinc-800', {
          'text-zinc-900': active,
        })}
        href={href}
      >
        {label}
      </Link>
    </li>
  );
};
export default NavBarLink;
