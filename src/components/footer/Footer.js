import React from 'react';
import {
  Stack,
  HStack,
  Text,
  Link,
  Heading,
  Img,
  SimpleGrid,
} from '@chakra-ui/react';
import logo from '../../assets/images/logo-full.png';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const nav = useNavigate();
  return (
    <Stack
      width={"100%"}
      background={"linear-gradient(to right,#442e82 ,  #0ad035)"}
      py={{ base: 8, md: 12 }}
      px={10}
      alignItems={"center"}
      className="telex-regular"
    >
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={{ base: 12, md: 16, lg: 20 }}>
        <Stack alignItems={"center"} direction={"column"}>
          <Img
            src={logo}
            w={"120px"}
            cursor={"pointer"}
            onClick={() => nav("/")}
          />
        </Stack>
        <Stack
          alignItems={{ base: "center", md: "start" }}
          direction={"column"}
          spacing={3}
          lineHeight={1}
        >
          <Heading color={"white"} fontSize={"2xl"} mb={2} fontWeight={"500"}>
            Get in Touch
          </Heading>
          <Stack spacing={3} alignItems={"baseline"}>
            <HStack>
              <FaEnvelope color="#a9b8c3" />
              <Text color={"#fff"} fontSize={"14px"} fontWeight={"400"}>
                eveonpakistan@gmail.com
              </Text>
            </HStack>
            <HStack>
              <FaPhoneAlt color="#a9b8c3" />
              <Text color={"#fff"} fontSize={"14px"} fontWeight={"400"}>
                +92 315 9999544
              </Text>
            </HStack>
            <HStack>
              <FaPhoneAlt color="#a9b8c3" />
              <Text color={"#fff"} fontSize={"14px"} fontWeight={"400"}>
                042 35971521 22
              </Text>
            </HStack>
          </Stack>
        </Stack>
        <Stack alignItems={"center"} direction={"column"}>
          <Heading color={"white"} mb={2} fontSize={"2xl"} fontWeight={"500"}>
            Manufacturing Unit
          </Heading>
          <HStack alignItems={"baseline"}>
            <FaBuilding style={{ mt: 3 }} color="#a9b8c3" size={15} />
            <Text color={"#fff"} fontSize={"14px"} fontWeight={"400"}>
              20-KM, Baghdadi Street,
              <br />
              Off Multan Road,Lahore,
              <br /> Punjab Pakistan
            </Text>
          </HStack>
        </Stack>
        <Stack alignItems={"center"} direction={"column"}>
          <Heading mb={2} color={"white"} fontSize={"2xl"} fontWeight={"500"}>
            Follow Us
          </Heading>
          <HStack mt={1} gap={4}>
            <Link
              target="_blank"
              href="https://www.instagram.com/eveonpak/?igsh=dW55Y2FvcHBzNTdk"
            >
              <FaInstagram color="#fff" size={20} />
            </Link>
            <Link
              target="_blank"
              href="https://www.facebook.com/eveonpakistan?mibextid=LQQJ4d"
            >
              <FaFacebook color="#fff" size={20} />
            </Link>
          </HStack>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
};

export default Footer;
