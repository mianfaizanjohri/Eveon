import React from 'react';
import { Heading, Img, Stack, } from '@chakra-ui/react';
import Scooter from '../../assets/images/eveon1.png';


const Home = () => {
  return (
    <>
    
      <Stack width={'100%'} py={0}>
        <Stack
          // bgImage={background}
          // bgRepeat={'no-repeat'}
          // bgPosition={'center'}
          // bgSize={'auto'}
          pt={'21%'}
          pb={'5%'}
          alignItems={'center'}
        >
          <Heading
            color={'black'}
            fontSize={{ base: '30px', md: '40px', lg: '50px' }}
            fontWeight={'500'}
          >
            Introducing Eveon Pronto
          </Heading>
          <Img
            src={Scooter}
          // w={{ base: '208px', md: '271px', lg: '393px' }}
          // h={{ base: '238px', md: '311px', lg: '452px' }}
          />
        </Stack>
      </Stack>
    </>

  );
};

export default Home;
