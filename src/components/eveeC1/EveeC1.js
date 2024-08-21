import React from 'react';
import { Heading, Img, Stack, Text, Button, chakra } from '@chakra-ui/react';
import background from '../../assets/images/Price-Cover.png';
import scooter from '../../assets/images/image00001.png';
import Card from '../../assets/images/Colors-2.jpg';
import { FaMotorcycle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Carousel from '../slider/Carousel';
import img1 from '../../assets/images/Leopar 1.png';
import img2 from '../../assets/images/Leopar 2.png';
import img3 from '../../assets/images/Leopar 3.png';
import img4 from '../../assets/images/Leopar 4.png';
const EveeC1 = () => {
  const nav = useNavigate();
  return (
    <Stack width={'100%'} className="telex-regular">
      {/* <Stack>
        <Img src={background} />
      </Stack> */}
      <Stack alignItems={'center'} p={10} gap={4}>
        <Heading
          fontSize={{ base: '25px', md: '25px', lg: '33px' }}
          fontWeight={'500'}
          color={'#0b8c29'}
        >
          Introducing Eveon Leopard
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

      <Carousel images={[img1,img2,img3,img4]} />

    
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
            Eveon Leopard is available in four colors: Silver, White, Green
            and Blue.
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
          {/* <Text
            fontSize={{ base: '15px', md: '15px', lg: '15px' }}
            fontWeight={'400'}
            color={'#000'}
            textAlign={'center'}
            w={{ base: '100%', md: '70%' }}
          >
            The overall size of Eveon Leopard is offering plenty of space
            for passengers and 200 kg of cargo space
          </Text> */}
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
              The motor on Eveon Leopard has 1200w, providing plenty of power
              and torque for a smooth and efficient ride. The motor magnet on
              Eveon Leopard provides strong and reliable performance.
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
            Eveon Leopard has tire size 12, providing excellent
            grip and handling with disc brakes for reliable stopping power.
            Eveon Leopard is equipped with hydraulic shock absorbers for a
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
            Eveon Leopard is equipped with 72V, 38Ah graphene battery and it
            takes approximately 5-6 hours to fully charge. The range of Eveon
            Leopard is 120 Km on a single charge, providing plenty of distance
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
            Eveon Leopard has a loading capacity of 200 kg, allowing you to
            carry plenty of cargo.
          </Text>
        </Stack>
      
      </Stack>
    </Stack>
  );
};

export default EveeC1;
