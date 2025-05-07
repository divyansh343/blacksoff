import ContactForm from '@/components/ui/home/contact-form';
import { Container } from '../components/ui/containers';
import AutoSection from '@/components/ui/home/automotive-section';
import HeroSection from '@/components/ui/home/hero';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AutoSection />
      <ContactForm />
    </>
  );
};

export default Home;
