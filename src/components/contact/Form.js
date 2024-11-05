import React from 'react';
import {
  Stack,
  Text,
  Heading,
  HStack,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaEnvelopeOpenText, FaPhoneAlt } from 'react-icons/fa';

const Form = () => {
  return (
    <Stack className='telex-regular' w={'100%'}>
      <Stack direction={{ base: 'column', md: 'row' }} alignItems={'baseline'} px={'8%'} py={'8%'}>
        <Stack
          w={{ base: '100%', md: '50%' }}
          gap={6}
          justifyContent={'center'}
        >
          <Heading
            fontSize={{ base: '35px', md: '35px', lg: '35px' }}
            fontWeight={'500'}
            color={'#0f9363'}
            marginBottom={6}
          >
            Contact info
          </Heading>
          <HStack gap={5} alignItems={'center'}>
            <FaMapMarkerAlt color="#0f9363" size={30} />
            <Text
              fontSize={{ base: '14px', md: '14px', lg: '14px' }}
              fontWeight={'400'}
              color={'#000'}
              lineHeight={'25px'}
            >
              20-KM, Baghdadi Street, Off Multan <br /> Road, Lahore, Punjab
              Pakistan
            </Text>
          </HStack>
          <HStack gap={5} alignItems={'center'}>
            <FaEnvelopeOpenText color="#0f9363" size={30} />
            <Text
              fontSize={{ base: '14px', md: '14px', lg: '14px' }}
              fontWeight={'400'}
              color={'#000'}
              lineHeight={'38px'}
            >
              eveonpakistan@gmail.com 
            </Text>
          </HStack>
          <HStack gap={5} alignItems={'center'}>
            <FaPhoneAlt color="#0f9363" size={30} />
            <Text
              fontSize={{ base: '14px', md: '14px', lg: '14px' }}
              fontWeight={'400'}
              color={'#000'}
              lineHeight={'38px'}
            >
              +92 315 9999544
            </Text>
          </HStack>
          <HStack gap={5} alignItems={'center'}>
            <FaPhoneAlt color="#0f9363" size={30} />
            <Text
              fontSize={{ base: '14px', md: '14px', lg: '14px' }}
              fontWeight={'400'}
              color={'#000'}
              lineHeight={'38px'}
            >
             042 35971521 22
            </Text>
          </HStack>
        </Stack>
        <Stack w={{ base: '100%', md: '50%' }} gap={10}>
          <Input
            placeholder="First Name"
            focusBorderColor="#000"
            borderColor={'#000'}
            // fontSize={'23px'}
          />
          <Input
            placeholder="Last Name"
            focusBorderColor="#000"
            borderColor={'#000'}
            // fontSize={'23px'}
          />
          <Input
            placeholder="Phone"
            focusBorderColor="#000"
            borderColor={'#000'}
            // fontSize={'23px'}
            type="number"
          />
          <Input
            placeholder="Email Address"
            focusBorderColor="#000"
            borderColor={'#000'}
            // fontSize={'23px'}
            type="email"
          />
          <Input
            placeholder="Address"
            focusBorderColor="#000"
            borderColor={'#000'}
            // fontSize={'23px'}
            type="text"
          />
          <Textarea
            placeholder="Message"
            focusBorderColor="#000"
            borderColor={'#000'}
            // fontSize={'23px'}
          />
          <Stack alignItems={'center'}>
            <Button
              size={'lg'}
              color={'#fff'}
              bgColor={'#0f9363'}
              fontWeight={'700'}
              fontSize={{ base: '18px', xl: '20px' }}
              w={'fit-content'}
              // // borderRadius={0}
              px={'14%'}
              py={4}
              _hover={{
                color: '#fff',
                bgColor: '#0f9363',
              }}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Form;
