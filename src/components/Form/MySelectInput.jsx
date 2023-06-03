import { FormControl, FormLabel, Select } from "@chakra-ui/react";

import PropTypes from "prop-types";
MySelectInput.propTypes = {
  fieldName: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  placeHolder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default function MySelectInput({
  fieldName = "",
  options = [],
  placeHolder,
  onChange,
  children,
}) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormControl id={fieldName.toLowerCase()}>
      <FormLabel>{fieldName}</FormLabel>

      <Select
        placeholder={placeHolder}
        icon={children}
        iconSize="1.5rem"
        iconColor="teal"
        onChange={handleChange}
      >
        {options.map((el, idx) => {
          return (
            <option key={idx} value={el.toLowerCase()}>
              {el}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
}
