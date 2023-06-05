import { Box, Button, Link, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box
      position="fixed"
      w="100%"
      display="flex"
      justifyContent="space-between"
      py="1rem"
      bg="white"
      zIndex="1"
      as="nav"
    >
      <Text cursor="pointer" fontSize="xl" fontWeight="bold" mt="2px" ml="30px">
        <Link _hover={{ textDecoration: "none" }} href="#">
          Logo
        </Link>
      </Text>

      <Box>
        <Button variant="ghost" colorScheme="teal" fontWeight="bold">
          <Link _hover={{ textDecoration: "none" }} href="#">
            Inicio
          </Link>
        </Button>
        <Button variant="ghost" colorScheme="teal" fontWeight="bold">
          <Link _hover={{ textDecoration: "none" }} href="#table">
            Nuestros casos
          </Link>
        </Button>
        <Button variant="ghost" colorScheme="teal" fontWeight="bold">
          <Link _hover={{ textDecoration: "none" }} href="#team">
            Equipo
          </Link>
        </Button>
        <Button variant="ghost" colorScheme="teal" fontWeight="bold">
          <Link _hover={{ textDecoration: "none" }} href="#news">
            Noticias
          </Link>
        </Button>
        <Button variant="ghost" colorScheme="teal" fontWeight="bold">
          <Link _hover={{ textDecoration: "none" }} href="#contacto">
            Contacto
          </Link>
        </Button>
      </Box>
    </Box>
  );
}
