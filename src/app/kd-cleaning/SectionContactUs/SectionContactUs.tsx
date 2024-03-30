const SectionContactUs = () => {
  return (
    <section className="my-10 grid grid-cols-3 gap-y-8 bg-blue-100 py-12">
      <article className="col-span-3">
        <h3 className="mb-4 text-lg font-bold">
          Discover the Perfect Balance of Sustainability and Cleaning.
        </h3>
        <p className="mb-8 text-sm">
          We are locally-owned commercial cleaning company. With highly-trained,
          professional cleaners that offers reliable service.
        </p>

        <div className="flex justify-around text-center">
          <div>
            <div className="mx-auto mb-3 size-8 bg-red-100">[ICON]</div>
            <h4 className="mb-1 text-sm font-bold">Phone</h4>
            <p className="text-xs">(800) 123-4567</p>
          </div>
          <div>
            <div className="mx-auto mb-3 size-8 bg-red-100">[ICON]</div>
            <h4 className="mb-1 text-sm font-bold">Email</h4>
            <p className="text-xs">kd@kdenterprises.com</p>
          </div>
          <div>
            <div className="mx-auto mb-3 size-8 bg-red-100">[ICON]</div>
            <h4 className="mb-1 text-sm font-bold">Hours</h4>
            <p className="text-xs">09.00 - 20.00</p>
          </div>
        </div>
      </article>

      <article className="col-span-3 mx-4 overflow-hidden rounded-lg bg-white p-4">
        <h3 className="mb-8 font-bold">
          Request a Free Quote. Best rate guaranteed!
        </h3>

        <form className="px-4">
          <label className="my-2 block text-xs">Name</label>
          <input className="block w-full rounded border border-teal-600 px-4 py-2 text-xs" />
          <label className="my-2 block text-xs">Email</label>
          <input className="block w-full rounded border border-teal-600 px-4 py-2 text-xs" />
          <label className="my-2 block text-xs">Phone Number</label>
          <input className="block w-full rounded border border-teal-600 px-4 py-2 text-xs" />

          <select
            className="my-6 block w-full rounded border border-teal-600 bg-white px-4 py-2 text-xs"
            defaultValue=""
          >
            <option disabled value="">
              Choose a service
            </option>
            <option>Service A</option>
            <option>Service B</option>
            <option>Service C</option>
          </select>

          <input
            type="submit"
            value="GET YOUR ESTIMATE"
            className=" my-2 w-full rounded-lg bg-teal-600 px-4 py-2 text-white"
          />
        </form>
      </article>
    </section>
  );
};

export default SectionContactUs;
