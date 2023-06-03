import { useState } from "react";
import { Box, Button, Container, Heading } from "@chakra-ui/react";
import MyInput from "./MyInput";
import MySelectInput from "./MySelectInput";
import {
  FaUser,
  FaAddressCard,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";

const SimpleSignIn = () => {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (fieldName, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(formValues);
  };

  return (
    <Box bg="gray.100">
      <Container textAlign="center" p="2rem">
        <Heading>Contáctanos</Heading>
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
          <MyInput
            fieldName="Nombre"
            onChange={(value) => handleInputChange("nombre", value)}
          >
            {FaUser}
          </MyInput>
          <MySelectInput
            options={["Masculino", "Femenino", "Otro"]}
            fieldName="Sexo"
            placeHolder="Seleccionar sexo"
            onChange={(value) => handleInputChange("sexo", value)}
          />
          <MyInput
            fieldName="Edad"
            onChange={(value) => handleInputChange("edad", value)}
          >
            {FaCalendarAlt}
          </MyInput>
          <MySelectInput
            options={["Colombia", "México", "Argentina"]}
            fieldName="Pais"
            placeHolder="Seleccionar país"
            onChange={(value) => handleInputChange("pais", value)}
          />
          <MyInput
            fieldName="Cedula"
            onChange={(value) => handleInputChange("cedula", value)}
          >
            {FaAddressCard}
          </MyInput>
          <MySelectInput
            options={["Caso1", "Caso2", "Caso3"]}
            fieldName="Caso"
            placeHolder="Seleccionar caso"
            onChange={(value) => handleInputChange("caso", value)}
          />
          <MyInput
            fieldName="Correo"
            onChange={(value) => handleInputChange("correo", value)}
          >
            {FaEnvelope}
          </MyInput>
          <Box mt="1rem" display="flex" gap="1rem" alignItems="center">
            <Button colorScheme="teal">Cancelar</Button>
            <Button colorScheme="teal" onClick={handleSubmit}>
              Enviar
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SimpleSignIn;
