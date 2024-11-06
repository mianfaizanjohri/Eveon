import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack,
  Img,
  Link,
  Accordion,
  AccordionButton,
  AccordionItem,
  Box,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react';
import { BsList } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/EVEE-Logo.png';

const DrawerButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const nav = useNavigate();

  return (
    <Stack
      className="telex-regular"
      w={"100%"}
      display={{ base: "flex", md: "flex", lg: "none" }}
      alignItems={"end"}
    >
      <Stack ref={btnRef} onClick={onOpen} pr={{ base: "none", md: 5 }}>
        <BsList cursor={"pointer"} color="white" size={30} />
      </Stack>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={"white"} />
          <DrawerHeader bgColor={"#0f9363"} py={3}>
            <Img
              src={logo}
              w={"80px"}
              cursor={"pointer"}
              onClick={() => nav("/")}
            />
          </DrawerHeader>

          <DrawerBody pt={10} bgColor={"#0f9363"}>
            <Stack alignItems={"center"}>
              <Stack gap={4}>
                <Link
                  onClick={() => nav("/")}
                  fontWeight={"600"}
                  fontSize={{ base: "13px", xl: "15px" }}
                  color={"white"}
                  _hover={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Home
                </Link>
                <Accordion
                  width={"110px"}
                  allowToggle
                  borderColor="transparent"
                >
                  <AccordionItem>
                    <AccordionButton
                      p={0}
                      _active={{ bg: "transparent" }}
                      _hover={{ bg: "transparent" }}
                      color="white"
                      fontSize={{ base: "13px", xl: "15px" }}
                    >
                      <Box as="span" flex="1" textAlign="left">
                        Eveon Models
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel px={0} py={4}>
                      <Stack spacing={3}>
                        <Link
                          onClick={() => nav("/eveon-leopard-pro")}
                          fontWeight={"500"}
                          fontSize={{ base: "0.8rem", xl: "16px" }}
                          color={"white"}
                          _hover={{
                            textDecoration: "none",
                            color: "white",
                          }}
                        >
                          Leopard Pro
                        </Link>
                        <Link
                          onClick={() => nav("/eveon-leopard")}
                          fontWeight={"500"}
                          fontSize={{ base: "0.8rem", xl: "16px" }}
                          color={"white"}
                          _hover={{
                            textDecoration: "none",
                            color: "white",
                          }}
                        >
                          Leopard
                        </Link>
                        <Link
                          onClick={() => nav("/eveon-pronto")}
                          fontWeight={"500"}
                          fontSize={{ base: "0.8rem", xl: "16px" }}
                          color={"white"}
                          _hover={{
                            textDecoration: "none",
                            color: "white",
                          }}
                        >
                          Pronto
                        </Link>
                        <Link
                          onClick={() => nav("/eveon-joy")}
                          fontWeight={"500"}
                          fontSize={{ base: "0.8rem", xl: "16px" }}
                          color={"white"}
                          _hover={{
                            textDecoration: "none",
                            color: "white",
                          }}
                        >
                          JOY
                        </Link>
                        <Link
                          onClick={() => nav("/eveon-zippy")}
                          fontWeight={"500"}
                          fontSize={{ base: "0.8rem", xl: "16px" }}
                          color={"white"}
                          _hover={{
                            textDecoration: "none",
                            color: "white",
                          }}
                        >
                          Zippy
                        </Link>
                      </Stack>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Link
                  onClick={() => nav("/about")}
                  fontWeight={"600"}
                  fontSize={{ base: "13px", xl: "15px" }}
                  color={"white"}
                  _hover={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  About us
                </Link>
                <Link
                  onClick={() => nav("/contact")}
                  fontWeight={"600"}
                  fontSize={{ base: "13px", xl: "15px" }}
                  color={"white"}
                  _hover={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Contact Us
                </Link>
                <Link
                  onClick={() => nav("/Shop")}
                  fontWeight={"600"}
                  fontSize={{ base: "13px", xl: "15px" }}
                  color={"white"}
                  _hover={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Book Now
                </Link>
                <Link
                  onClick={() => nav("/login")}
                  fontWeight={"600"}
                  fontSize={{ base: "13px", xl: "15px" }}
                  color={"white"}
                  _hover={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Login
                </Link>
              </Stack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
};

export default DrawerButton;


