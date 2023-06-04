import React from "react";
import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Modal,
} from "@chakra-ui/react";
import Form from "./Form";

function ModalForm({ isOpen, onClose, cedula }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='2xl'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Form cedula={cedula}></Form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalForm;
