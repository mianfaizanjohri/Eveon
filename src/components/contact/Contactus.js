import React from 'react';
import {  Stack, Text,} from '@chakra-ui/react';
import background from '../../assets/images/Contact-2.jpg';

const Contactus = () => {
  return (
    <Stack width={'100%'}>
      <Stack
        // bgImage={background}
        // bgRepeat={'no-repeat'}
        // bgSize={'cover'}
        bg='black'
        height={'594px'}
        justifyContent={'center'}
      >
        <Stack justifyContent={'center'} direction={'row'} mx={'7%'}>
          <Stack  w={{ base: '100%', lg:'60%',xl: '50%' }}>
            <Stack bgColor={'#0f9363'} px={'12%'} borderRadius={'lg'} py={'10%'}>
              <Text
                fontSize={{ base: '14px', md: '14px', lg: '15px' }}
                fontWeight={'500'}
                color={'#fff'}
                textAlign={'center'}
                lineHeight={'38px'}
              >
                Thank you for choosing Eveon. We provide high-quality products
                and excellent customer service, and we are here to help in any
                way we can.
              </Text>
              <Text
                fontSize={{ base: '14px', md: '14px', lg: '15px' }}
                fontWeight={'500'}
                color={'#fff'}
                textAlign={'center'}
                lineHeight={'38px'}
              >
                If you have any questions, comments, or concerns, please don’t
                hesitate to contact us using one of the methods below:
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Contactus;
