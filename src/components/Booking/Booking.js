import React from 'react';
import {
  Heading,
  Img,
  Stack,
  Text,
  Button,
  chakra,
  Divider,
  HStack,
  Link,
  Spacer,
  Progress,
} from '@chakra-ui/react';
import { MdCloudDone } from 'react-icons/md';
import step from '../../assets/images/Untitled.jpg';
import Terms from './Terms';
import OrderBook from './OrderBook';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Booking = () => {
  return (
    <Stack>
      <Header/>
    <Stack px={10} width={'100%'} my={4} alignItems={'center'}>
      <Stack w={{ base: '100#', md: '100%', lg: '85%', xl: '80%' }}>
        {/* <Stack
          bgColor={'#fff'}
          boxShadow={'lg'}
          borderTop={'10px solid #db4437'}
          borderTopRadius={'8px'}
          borderbottomRadius={'8px'}
          borderBottom={'1px solid #dadce0'}
          borderLeft={'1px solid #dadce0'}
          borderRight={'1px solid #dadce0'}
          px={8}
          py={4}
          gap={3}
        >
          <Heading
            fontSize={{ base: '32px', md: '32px', lg: '32px' }}
            fontWeight={'400'}
            color={'#000'}
          >
            Eveon Provisional Booking Order
          </Heading>
          <Text
            fontSize={{ base: '15px', md: '14px', lg: '14px' }}
            fontWeight={'400'}
            color={'#000'}
            pb={1}
          >
            By clicking "Next", you agree to the following terms and conditions.
          </Text>
          <Divider borderColor={'#dadce0'} />
          <Stack direction={{ base: 'column', md: 'row' }} pt={1}>
            <HStack>
              <Text
                fontSize={{ base: '15px', md: '14px', lg: '14px' }}
                fontWeight={'500'}
                color={'#5f6368'}
              >
                Sufiyan1234@gmail.com
              </Text>
              <Link
                color={'#15c'}
                fontSize={{ base: '12px', md: '14px' }}
                textDecoration={'none'}
                href="https://accounts.google.com/v3/signin/identifier?hl=en-gb&ifkv=ASKXGp240oeboY66HMeErwmEpMoPaloVqspp-YtOX44umBSssVzCEXefhWmWFWp4xzD168mWRtAy&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1695050855%3A1705914439095373&theme=glif"
              >
                Switch account
              </Link>
            </HStack>
            <Spacer />
            <MdCloudDone size={20} cursor={'pointer'} />
          </Stack>
          <Text
            fontSize={{ base: '14px', md: '14px', lg: '14px' }}
            fontWeight={'400'}
            color={'#5f6368'}
            pt={2}
          >
            The name and photo associated with your Google account will be
            recorded when you upload files and submit this form. Your email is
            not part of your response.
          </Text>
        </Stack> */}

        <Stack
          bgColor={'#fff'}
          boxShadow={'lg'}
          border={'1px solid #dadce0'}
          borderRadius={'8px'}
          px={8}
          py={10}
        >
          <Img src={step} />
        </Stack>

        <Terms />

        {/* <OrderBook/> */}

        <Stack direction={'row'} justifyContent={'space-between'}>
          <HStack>
          <Button
            border={'1px solid #dadce0'}
            size={'md'}
            px={6}
            fontSize={'14px'}
            color={'#d93d2e'}
            boxShadow={'xl'}
            bgColor={'white'}
          >
            Next
          </Button>
          {/* <Button
            border={'1px solid #dadce0'}
            size={'md'}
            px={6}
            fontSize={'14px'}
            color={'#fff'}
            boxShadow={'xl'}
            bgColor={'#d93d2e'}
            _hover={{}}
          >
            Submit
          </Button> */}
          </HStack>
          <HStack>
            <Progress value={80} />
            {/* <Text fontWeight={'600'} fontSize={'14px'} color={'#202124'}>
              Page 1 of 13
            </Text> */}
          </HStack>
          {/* <Button fontSize={'14px'} color={'#d93d2e'} bgColor={'white'}>
            Clear Form
          </Button> */}
        </Stack>

        {/* <Stack py={2}>
          <Text fontWeight={'600'} fontSize={'12px'} color={'#000000a8'}>
            Never submit passwords through Google Forms.
          </Text>
          <Text
            fontWeight={'600'}
            fontSize={'12px'}
            color={'#000000a8'}
            align={'center'}
            pt={2}
          >
            This content is neither created nor endorsed by Google. Report Abuse
            - Terms of Service - Privacy Policy
          </Text>
          <Text
            fontWeight={'600'}
            fontSize={'24px'}
            color={'#000000a8'}
            align={'center'}
            pt={2}
          >
            Google Forms
          </Text>
        </Stack> */}
      </Stack>
    </Stack>
    <Footer/>
    </Stack>
  );
};

export default Booking;
