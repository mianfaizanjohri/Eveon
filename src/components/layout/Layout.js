import React from 'react'
import { Stack } from '@chakra-ui/react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({children}) => {
  return (
    <Stack minH={'100vh'} gap={0} justifyContent={'space-between'}>
      <Header  />
      {children}
      <Footer />
    </Stack>
  )
}

export default Layout