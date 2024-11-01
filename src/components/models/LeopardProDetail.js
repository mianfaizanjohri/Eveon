import React from "react";
import { Heading, Stack, Text } from "@chakra-ui/react";
import Carousel from "../slider/Carousel";
import img2 from "../../assets/Pshoot/LEOPARD_PRO/LP1.png";
import img3 from "../../assets/Pshoot/LEOPARD_PRO/LP2.png";
import img4 from "../../assets/Pshoot/LEOPARD_PRO/LP5.png";
import Layout from "../layout/Layout";
const LeopardProDetail = () => {
  return (
    <Layout>
      <Stack width={"100%"} className="telex-regular">
        <Stack alignItems={"center"} p={10} gap={4}>
          <Heading
            fontSize={{ base: "25px", md: "25px", lg: "33px" }}
            fontWeight={"500"}
            color={"#0b8c29"}
          >
            Introducing Eveon Leopard Pro
          </Heading>
          <Text
            fontSize={{ base: "15px", md: "15px", lg: "15px" }}
            fontWeight={"400"}
            color={"#000"}
            textAlign={"center"}
            w={{ base: "100%", md: "70%" }}
          >
            Revolutionizing the transport industry in Pakistan. We are proud to
            offer a high-quality, reliable, and convenient transportation
            solution that is perfect for a wide range of needs.
          </Text>
        </Stack>

        <Carousel images={[img2, img3, img4]} />

        <Stack gap={4} alignItems={"center"} textAlign={"center"} px={10}>
          <Heading
            fontSize={{ base: "25px", md: "25px", lg: "33px" }}
            fontWeight={"500"}
            color={"#0b8c29"}
          >
            Choose Your Preference
          </Heading>
          <Text
            fontSize={{ base: "15px", md: "15px", lg: "15px" }}
            fontWeight={"400"}
            color={"#000"}
            textAlign={"center"}
            w={{ base: "100%", md: "70%" }}
          >
            Choose from three distinct colors that reflects your personality.
            Eveon Leopard Pro is available in three colors: Silver, White and Red.
          </Text>
        </Stack>

        <Stack
          gap={4}
          py={10}
          alignItems={"center"}
          textAlign={"center"}
          px={10}
        >
          <Heading
            fontSize={{ base: "25px", md: "25px", lg: "33px" }}
            fontWeight={"500"}
            color={"#0b8c29"}
          >
            FEATURES
          </Heading>
        </Stack>
        <Stack
          w={"100%"}
          direction={{ base: "column", md: "row" }}
          px={"8%"}
          pb={10}
          gap={10}
        >
          <Stack width={{ base: "100%", md: "50%" }}>
            <Stack gap={10}>
              <Heading
                fontSize={{ base: "25px", md: "25px", lg: "33px" }}
                fontWeight={"400"}
                color={"black"}
              >
                Powerful Motor
              </Heading>
              <Text
                fontSize={{ base: "15px", md: "15px", lg: "15px" }}
                fontWeight={"400"}
                color={"#000"}
                lineHeight={"35px"}
              >
                The motor on Eveon Leopard Pro has 2000w, providing plenty of power and
                torque for a smooth and efficient ride. The motor magnet on
                Eveon Leopard Pro provides strong and reliable performance.
              </Text>
            </Stack>
          </Stack>
          <Stack width={{ base: "100%", md: "50%" }} gap={10}>
            <Heading
              fontSize={{ base: "25px", md: "25px", lg: "33px" }}
              fontWeight={"400"}
              color={"black"}
            >
              Comfortable on Road
            </Heading>
            <Text
              fontSize={{ base: "15px", md: "15px", lg: "15px" }}
              fontWeight={"400"}
              color={"#000"}
              lineHeight={"35px"}
            >
              Eveon Leopard Pro has tire size 12, providing excellent grip and handling
              with disc brakes for reliable stopping power. Eveon Leopard Pro is
              equipped with hydraulic shock absorbers for a smooth and
              comfortable ride
            </Text>
          </Stack>
        </Stack>

        <Stack
          gap={10}
          w={"100%"}
          direction={{ base: "column", md: "row" }}
          px={"8%"}
          pb={10}
        >
          <Stack width={{ base: "100%", md: "50%" }} gap={10}>
            <Heading
              fontSize={{ base: "25px", md: "25px", lg: "33px" }}
              fontWeight={"400"}
              color={"black"}
            >
              Battery
            </Heading>
            <Text
              fontSize={{ base: "15px", md: "15px", lg: "15px" }}
              fontWeight={"400"}
              color={"#000"}
              lineHeight={"35px"}
            >
              Eveon Leopard Pro is equipped with 72V, 28Ah graphene battery,
              approximately 8 hours to fully charge. The range of Eveon Leopard Pro is
              60-70 Km on a single charge, providing plenty of distance for a
              full day’s worth of travel with a max speed of 70 Km/h. This
              model features a reverse gear and cruise control mechanism.
            </Text>
          </Stack>
          <Stack width={{ base: "100%", md: "50%" }} gap={10}>
            <Heading
              fontSize={{ base: "25px", md: "25px", lg: "33px" }}
              fontWeight={"400"}
              color={"black"}
            >
              Loading Capacity
            </Heading>
            <Text
              fontSize={{ base: "15px", md: "15px", lg: "15px" }}
              fontWeight={"400"}
              color={"#000"}
              lineHeight={"35px"}
            >
              Eveon Leopard Pro has a loading capacity of 170 kg, allowing you to carry
              plenty of cargo.
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default LeopardProDetail;
