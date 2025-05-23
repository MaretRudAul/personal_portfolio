// pages/index.tsx
import { NextPage } from 'next';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Projects from '../components/Projects';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <SEO title="Maret Rudin-Aulenbach | Projects" />
      <Projects />
    </Layout>
  );
};

export default HomePage;