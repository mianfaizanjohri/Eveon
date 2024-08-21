import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Img, Stack } from '@chakra-ui/react';
import img1 from '../../assets/images/leopard.png';
import img2 from '../../assets/images/Pronto 1.png';
import img3 from '../../assets/images/Pronto 2.png';
import img4 from '../../assets/images/Pronto 3.png';

function Carousel({images}) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <Stack
      maxW={'100%'}
      overflow={'hidden'}
      py={10}
      className="slider-container"
    >
      <Slider {...settings}>
        {images?.map((scooter)=>(
          <Stack
          display={'flex !important'}
          flexDirection={'column !important'}
          w={'100%'}
          maxW={'100%'}
          alignItems={'center'}
        >
          <Img src={scooter} maxW={'100%'} h={'60vh'} objectFit={'contain'} w={{base:'80%',md:'70%',lg:'50%'}} />
        </Stack>

        ))}
        
      </Slider>
    </Stack>
  );
}

export default Carousel;
