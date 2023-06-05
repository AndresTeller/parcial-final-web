import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Shared/Navbar";
import HeroImage from "./components/Shared/HeroImage";
import Cards from "./components/Card/Cards";
import Footer from "./components/Shared/Footer";
import Form from "./components/Form/Form";
import MyTable from "./components/MyTable";
import Team from "./components/Team";
import AllNews from "./components/News/AllNews";

function App() {
  return (
    <ChakraProvider>
      <Navbar></Navbar>
      <HeroImage></HeroImage>
      <MyTable></MyTable>
      <Cards></Cards>
      <Team></Team>
      <AllNews></AllNews>
      <Form></Form>
      <Footer></Footer>
    </ChakraProvider>
  );
}

export default App;

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
