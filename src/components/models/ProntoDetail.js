import React from 'react';
import { Heading, Img, Stack, Text, Button, chakra } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../slider/Carousel';
import img2 from '../../assets/images/Pronto 1.png';
import img3 from '../../assets/images/Pronto 2.png';
import img4 from '../../assets/images/Pronto 3.png';
import Layout from '../layout/Layout';
const ProntoDetail = () => {
  const nav = useNavigate();
  return (
    <Layout>
    <Stack width={'100%'} className="telex-regular">
      <Stack alignItems={'center'} p={10} gap={4}>
        <Heading
          fontSize={{ base: '25px', md: '25px', lg: '33px' }}
          fontWeight={'500'}
          color={'#0b8c29'}
        >
          Introducing Eveon Pronto
        </Heading>
        <Text
          fontSize={{ base: '15px', md: '15px', lg: '15px' }}
          fontWeight={'400'}
          color={'#000'}
          textAlign={'center'}
          w={{ base: '100%', md: '70%' }}
        >
          Revolutionizing the transport industry in Pakistan. We are proud to
          offer a high-quality, reliable, and convenient transportation solution
          that is perfect for a wide range of needs.
        </Text>
      </Stack>

      <Carousel images={[img2,img3,img4]} />

    
        <Stack gap={4}  alignItems={'center'} textAlign={'center'} px={10}>
          <Heading
           fontSize={{ base: '25px', md: '25px', lg: '33px' }}
           fontWeight={'500'}
           color={'#0b8c29'}
          >
            Choose Your Preference
          </Heading>
          <Text
            fontSize={{ base: '15px', md: '15px', lg: '15px' }}
            fontWeight={'400'}
            color={'#000'}
            textAlign={'center'}
            w={{ base: '100%', md: '70%' }}
          >
            Choose from three distinct colors that reflects your personality.
            Eveon Pronto is available in three colors: Silver, White
            and Red.
          </Text>
        </Stack>
   
        <Stack gap={4}  py={10} alignItems={'center'} textAlign={'center'} px={10}>
          <Heading
           fontSize={{ base: '25px', md: '25px', lg: '33px' }}
           fontWeight={'500'}
           color={'#0b8c29'}
          >
            FEATURES
          </Heading>
        </Stack>
      <Stack
        w={'100%'}
        direction={{ base: 'column', md: 'row' }}
        px={'8%'}
        pb={10}
        gap={10}
      >
        <Stack width={{ base: '100%', md: '50%' }}>
          <Stack gap={10}>
            <Heading
              fontSize={{ base: '25px', md: '25px', lg: '33px' }}
              fontWeight={'400'}
              color={'black'}
            >
              Powerful Motor
            </Heading>
            <Text
              fontSize={{ base: '15px', md: '15px', lg: '15px' }}
              fontWeight={'400'}
              color={'#000'}
              lineHeight={'35px'}
            >
              The motor on Eveon Pronto has 1200w, providing plenty of power
              and torque for a smooth and efficient ride. The motor magnet on
              Eveon Pronto provides strong and reliable performance.
            </Text>
          </Stack>
        </Stack>
        <Stack width={{ base: '100%', md: '50%' }} gap={10}>
          <Heading
            fontSize={{ base: '25px', md: '25px', lg: '33px' }}
            fontWeight={'400'}
            color={'black'}
          >
            Comfortable on Road
          </Heading>
          <Text
            fontSize={{ base: '15px', md: '15px', lg: '15px' }}
            fontWeight={'400'}
            color={'#000'}
            lineHeight={'35px'}
          >
            Eveon Pronto has tire size 10, providing excellent
            grip and handling with disc brakes for reliable stopping power.
            Eveon Pronto is equipped with hydraulic shock absorbers for a
            smooth and comfortable ride
          </Text>
        </Stack>
      </Stack>

      <Stack
      gap={10}
        w={'100%'}
        direction={{ base: 'column', md: 'row' }}
        px={'8%'}
        pb={10}
      >
          <Stack width={{ base: '100%', md: '50%' }} gap={10}>
          <Heading
            fontSize={{ base: '25px', md: '25px', lg: '33px' }}
            fontWeight={'400'}
            color={'black'}
          >
            Battery
          </Heading>
          <Text
            fontSize={{ base: '15px', md: '15px', lg: '15px' }}
            fontWeight={'400'}
            color={'#000'}
            lineHeight={'35px'}
          >
            Eveon Pronto is equipped with 72V, 32Ah graphene battery and it
            takes approximately 5-6 hours to fully charge. The range of Eveon
            Pronto is 90 Km on a single charge, providing plenty of distance
            for a full day’s worth of travel with a max speed of 50-55 Km/h. This scooter model features a reverse gear and cruise control mechanism.
          </Text>
        </Stack>
          <Stack width={{ base: '100%', md: '50%' }} gap={10}>
          <Heading
            fontSize={{ base: '25px', md: '25px', lg: '33px' }}
            fontWeight={'400'}
            color={'black'}
          >
            Loading Capacity
          </Heading>
          <Text
            fontSize={{ base: '15px', md: '15px', lg: '15px' }}
            fontWeight={'400'}
            color={'#000'}
            lineHeight={'35px'}
          >
            Eveon Pronto has a loading capacity of 170 kg, allowing you to
            carry plenty of cargo.
          </Text>
        </Stack>
      
      </Stack>
    </Stack>
    </Layout>
  );
};

export default ProntoDetail;
