import Footer from './Footer';
import Header from './Header';
import SectionAbout from './SectionAbout';
import SectionContactUs from './SectionContactUs';
import SectionHero from './SectionHero';
import SectionHowToHire from './SectionHowToHire';
import SectionProjects from './SectionProjects';
import SectionServices from './SectionServices';
import SectionWhyChooseUs from './SectionWhyChooseUs';

const page = () => {
  return (
    <>
      <Header />

      <main className="container mx-auto px-4">
        <SectionHero />
        <SectionServices />
        <SectionProjects />
        <SectionAbout />
        <SectionHowToHire />
        <SectionWhyChooseUs />
        <SectionContactUs />
      </main>

      <Footer />
    </>
  );
};

export default page;
