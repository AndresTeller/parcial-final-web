import { Card, Heading, Text } from "@chakra-ui/react";

export default function MyCard({ title, description, children }) {
  return (
    <Card
      w="20rem"
      h="25rem"
      display="flex"
      flexDir="column"
      alignItems="center"
      gap="1rem"
    >
      <Heading>{title}</Heading>
      {children}
      <Text mx="2rem"> {description}</Text>
    </Card>
  );
}
