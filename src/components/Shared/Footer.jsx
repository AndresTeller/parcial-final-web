import { Box, Icon, Text } from "@chakra-ui/react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      bg="gray.600"
      display="flex"
      flexDir="column"
      py="2rem"
      gap="1rem"
      textAlign="center"
      as="footer"
    >
      <Text cursor="pointer" fontWeight="bold" fontSize="xl" color="gray.50">
        LOGO
      </Text>
      <Box display="flex" gap="1rem" justifyContent="center">
        <Icon
          cursor="pointer"
          as={FaTwitter}
          color="gray.50"
          fontSize="2xl"
        ></Icon>

        <Icon
          cursor="pointer"
          as={FaGithub}
          color="gray.50"
          fontSize="2xl"
        ></Icon>
        <Icon
          cursor="pointer"
          as={FaLinkedin}
          color="gray.50"
          fontSize="2xl"
        ></Icon>
        <Icon
          cursor="pointer"
          as={FaFacebook}
          color="gray.50"
          fontSize="2xl"
        ></Icon>
        <Icon
          cursor="pointer"
          as={FaInstagram}
          color="gray.50"
          fontSize="2xl"
        ></Icon>
        <Icon
          cursor="pointer"
          as={FaYoutube}
          color="gray.50"
          fontSize="2xl"
        ></Icon>
      </Box>

      <Text fontSize="sm" color="gray.50">
        Copyright © 2021 MPV, Inc.
      </Text>
    </Box>
  );
}
