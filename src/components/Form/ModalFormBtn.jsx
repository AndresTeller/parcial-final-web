import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Modal,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Form from "./Form";
import { FaPencilAlt } from "react-icons/fa";

function ModalForm({ cedula }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="blue" size="sm" onClick={onOpen}>
        {<FaPencilAlt />}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Form cedula={cedula}></Form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalForm;
