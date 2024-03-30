import SectionTitle from '@/components/kd-cleaning/SectionTitle';

const SectionAbout = () => {
  return (
    <section className="my-10 grid grid-cols-2">
      <div className="col-span-1">[IMAGE]</div>

      <article className="col-span-1">
        <SectionTitle
          title="ABOUT US"
          subtitle="The Easy Way To Get Your Space Cleaned
"
          className={{
            title: 'text-amber-600',
          }}
        />

        <p className="mb-6 text-sm">
          We are more than just a cleaning company. We are a partner in facility
          rejuvenation. An expert in Commercial Office Cleaning and industrial
          cleaning and a cost-effective solutions provider. With nearly a decade
          of experience and commitment to 100% client satisfaction.
        </p>

        <div>[IMAGE]</div>
      </article>
    </section>
  );
};

export default SectionAbout;
