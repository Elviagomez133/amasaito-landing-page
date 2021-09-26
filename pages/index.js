import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Footer from '../components/Footer';

const Homepage = () => {
  return(
      <Layout>
        <Hero />
        <Main />
        <Footer />
      </Layout>
  );
};

export default Homepage;