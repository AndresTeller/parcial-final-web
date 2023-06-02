import { FormControl, FormLabel, Select } from '@chakra-ui/react';

import PropTypes from "prop-types";
MySelectInput.propTypes = {
  fieldName: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  placeHolder: PropTypes.string,
  children: PropTypes.node,
};

export default function MySelectInput({fieldName='', options=[],placeHolder,children}) {
  return (
    <FormControl id={fieldName.toLowerCase()}>
      <FormLabel>{fieldName}</FormLabel>

      <Select
        placeholder={placeHolder}
        icon={children}
        iconSize="1.5rem"
        iconColor="teal"
      >
        {options.map((el, idx) => {
          return <option key={idx} value={el.toLowerCase()}>{el}</option>
        })}
      </Select>
    </FormControl>
  );
}