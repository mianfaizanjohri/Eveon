import React from 'react';
import Layout from '../components/layout/Layout';
import Cards from '../components/home/Cards';
import LeopardHome from '../components/home/LeopardHome';
import ProtonHome from '../components/home/ProtonHome';
import JoyHome from '../components/home/JoyHome';
import Carousal from '../components/Carousal/Carousal';
import LeopardProHome from '../components/home/LeopardProHome';
import ZippyHome from '../components/home/ZippyHome';

const HomePage = () => {
  return (
    <>
      <Layout>
        <Carousal />
        <LeopardHome />
        <ProtonHome />
        <JoyHome />
        <LeopardProHome />
        <ZippyHome />
        <Cards />
      </Layout>
    </>
  );
};

export default HomePage;
