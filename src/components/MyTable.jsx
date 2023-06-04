import {
  Box,
  Button,
  Container,
  Heading,
  Skeleton,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "./utils/capitalizeFirstLetter";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import ModalForm from "./Form/ModalForm";

export default function MyTable() {
  const [isLoading, setIsLoading] = useState(true);
  const [clientes, setClientes] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteUser = async (cedula) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      `http://localhost:5000/api/v1/clientes/${cedula}`,
      options
    );

    console.log(response);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/clientes")
      .then((response) => response.json())
      .then((json) => {
        setClientes(json);

        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      });
  }, []);

  if (isLoading)
    return (
      <Container maxW="90rem" p="4rem">
        <Stack>
          <Skeleton h="5rem" />
          <Skeleton h="2rem" />
          <Skeleton h="2rem" />
          <Skeleton h="2rem" />
          <Skeleton h="2rem" />
        </Stack>
      </Container>
    );

  return (
    <Box p="4rem">
      <Container maxW="90rem" textAlign="center">
        <Heading size="md">Nuestros casos</Heading>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption>Nuestros casos</TableCaption>
            <Thead>
              <Tr>
                <Th>Nombre</Th>
                <Th>Tipo de caso</Th>
                <Th>Nacionalidad</Th>
                <Th>Sexo</Th>
                <Th isNumeric>Edad</Th>
                <Th textAlign="center">Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              {clientes?.map((cliente) => {
                return (
                  <Tr key={cliente.id}>
                    <Td>{capitalizeFirstLetter(cliente.nombre)}</Td>
                    <Td>{capitalizeFirstLetter(cliente.caso)}</Td>
                    <Td>{capitalizeFirstLetter(cliente.nacionalidad)}</Td>
                    <Td>{capitalizeFirstLetter(cliente.sexo)}</Td>
                    <Td isNumeric>{cliente.edad}</Td>
                    <Td>
                      <Stack
                        direction="row"
                        spacing="2"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Button
                          colorScheme="red"
                          size="sm"
                          onClick={() => deleteUser(cliente.cedula)}
                        >
                          {<FaTrash />}
                        </Button>
                        <Button colorScheme="blue" size="sm" onClick={onOpen}>
                          {<FaPencilAlt />}
                        </Button>
                      </Stack>
                      <ModalForm
                        isOpen={isOpen}
                        onClose={onClose}
                        cedula={cliente.cedula}
                      />
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
