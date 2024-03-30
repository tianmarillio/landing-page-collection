const page = () => {
  return (
    <div>
      <nav className="flex h-24 items-center bg-gray-600 px-8 text-white">
        <div className="w-72 bg-blue-400">[LOGO]</div>

        <ul className="flex flex-1 justify-end gap-4 lg:gap-12">
          <li>Collections</li>
          <li>The Eye Openers&apos; Look</li>
          <li>About Us</li>
          <li>Contact Us</li>

          <li>[PHONE LOGO] Now Open By Appointment Only 555-123-4567</li>
        </ul>
      </nav>

      <main>
        <section className="flex aspect-video w-full flex-col justify-center gap-6 bg-red-100 px-5 sm:px-10 md:px-20 lg:px-40">
          <h1 className="bg-blue-700 text-4xl leading-normal text-white sm:w-2/3 xl:w-1/3">
            <span className="font-bold">We offer much more</span>
            <br />
            than the same old Rochester selection
          </h1>
          <a href="" className="w-fit rounded bg-white px-6 py-4 text-blue-600">
            [ICON] BROWSE OUR COLLECTIONS
          </a>
        </section>

        <section className="grid aspect-video grid-cols-2 grid-rows-2 gap-8 bg-green-100 p-4 xl:gap-16 xl:px-64">
          <p className="col-span-1 row-span-1 bg-white text-6xl leading-normal text-blue-600">
            <span className="font-bold">Set yourself apart from the rest</span>{' '}
            with unique eyewear from Eye Openers Optical Fashions.{' '}
          </p>
          <p className="col-span-1 row-span-1 text-2xl leading-normal">
            We have been in business for 30 years and base our reputation on
            skilled service and quality eyewear. Eye Openers is truly one of a
            kind.
            <br />
            <br />
            Our goal is to bring to Rochester a diverse collection of the most
            sought after frames and sunglasses from around the world. With over
            2000 frames to choose from ranging from conservative to trendy, we
            are sure you will find eyeglasses to suit your needs in a price
            range to fit your budget.
          </p>
          <div className="col-span-1 row-span-1 grid grid-cols-2 grid-rows-2">
            <p className="col-span-1 row-span-1 grid place-content-center border border-orange-600 text-4xl leading-snug text-orange-600">
              30
              <br />
              years
              <br />
              in business
            </p>
            <div className="col-span-1 row-span-1" />
            <div className="col-span-1 row-span-1" />
            <p className="col-span-1 row-span-1 grid place-content-center border border-orange-600 text-4xl leading-snug text-orange-600">
              2000+
              <br />
              frames
              <br />
              at store
            </p>
          </div>
          <p className="col-span-1 row-span-1">[IMAGE]</p>
        </section>

        <section className="bg-sky-500 py-12">
          <h2 className="mb-8 flex justify-center bg-red-400">OUR VENDORS</h2>
          {/* CAROUSELL */}
          <div className="mb-8 flex justify-center gap-8">
            <div className="aspect-square h-72 bg-emerald-100">[IMAGE]</div>
            <div className="aspect-square h-72 bg-emerald-100">[IMAGE]</div>
            <div className="aspect-square h-72 bg-emerald-100">[IMAGE]</div>
            <div className="aspect-square h-72 bg-emerald-100">[IMAGE]</div>
          </div>

          <div className="flex w-full justify-center">
            <a href="" className="border border-white px-8 py-2 text-white">
              VIEW ALL
            </a>
          </div>
        </section>

        <footer className="w-2/3 py-24 xl:px-64">
          <div className="mb-4">[LOGO]</div>
          <p className="mb-1">2929 Monroe Ave.</p>
          <p className="mb-12">Rochester, NY 14618</p>

          <p className="mb-12 w-fit bg-blue-600 px-4 py-2 text-lg font-bold text-white">
            Call: (555) 123-4567
          </p>

          <p className="mb-6">STORE HOURS:</p>

          <ul className="mb-6 flex justify-between">
            <li>M: Closed</li>
            <li>T, W, F: 9:30AM - 5:30PM</li>
            <li>Th: 9:30AM - 7PM</li>
            <li>Sa: 9AM - 2PM</li>
            <li>Su: Closed</li>
          </ul>

          <p className="mb-1">© 2024 EXYZEE Optical Fashions.</p>
          <p>All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default page;
