import {
  Input,
  Icon,
  InputLeftElement,
  InputGroup,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import PropTypes from "prop-types";
MyInput.propTypes = {
  fieldName: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.elementType.isRequired,
};

export default function MyInput({ fieldName = "", onChange, children }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormControl id={fieldName.toLowerCase()}>
      <FormLabel>{fieldName}</FormLabel>
      <InputGroup size="md">
        <InputLeftElement>
          <Icon as={children} fontSize="1.5rem" color="teal"></Icon>
        </InputLeftElement>
        <Input rounded="md" onChange={handleChange} />
      </InputGroup>
    </FormControl>
  );
}
