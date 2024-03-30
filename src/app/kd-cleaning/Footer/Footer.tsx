const Footer = () => {
  return (
    <footer className="bg-black text-[0.5rem] text-amber-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-y-2 py-4">
          <div className="h-8 w-32 bg-red-100">[LOGO]</div>

          <ul className="flex flex-wrap gap-x-4">
            <li className="text-xs">Home</li>
            <li className="text-xs">About</li>
            <li className="text-xs">Services</li>
            <li className="text-xs">Pricing</li>
            <li className="text-xs">Gallery</li>
            <li className="text-xs">Contact</li>
          </ul>

          <ul className="flex gap-x-2">
            <li>[IC]</li>
            <li>[IC]</li>
            <li>[IC]</li>
            <li>[IC]</li>
          </ul>
        </div>

        <hr />

        <div className="flex justify-between py-4 text-white">
          <p>©KD Commercial Cleaning 2023</p>

          <div className="flex gap-2">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
