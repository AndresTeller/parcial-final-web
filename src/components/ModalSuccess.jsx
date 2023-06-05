import {
  Heading,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";

const ModalSuccess = ({ heading, text, button }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const timerRef = useRef(null);

  const closeModal = () => {
    clearTimeout(timerRef.current);
    onClose();
  };

  const openModal = () => {
    onOpen();
    timerRef.current = setTimeout(closeModal, 2000);
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <>
      {button && button(openModal)}

      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display="flex" justifyContent="center">
            <Icon as={FaCheckCircle} color="green" boxSize="16" />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading size="md" textAlign="center">
              {heading}
            </Heading>
            <Text textAlign="center">{text}</Text>
            <br />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalSuccess;
