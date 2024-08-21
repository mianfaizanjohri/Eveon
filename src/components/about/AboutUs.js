import React from 'react';
import { Heading, Img, Stack, Text, AspectRatio } from '@chakra-ui/react';
import EveeLogo from '../../assets/images/logo-full.png';
import './style.css';

const AboutUs = () => {
  return (
    <Stack py={{base:10,lg:20}} px={{base:6,md:10}} className='telex-regular' w={'100%'}>
      <Stack bgColor={'white'}  >
        <Stack spacing={10} direction={{ base: 'column', md: 'row' }}>
          <Stack alignItems={'center'} w={{ base: '100%', md: '40%' }}>
            <Img src={EveeLogo} w={{base:'8rem',md:'10rem',lg:'13rem'}}  />
          </Stack>
          <Stack w={{ base: '100%', md: '60%' }} gap={7}>
            {/* <Heading
              fontSize={{ base: '35px', md: '40px', lg: '40px' }}
              fontWeight={'400'}
              color={'#0f9363'}
              pl={8}
            >
              Company
            </Heading> */}
            <Text
              fontSize={{ base: '13px', md: '14px', lg: '15px' }}
              fontWeight={'400'}
              color={'black'}
              textAlign={'justify'}
              lineHeight={{base:'25px',lg:'30px'}}
              className="p"
            >
              With a legacy spanning over two decades, our esteemed company, Projection Engineering, has been at the forefront of the manufacturing and supply of specialized parts for numerous industry titans. For a quarter of a century, we have honed our expertise, collaborating closely with major corporations to design and deliver bespoke components tailored to their exacting standards. In parallel, our subsidiary, Hanif Autos, boasts a venerable 40-year history as a cornerstone of Pakistan's automotive landscape. From humble beginnings servicing 2-stroke rickshaws, we have evolved into the country's premier retailer and distributor, facilitating the transition to 4-stroke rickshaws and auto loaders across the nation. Building upon our rich heritage and keen market insight, we have embarked on a new chapter with Eveon, a venture under the esteemed banner of Vot Wheels Pvt Ltd. Eveon represents our commitment to innovation in the burgeoning electric bike industry. Collaborating with the world's leading electric companies, we strive to deliver cutting-edge products that exceed customer expectations and set new standards of excellence in sustainability and performance.
            </Text>
          </Stack>
        </Stack>
      </Stack>
      {/* <Stack pl={'20%'} pr={'11%'} py={3} gap={3}>
        <Text
          fontSize={{ base: '14px', md: '14px', lg: '15px' }}
          fontWeight={'400'}
          color={'#000'}
          textAlign={'justify'}
          lineHeight={'38px'}
        >
          In 2017, the company made the transition from a trade business to an
          auto manufacturing business, becoming Fusion Engineering Private
          Limited. Today, the company is a leading player in the Pakistani
          automotive industry, producing high-quality vehicles for both domestic
          and international markets.
        </Text>
        <Text
          fontSize={{ base: '14px', md: '14px', lg: '15px' }}
          fontWeight={'400'}
          color={'#000'}
          textAlign={'justify'}
          lineHeight={'38px'}
        >
          Under the leadership of Mr. Farrukh Naseem as Group Chairman and Mr.
          Saad Farrukh and Mr. Haseeb Farrukh as Directors, Fusion Engineering
          Private Limited has established itself as a reliable and trusted
          partner for customers across Pakistan. The company’s commitment to
          innovation, quality, and customer satisfaction has helped it to grow
          and thrive in a highly competitive industry.
        </Text>

        <Stack>
          <AspectRatio>
            <iframe
              src="https://www.youtube.com/embed/HOAoSNRtUNc?controls=0&rel=0&disablekb=1&showinfo=0&modestbranding=0&html5=1&iv_load_policy=3&autoplay=1&mute=1&loop=0&playlist=HOAoSNRtUNc&cc_load_policy=0&origin=https%3A%2F%2Fevee.pk&enablejsapi=1&widgetid=1"
              allowFullScreen
            />
          </AspectRatio>
        </Stack>

        <Text
          fontSize={{ base: '14px', md: '14px', lg: '15px' }}
          fontWeight={'400'}
          color={'#000'}
          textAlign={'justify'}
          lineHeight={'38px'}
        >
          In 2012, RS (Road Star) brand was launched as a leading provider of
          high quality and affordable tricycle spare parts for aftermarket for
          tricycle vehicles all over Pakistan. On high demand from our
          distributors, we added bearings to our portfolio in 2015, becoming the
          sole agent for Shandong Oukai Bearing Company, a leading bearing
          manufacturer in China with a global presence. 2017 marked our entry
          into the manufacturing business, and by 2020 our unit was in
          production, providing a new source of income for many people with the
          introduction of Road Star (RS) 150Cc Tricycle Loaders. With its strong
          durability and competitive prices, our satisfied customers can now be
          found all over Pakistan.
        </Text>

        <Text
          fontSize={{ base: '14px', md: '14px', lg: '15px' }}
          fontWeight={'400'}
          color={'#000'}
          textAlign={'justify'}
          lineHeight={'38px'}
        >
          We believe in continuous growth and problem-solving products, and are
          always willing to evolve, learn, and explore to provide the best
          products for our customers at the best possible prices. Now, we are
          preparing to launch our next product, which not only solves the
          consumer problem of high fuel prices, but also helps our country by
          providing a safe and environmentally friendly Two-Wheeler Electric
          Vehicle. We believe this product will revolutionize the market due to
          its efficiency and innovative design.
        </Text>
        <Stack gap={10}>
          <Heading
            fontSize={{ base: '35px', md: '40px', lg: '40px' }}
            fontWeight={'400'}
            color={'black'}
            textAlign={'center'}
          >
            Vision
          </Heading>
          <Text
            fontSize={{ base: '14px', md: '14px', lg: '15px' }}
            fontWeight={'400'}
            color={'#000'}
            textAlign={'justify'}
            lineHeight={'38px'}
          >
            At Eveon, we believe that the future of transportation is electric,
            and our vision is to make stylish electric scooters accessible to
            everyone, revolutionizing the way people move around the city in
            Pakistan.
          </Text>
        </Stack>
        <Stack gap={10}>
          <Heading
            fontSize={{ base: '35px', md: '40px', lg: '40px' }}
            fontWeight={'400'}
            color={'black'}
            textAlign={'center'}
          >
            Mission
          </Heading>
          <Text
            fontSize={{ base: '14px', md: '14px', lg: '15px' }}
            fontWeight={'400'}
            color={'#000'}
            textAlign={'justify'}
            lineHeight={'38px'}
          >
            Our mission at Eveon is to provide an efficient, sustainable, and
            stylish alternative to conventional fuel-based two-wheelers, making
            urban commuting easy and fun. We are committed to designing and
            manufacturing high-quality electric scooters that are affordable,
            safe, and environmentally friendly. We aim to empower individuals
            and communities to reduce their carbon footprint, while enjoying a
            seamless and stylish commute. Our goal is to transform the way
            people move around the city, making electric scooters the preferred
            mode of transportation for the urban dwellers of today and tomorrow.
          </Text>
        </Stack>
      </Stack> */}
    </Stack>
  );
};

export default AboutUs;
