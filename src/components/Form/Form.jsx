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
    fetch("http://localhost:5000/api/v1/clientes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Hacer algo con la respuesta del servidor
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
            fieldName="Nacionalidad"
            placeHolder="Seleccionar país"
            onChange={(value) => handleInputChange("nacionalidad", value)}
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
