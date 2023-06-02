import { Box, Image, chakra } from "@chakra-ui/react";
import { heroImages } from "../../assets/heroImages";

export default function HeroImage() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.200"
      py="2rem"
      flexWrap="wrap"
      gap="1rem"
    >
      <Box h="10rem" maxW="30rem" ml="1rem">
        <chakra.h1
          fontSize="5xl"
          lineHeight={1}
          fontWeight="bold"
          textAlign="left"
          // color="#A37D57"
        >
          El mejor bufete
          <br />
          de abogados <br />
          <chakra.span color="teal.500">Musa Paredes Vera</chakra.span>
        </chakra.h1>
      </Box>
      <Box maxW="27rem" mr="1rem">
        <Image src={heroImages[0]} borderRadius="2rem"></Image>
      </Box>
    </Box>
  );
}
