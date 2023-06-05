import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function News({title, text}) {
  return (
    <Card
      w="27rem"
      maxH="27rem"
      textAlign="center"
      boxShadow="md"
      borderRadius="2rem"
    >
      <CardHeader>
        <Heading size='lg'>{title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>
          {text}
        </Text>
      </CardBody>
    </Card>
  );
}
