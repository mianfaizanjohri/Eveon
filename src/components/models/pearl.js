import React from 'react';
import { Heading, Stack, Text } from '@chakra-ui/react';
import Carousel from '../slider/Carousel';
import img2 from '../../assets/images/joy 1.png';
import img3 from '../../assets/images/joy 2.png';
import img4 from '../../assets/images/joy 3.png';
import Layout from '../layout/Layout';
const JoyDetail = () => {
  return (
    <Layout>
    <Stack width={'100%'} className="telex-regular">
      <Stack alignItems={'center'} p={10} gap={4}>
        <Heading
          fontSize={{ base: '25px', md: '25px', lg: '33px' }}
          fontWeight={'500'}
          color={'#0b8c29'}
        >
          Introducing Eveon JOY
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
            The Pearl Electric Scooter is available in two stylish color 
            options: Green and Silver, allowing you to choose the one
            that suits your personal style.
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
              The motor on Eveon Pearl has 1000w, providing plenty of power
              and torque for a smooth and efficient ride. The motor magnet on
              Eveon JOY provides strong and reliable performance.
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
            Powered by a 800W motor, the scooter delivers smooth acceleration and consistent performance across various terrains.
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
        Equipped with advanced Graphene batteries, the scooter features a 60V 23Ah battery
         pack, providing enhanced energy efficiency and long-lasting power.
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
            Eveon JOY has a loading capacity of 170 kg, allowing you to
            carry plenty of cargo.
          </Text>
        </Stack>
      
      </Stack>
    </Stack>
    </Layout>
  );
};

export default JoyDetail;
