import {
  Box,
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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "./utils/capitalizeFirstLetter";
import ModalForm from "./Form/ModalFormBtn";
import DeleteModal from "./Form/ModalDeleteBtn";

export default function MyTable() {
  const [isLoading, setIsLoading] = useState(true);
  const [clientes, setClientes] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/clientes")
      .then((response) => response.json())
      .then((json) => {
        setClientes(json);

        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      });
  });

  if (isLoading)
    return (
      <Container maxW="90rem" p="4rem" as="section" id="table">
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
    <Box p="4rem" as="section" id="table">
      <Container maxW="90rem" textAlign="center">
        <Heading mb='1rem'>Nuestros casos</Heading>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            
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
                        <DeleteModal cedula={cliente.cedula}></DeleteModal>
                        <ModalForm cedula={cliente.cedula} />
                      </Stack>
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
