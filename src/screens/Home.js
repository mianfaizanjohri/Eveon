import React from 'react';
import Home from '../components/home/Home';
import EveeC1 from '../components/home/EveeC1';
import Layout from '../components/layout/Layout';
import Cards from '../components/home/Cards';
import LeopardHome from '../components/home/LeopardHome';
import ProtonHome from '../components/home/ProtonHome';
import JoyHome from '../components/home/JoyHome';
import VideoSection from '../components/home/VideoSection';
import Carousel from '../components/slider/Carousel';

const HomePage = () => {
  return (
    <>
      <Layout>
        <LeopardHome/>
        <ProtonHome/>
        <JoyHome/>
        <Cards />
        {/* <Carousel/> */}
        {/* <VideoSection/> */}
      </Layout>
    </>
  );
};

export default HomePage;
