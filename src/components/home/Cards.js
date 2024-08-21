import React from 'react';
import { Heading, Img, Stack, Text } from '@chakra-ui/react';
import Cards1 from '../../assets/images/eveon2.jpeg';
import Cards2 from '../../assets/images/leopard (1).png';
import Cards3 from '../../assets/images/Motor-Home.jpg';
import Cards4 from '../../assets/images/tyre.jpeg';
import Cards5 from '../../assets/images/leopard (4).png';

const Cards = () => {
  return (
    <Stack width={'100%'} pt={'8%'} pb={5} gap={6} px={{base:6,md:10}}>
      <Stack gap={6} w={'100%'} direction={{ base: 'column', md: 'row' }}>
        <Stack width={{ base: '100%', md: '50%' }} justifyContent={'center'}>
          <Stack
            bgColor={'#fff'}
            borderRadius={'6px'}
            boxShadow="2xl"
            h={'fit-content'}
            gap={4}
            p={'40px'}
          >
            <Heading
              fontSize={{ base: '20px', md: '20px', lg: '25px' }}
              fontWeight={'400'}
              color={'black'}
            >
              Unique Design
            </Heading>
            <Text
              fontSize={{ base: '13px', md: '13px', lg: '15px' }}
              fontWeight={'400'}
              color={'#000'}
            >
              Modern and minimalistic design that stands out in the crowd
            </Text>
          </Stack>
        </Stack>
        <Stack width={{ base: '100%', md: '50%' }}>
          <Img src={Cards1}  />
        </Stack>
      </Stack>
      <Stack gap={6} w={'100%'} direction={{ base: 'column-reverse', md: 'row' }}>
        <Stack width={{ base: '100%', md: '50%' }}>
          <Img src={Cards2}   />
        </Stack>
        <Stack width={{ base: '100%', md: '50%' }} justifyContent={'center'}>
          <Stack
            bgColor={'#fff'}
            borderRadius={'6px'}
            boxShadow="2xl"
            h={'fit-content'}
            gap={4}
            p={'40px'}
          >
            <Heading
              fontSize={{ base: '20px', md: '20px', lg: '25px' }}
              fontWeight={'400'}
              color={'black'}
            >
              Digital Meter
            </Heading>
            <Text
              fontSize={{ base: '13px', md: '13px', lg: '15px' }}
              fontWeight={'400'}
              color={'#000'}
            >
              Colorful Digital Meter inline with the digital world today
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack gap={6} w={'100%'} direction={{ base: 'column', md: 'row' }}>
        <Stack width={{ base: '100%', md: '50%' }} justifyContent={'center'}>
          <Stack
            bgColor={'#fff'}
            borderRadius={'6px'}
            boxShadow="2xl"
            h={'fit-content'}
            gap={4}
            p={'40px'}
          >
            <Heading
              fontSize={{ base: '20px', md: '20px', lg: '25px' }}
              fontWeight={'400'}
              color={'black'}
            >
              Powerful Motor
            </Heading>
            <Text
              fontSize={{ base: '13px', md: '13px', lg: '15px' }}
              fontWeight={'400'}
              color={'#000'}
            >
              The best in class 1200w electric motor delivers unparallel power
            </Text>
          </Stack>
        </Stack>
        <Stack width={{ base: '100%', md: '50%' }}>
          <Img src={Cards3}  />
        </Stack>
      </Stack>
      <Stack gap={6} w={'100%'} direction={{ base: 'column-reverse', md: 'row' }}>
        <Stack width={{ base: '100%', md: '50%' }}>
          <Img src={Cards4}  />
        </Stack>
        <Stack width={{ base: '100%', md: '50%' }} justifyContent={'center'}>
          <Stack
            bgColor={'#fff'}
            borderRadius={'6px'}
            boxShadow="2xl"
            h={'fit-content'}
            gap={4}
            p={'40px'}
          >
            <Heading
              fontSize={{ base: '20px', md: '20px', lg: '25px' }}
              fontWeight={'400'}
              color={'black'}
            >
              Tubeless tyre
            </Heading>
            <Text
              fontSize={{ base: '13px', md: '13px', lg: '15px' }}
              fontWeight={'400'}
              color={'#000'}
            >
              The 199000 Size is 12 inch Alloy Rim.
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack gap={6} w={'100%'} direction={{ base: 'column', md: 'row' }}>
        <Stack width={{ base: '100%', md: '50%' }} justifyContent={'center'}>
          <Stack
            bgColor={'#fff'}
            borderRadius={'6px'}
            boxShadow="2xl"
            h={'fit-content'}
            gap={4}
            p={'40px'}
          >
            <Heading
              fontSize={{ base: '20px', md: '20px', lg: '25px' }}
              fontWeight={'400'}
              color={'black'}
            >
              Brakes
            </Heading>
            <Text
              fontSize={{ base: '13px', md: '13px', lg: '15px' }}
              fontWeight={'400'}
              color={'#000'}
            >
              The Brake have Front and Rear Bigger Disk.
            </Text>
          </Stack>
        </Stack>
        <Stack width={{ base: '100%', md: '50%' }}>
          <Img src={Cards5}  />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Cards;
