import { Box, Button, Container } from "@chakra-ui/react";
import MyInput from "./MyInput";
import MySelectInput  from "./MySelectInput";
import {
  FaUser,
  FaAddressCard,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";

const SimpleSignIn = () => {
  return (
    <Container>
      <Box
        maxW="40rem"
        p="2rem"
        m="1rem"
        display="flex"
        flexDir="column"
        alignItems="center"
        borderRadius="1rem"
        shadow="dark-lg"
      >
        <MyInput fieldName="Nombre">{FaUser}</MyInput>
        <MySelectInput
          options={["Masculino", "Femenino", "Otro"]}
          fieldName="Sexo"
          placeHolder="Seleccionar sexo"
        />
        <MyInput fieldName="Edad">{FaCalendarAlt}</MyInput>
        <MyInput fieldName="Cedula">{FaAddressCard}</MyInput>
        <MySelectInput
          options={["Colombia", "México", "Argentina"]}
          fieldName="Pais"
          placeHolder="Seleccionar país"
        />
        <MyInput fieldName="Correo">{FaEnvelope}</MyInput>

        <MySelectInput
          options={["Caso1", "Caso2", "Caso3"]}
          fieldName="Caso"
          placeHolder="Seleccionar caso"
        />
        <Box mt="1rem" display='flex' gap='1rem' alignItems='center'>
          <Button colorScheme="teal">
            Cancelar
          </Button>
          <Button colorScheme="teal">
            Enviar
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SimpleSignIn;
