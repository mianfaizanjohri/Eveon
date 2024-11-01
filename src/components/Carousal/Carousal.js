import React from 'react';
import {
  Stack,
} from '@chakra-ui/react';
import banner from '../../assets/images/banner.jpg';
import bannerMobile from '../../assets/images/banner-mobile.jpg';


const Carousal = () => {
  const isMobile = window.innerWidth <= 600;

  return (
    <>
      <Stack
      className='telex-regular'
        width={'full'}
        px={{ base: 4,md:8, lg: 28 }}
        py={{ base: 4,md:8, lg: 2 }}
        bgImage={`url(${isMobile ? bannerMobile : banner})`}
        bgSize={'cover'} // Set background size to cover
        bgPosition={'center'}
        h={{base:'90vh',lg:'100vh'}}
      >
        {/* <Stack
          width={'100%'}
          direction={{ base: 'row', md: 'row' }}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
        
          
          <Stack
            display={{ base: 'none', md: 'none', lg: 'inherit' }}
            px={10}
            py={2}
            direction={'row'}
            gap={{ base: '20px', lg: '80px', xl: 12 }}
          >
          
            
           
          </Stack>
        </Stack> */}
      </Stack>
    </>
  );
};

export default Carousal;
