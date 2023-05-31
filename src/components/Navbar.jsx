import { Box, Button, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box display="flex" justifyContent="space-between">
      <Text cursor='pointer' fontSize="xl" fontWeight="bold" mt="2px" ml="30px">
        Logo
      </Text>

      <Box>
        <Button variant="ghost" colorScheme="teal" fontWeight="bold">
          Inicio
        </Button>
        <Button variant="ghost" colorScheme="teal" fontWeight="bold">
          Nuestro estudio
        </Button>
        <Button variant="ghost" colorScheme="teal" fontWeight="bold">
          Areas de practica
        </Button>
        <Button variant="ghost" colorScheme="teal" fontWeight="bold">
          Equipo
        </Button>
        <Button variant="ghost" colorScheme="teal" fontWeight="bold">
          Noticias
        </Button>
        <Button variant="ghost" colorScheme="teal" fontWeight="bold">
          Contacto
        </Button>
      </Box>
    </Box>
  );
}
