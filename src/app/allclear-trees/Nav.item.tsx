import { FC } from 'react';

interface NavItemProps {
  text: string;
}

const NavItem: FC<NavItemProps> = ({ text }) => {
  return <li className="px-4 font-medium">{text}</li>;
};

export default NavItem;
