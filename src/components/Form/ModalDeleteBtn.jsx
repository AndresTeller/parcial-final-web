import {
  Button,
  Heading,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FaRegTrashAlt, FaTrash } from "react-icons/fa";
import ModalSuccess from "../ModalSuccess";

export default function DeleteModal({ cedula }) {
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

  return (
    <>
      <Button colorScheme="red" size="sm" onClick={onOpen}>
        {<FaTrash />}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon boxSize="12" color="red" as={FaRegTrashAlt}></Icon>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign="center">
            <Heading size="md">Estás a punto de eliminar un cliente</Heading>
            Esta acción eliminará el cliente de la tabla
            <br />
            ¿Desea continuar?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <ModalSuccess
              heading="Eliminación exitosa"
              text="Su cliente ha sido eliminado exitosamente."
              button={(openModal) => (
                <Button colorScheme="red" onClick={() => {
                  openModal();

                  deleteUser(cedula);
                }}>
                  Eliminar
                </Button>
              )}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
