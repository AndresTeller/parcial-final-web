import { Box, Container, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

export default function MyTable() {
  return (
    <Box p="4rem">
      <Container maxW="90rem" textAlign="center">
        <Heading size="md">Nuestros casos</Heading>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption>Nuestros casos</TableCaption>
            <Thead>
              <Tr>
                <Th>Tipo de caso</Th>
                <Th>Nacionalidad</Th>
                <Th>Sexo</Th>
                <Th isNumeric>Edad</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Caso 1</Td>
                <Td>Colombia</Td>
                <Td>Masculino</Td>
                <Td isNumeric>25</Td>
              </Tr>
              <Tr>
                <Td>Caso 2</Td>
                <Td>Mexico</Td>
                <Td>Femenino</Td>
                <Td isNumeric>27</Td>
              </Tr>
              <Tr>
                <Td>Caso 3</Td>
                <Td>Argentina</Td>
                <Td>Otro</Td>
                <Td isNumeric>32</Td>
              </Tr>
              <Tr>
                <Td>Caso 3</Td>
                <Td>Argentina</Td>
                <Td>Otro</Td>
                <Td isNumeric>32</Td>
              </Tr>
              <Tr>
                <Td>Caso 3</Td>
                <Td>Argentina</Td>
                <Td>Otro</Td>
                <Td isNumeric>32</Td>
              </Tr>
              <Tr>
                <Td>Caso 3</Td>
                <Td>Argentina</Td>
                <Td>Otro</Td>
                <Td isNumeric>32</Td>
              </Tr>
              <Tr>
                <Td>Caso 3</Td>
                <Td>Argentina</Td>
                <Td>Otro</Td>
                <Td isNumeric>32</Td>
              </Tr>
              <Tr>
                <Td>Caso 3</Td>
                <Td>Argentina</Td>
                <Td>Otro</Td>
                <Td isNumeric>32</Td>
              </Tr>
              <Tr>
                <Td>Caso 3</Td>
                <Td>Argentina</Td>
                <Td>Otro</Td>
                <Td isNumeric>32</Td>
              </Tr>
              <Tr>
                <Td>Caso 3</Td>
                <Td>Argentina</Td>
                <Td>Otro</Td>
                <Td isNumeric>32</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
