import SectionTitle from '@/components/kd-cleaning/SectionTitle';
import ServiceCard from './ServiceCard';
import LinkButton from '@/components/kd-cleaning/LinkButton';

const SectionServices = () => {
  return (
    <section className="my-10">
      <div className="mb-8 flex justify-between">
        <SectionTitle title="OUR SERVICES" subtitle="What We Offer" />

        <div className="flex gap-2">
          <div className="size-8 rounded-full border border-teal-600 text-teal-600">
            [IC]
          </div>
          <div className="size-8 rounded-full border bg-teal-600 text-white">
            [IC]
          </div>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4">
        <ServiceCard
          icon="[ICON]"
          title="Commercial Cleaning"
          detail="So, first impressions really do matter, and as top-rated
          commercial cleaning service, we will keep your business like a
          professionally cleaned space."
        />
        <ServiceCard
          icon="[ICON]"
          title="Office Cleaning"
          detail="We understand the importance of keeping your offices safe for
        you, your staff, and your customers and can help you do just
        that."
        />
        <ServiceCard
          icon="[ICON]"
          title="Disinfectant Cleaning"
          detail="Protect your clients, customers, and staff with our
        revolutionary and state-of-the-art disinfection services for
        your building."
        />
      </div>

      <LinkButton text="LEARN MORE" className="px-12 py-3 text-sm" />
    </section>
  );
};

export default SectionServices;
