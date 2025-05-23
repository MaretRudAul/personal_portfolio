// pages/about.tsx
import { NextPage } from 'next';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import About from '../components/About';

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <SEO title="Maret Rudin-Aulenbach | About" />
      <About />
    </Layout>
  );
};

export default AboutPage;