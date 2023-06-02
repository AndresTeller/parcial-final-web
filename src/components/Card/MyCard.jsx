import { Card, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

MyCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default function MyCard({ title, description, children }) {
  return (
    <motion.div whileHover={{ scale: 1.03 }}>
      <Card
        w="20rem"
        h="25rem"
        display="flex"
        flexDir="column"
        alignItems="center"
        gap="1rem"
        boxShadow="base"
        p="1rem"
        borderRadius="md"
      >
        <Heading>{title}</Heading>
        {children}
        <Text mx="2rem">{description}</Text>
      </Card>
    </motion.div>
  );
}
