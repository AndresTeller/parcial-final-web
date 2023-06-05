import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import MyAvatar from "./MyAvatar";
import { avatars } from "../data/avatars";

export default function Team() {
  return (
    <Flex bg="gray.200" direction='column' py='2rem' alignItems='center'>
      <Heading textAlign='center'>Equipo</Heading>
      <Stack
        py="2rem"
        direction="row"
        justifyContent="center"
        gap="5rem"
        wrap="wrap"
        maxW="80rem"
      >
        {avatars.map((avatar) => {
          return (
            <MyAvatar
              key={avatar.id}
              image={avatar.image}
              name={avatar.userName}
              text={avatar.text}
              heading={avatar.heading}
            />
          );
        })}
      </Stack>
    </Flex>
  );
}
