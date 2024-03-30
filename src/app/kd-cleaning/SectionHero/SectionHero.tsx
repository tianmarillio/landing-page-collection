import LinkButton from '@/components/kd-cleaning/LinkButton';

const SectionHero = () => {
  return (
    <section className="my-10 flex">
      <article className="w-1/2">
        <h1 className="mb-4 text-xl font-bold">
          We Provide Efficient Cleaning Services
        </h1>
        <p className="mb-4 text-sm">
          We provide comprehensive, around-the-clock services to business,
          commercial, multi-family residential and industrial customers.
        </p>

        <div className="flex flex-wrap gap-4">
          <LinkButton text="GET A FREE QUOTE" className="bg-amber-600" />

          <div className="flex items-center gap-2 text-xs">
            <div className="size-8 bg-red-100">[IC]</div>
            <p>Call us Now</p>
          </div>
        </div>
      </article>

      <div>[IMAGE]</div>
    </section>
  );
};

export default SectionHero;
