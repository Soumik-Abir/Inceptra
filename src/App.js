import React from 'react';
import Navbar from './components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <ChakraProvider>
        <Navbar/>
        <Home/>
      </ChakraProvider>
    </>
  )
}

export default App
