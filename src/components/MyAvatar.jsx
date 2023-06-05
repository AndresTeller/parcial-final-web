import { Avatar, Heading, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

export default function MyAvatar({ image, userName, heading, text }) {
  const isLgOrUp = useBreakpointValue({ base: false, lg: true });

  return (
    <Stack alignItems="center" maxW="15rem" textAlign="center">
      <Avatar name={userName} src={image} boxSize="6rem" />
      <Heading size="sm">{heading}</Heading>
      {isLgOrUp && <Text>{text}</Text>}
    </Stack>
  );
}
