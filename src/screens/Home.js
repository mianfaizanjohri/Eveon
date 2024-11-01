import React from 'react';
import Home from '../components/home/Home';
import EveeC1 from '../components/home/EveeC1';
import Layout from '../components/layout/Layout';
import Cards from '../components/home/Cards';
import LeopardHome from '../components/home/LeopardHome';
import ProtonHome from '../components/home/ProtonHome';
import JoyHome from '../components/home/JoyHome';
import Carousal from '../components/Carousal/Carousal';
import LeopardProHome from '../components/home/LeopardProHome';

const HomePage = () => {
  return (
    <>
      <Layout>
        <Carousal />
        <LeopardHome />
        <ProtonHome />
        <JoyHome />
        <LeopardProHome />
        <Cards />
      </Layout>
    </>
  );
};

export default HomePage;
