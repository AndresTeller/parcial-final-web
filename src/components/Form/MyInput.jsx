import {
  Input,
  Icon,
  InputLeftElement,
  InputGroup,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

export default function MyInput({ fieldName='', children }) {
  return (
    <FormControl id={fieldName.toLowerCase()}>
      <FormLabel>{fieldName}</FormLabel>
      <InputGroup size="md">
        <InputLeftElement>
          <Icon as={children} fontSize="1.5rem" color="teal"></Icon>
        </InputLeftElement>
        <Input rounded="md"></Input>
      </InputGroup>
    </FormControl>
  );
}
