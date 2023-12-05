import React from "react";
import {
  Box,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  Textarea,
} from "@chakra-ui/react";

const BrandTextArea = ({ label, placeholder, onchange, name, id }) => {
  return (
    <Stack>
      {label && (
        <FormLabel color={"white"} htmlFor={id}>
          {label}
        </FormLabel>
      )}
      <Textarea
        bg={"primarymid"}
        width={"31.6875rem"}
        height={"9.1875rem"}
        color={"textsecondarylight"}
        _placeholder={{ color: "textsecondary" }}
        placeholder={placeholder}
        onChange={onchange}
        border={"none"}
        outline={"none"}
        name={name}
        id={id}
      />
    </Stack>
  );
};

export default BrandTextArea;
