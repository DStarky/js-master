import { Avatar, DropdownMenu } from '@radix-ui/themes';
import { Session } from 'next-auth';
import Link from 'next/link';

const NavBarDropdownMenu = ({ session }: { session: Session | null }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Avatar
          src={session?.user!.image!}
          fallback={session?.user!.name!}
          size="2"
          radius="full"
          className="cursor-pointer"
          referrerPolicy="no-referrer"
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
  );
};
export default NavBarDropdownMenu;
