import NavItem from './Nav.item';

const page = () => {
  return (
    <main className="container mx-auto px-8">
      <nav className="flex justify-between py-6">
        <div>[LOGO]</div>

        <div className="flex flex-col items-end gap-4">
          <div className="flex rounded-full border border-green-500">
            <p className="rounded-full bg-green-500 px-10 py-1 text-white">
              [icon] REQUEST A QUOTE
            </p>
            <p className="px-4 py-1 text-green-500">
              [icon] CALL TODAY: +12 1234-567
            </p>
          </div>

          <ul className="flex divide-x-2 divide-slate-200">
            <NavItem text="Home" />
            <NavItem text="About us" />
            <NavItem text="Meet the owner" />
            <NavItem text="Services" />
            <NavItem text="Our Equipment" />
            <NavItem text="Our Work" />
          </ul>
        </div>
      </nav>

      <section className="my-24 grid min-h-96 grid-cols-2 gap-16">
        <div className="col-span-2 lg:col-span-1">
          <h1 className="mb-8 text-5xl font-bold tracking-wider">
            Greenfield&apos;s
            <br />
            Premier{' '}
            <span className="text-green-500">
              Tree
              <br />
              Removal Service
            </span>
            <br />
            Company
          </h1>
          <p className="mb-16 max-w-[80%] text-sm">
            Known for quality jobs at fair prices, AllClear Tree Service has
            four I.S.A. certified arborists to evaluate every job, ensuring no
            matter how big or small your job may be, it will be done the right
            way.
          </p>
          <div className="flex gap-8">
            <p className="flex items-center rounded-lg bg-green-500 px-10 py-6 text-3xl text-white">
              23+
              <br />
              years
            </p>
            <p className="flex items-center rounded-lg border border-green-500 py-6 pl-6 pr-16 text-2xl text-green-500">
              Full insurance
              <br />
              offered
            </p>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1">[IMAGES]</div>
      </section>

      <section className="my-24 grid grid-cols-2 gap-6 bg-green-200 px-12 py-8 lg:px-24 lg:py-12">
        <div className="col-span-1">
          <div className="mb-4">[IMAGES]</div>
          <p className="mb-1 text-sm font-bold">
            ISA Certified Arborist - TCIA Member
          </p>
          <p className="text-sm">
            John Doe is NYS crane licensed and a CIC Certified Crane Operator
          </p>
        </div>
        <div className="col-span-1">
          <p className="mb-8">
            Serving the Greenfield area for more than 23 years. Bringing our
            top-notch equipment and unparalleled experience in tree removal all
            over Hill Haven County.
          </p>
          <p>
            As well as being known for our superb performance in the field, with
            safety and peace of mind for our customers, we offer full insurance
            backing for both worker&apos;s compensation and liability insurance.
          </p>
        </div>
      </section>
    </main>
  );
};

export default page;
