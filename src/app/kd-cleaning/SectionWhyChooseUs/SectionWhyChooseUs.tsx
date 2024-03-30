import LinkButton from '@/components/kd-cleaning/LinkButton';
import SectionTitle from '@/components/kd-cleaning/SectionTitle';

const SectionWhyChooseUs = () => {
  return (
    <section className="my-10">
      <SectionTitle
        title="Why Choose us"
        subtitle="What makes us different?"
        className={{ root: 'mb-8 text-center', title: 'text-amber-600' }}
      />

      <article className="mb-6 grid grid-cols-3 gap-4 text-xs">
        <div className="col-span-3 text-end sm:col-span-1">
          <h3 className="my-2 text-sm font-bold">Professional</h3>
          <p className="my-2">
            When the first cases of Covid-19 broke out in 2020, it was
            all-hands-on-deck. We immediately contacted our customers to educate
            them on our disinfection & antimicrobial programs.
          </p>
          <h3 className="my-2 text-sm font-bold">Responsive</h3>
          <p className="my-2">
            When the first cases of Covid-19 broke out in 2020, it was
            all-hands-on-deck. We immediately contacted our customers to educate
            them on our disinfection & antimicrobial programs.
          </p>
        </div>

        <div className="col-span-3 h-24 bg-red-100 sm:col-span-1">[IMAGE]</div>

        <div className="col-span-3 text-start sm:col-span-1">
          <h3 className="my-2 text-sm font-bold">Honest</h3>
          <p className="my-2">
            When the first cases of Covid-19 broke out in 2020, it was
            all-hands-on-deck. We immediately contacted our customers to educate
            them on our disinfection & antimicrobial programs.
          </p>
          <h3 className="my-2 text-sm font-bold">Take Pride</h3>
          <p className="my-2">
            When the first cases of Covid-19 broke out in 2020, it was
            all-hands-on-deck. We immediately contacted our customers to educate
            them on our disinfection & antimicrobial programs.
          </p>
        </div>
      </article>

      <LinkButton
        text="VIEW ALL SERVICES"
        className="mx-auto bg-amber-600 px-6 py-4 text-sm"
      />
    </section>
  );
};

export default SectionWhyChooseUs;
