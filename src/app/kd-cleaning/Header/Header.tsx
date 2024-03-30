import LinkButton from '@/components/kd-cleaning/LinkButton';

const Header = () => {
  return (
    <header className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4">
      <div className="h-16 w-64 bg-red-100">[LOGO]</div>

      <nav className="flex-1">
        <ul className="flex justify-between">
          <li className="text-xs">Home</li>
          <li className="text-xs">About</li>
          <li className="text-xs">Services</li>
          <li className="text-xs">Pricing</li>
          <li className="text-xs">Gallery</li>
          <li className="text-xs">Contact</li>
        </ul>
      </nav>

      <LinkButton text="GET A QUOTE" />
    </header>
  );
};

export default Header;
