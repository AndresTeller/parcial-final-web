import './App.css'
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from './components/Navbar';
import HeroImage from './components/HeroImage';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Form from './components/Form';



function App() {
  return (
    <ChakraProvider>
      <Navbar></Navbar>
      <HeroImage></HeroImage>
      <Cards></Cards>
      <Form></Form>
      <Footer></Footer>
    </ChakraProvider>
  );
}

export default App

/*
  Colores:
  #FDDDCA
  #B9785F
  #AA6955
  #FFD782
  #FFC36E
  #F9EBB2
  #319795
  #45AAB8
  #7ed0ec
  #2B3B4E
  #324A5E
  #506C7F
*/
