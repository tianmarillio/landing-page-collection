import LinkButton from '@/components/kd-cleaning/LinkButton';
import SectionTitle from '@/components/kd-cleaning/SectionTitle';

const SectionHowToHire = () => {
  return (
    <section className="my-10 bg-sky-600 pb-8 pt-20">
      <SectionTitle
        title="HOW TO HIRE US"
        subtitle="How We Work?"
        className={{
          root: 'mb-12 text-center',
          title: 'text-white',
          subtitle: 'text-white',
        }}
      />

      <article className="mb-8 grid grid-cols-4 text-white">
        <div className="col-span-1 flex flex-col items-center">
          <div className="mb-4 size-8 bg-red-100">[IC]</div>
          <h3 className="mb-2 text-xs font-bold">Application</h3>
          <p className="text-center text-[0.6125rem]">
            We can fix your problem and clean up your offices
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <div className="mb-4 size-8 bg-red-100">[IC]</div>
          <h3 className="mb-2 text-xs font-bold">Schedule us</h3>
          <p className="text-center text-[0.6125rem]">
            We can fix your problem and clean up your offices
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <div className="mb-4 size-8 bg-red-100">[IC]</div>
          <h3 className="mb-2 text-xs font-bold">Hire Us</h3>
          <p className="text-center text-[0.6125rem]">
            We can fix your problem and clean up your offices
          </p>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <div className="mb-4 size-8 bg-red-100">[IC]</div>
          <h3 className="mb-2 text-xs font-bold">We Clean</h3>
          <p className="text-center text-[0.6125rem]">
            We can fix your problem and clean up your offices
          </p>
        </div>
      </article>

      <LinkButton
        text="Book a Cleaning Session"
        className="mx-auto bg-white text-sky-600"
      />
    </section>
  );
};

export default SectionHowToHire;
