import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import MainRoutes from './utils/routes/MainRoutes';
import './App.css'
function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainRoutes />
    </ChakraProvider>
  );
}

export default App;
