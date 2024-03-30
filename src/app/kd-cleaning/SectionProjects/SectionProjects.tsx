import SectionTitle from '@/components/kd-cleaning/SectionTitle';

const SectionProjects = () => {
  return (
    <section className="my-10">
      <SectionTitle
        title="OUR PROJECTS"
        subtitle="Before And After"
        className={{
          root: 'mb-12 text-center',
          title: 'text-amber-600',
        }}
      />

      <div className="flex flex-wrap justify-center gap-8">
        <article>
          <div className="mb-4 grid h-48 grid-cols-2 gap-1 overflow-hidden rounded-lg">
            <div className="col-span-1 bg-blue-100">[IMAGE]</div>
            <div className="col-span-1 bg-red-100">[IMAGE]</div>
          </div>

          <h3 className="mb-2 text-lg font-bold">Office Cleaning </h3>
          <p className="text-sm">
            Whether your project is large or small, residential or commercial we
            can deliver a quality project on time.
          </p>
        </article>
        <article>
          <div className="mb-4 grid h-48 grid-cols-2 gap-1 overflow-hidden rounded-lg">
            <div className="col-span-1 bg-blue-100">[IMAGE]</div>
            <div className="col-span-1 bg-red-100">[IMAGE]</div>
          </div>

          <h3 className="mb-2 text-lg font-bold">Office Cleaning </h3>
          <p className="text-sm">
            Whether your project is large or small, residential or commercial we
            can deliver a quality project on time.
          </p>
        </article>
      </div>
    </section>
  );
};

export default SectionProjects;
