import { Box, FormLabel, Input, InputGroup, Stack } from "@chakra-ui/react";
import React from "react";

const BrandInput = ({
  label,
  placeholder,
  onchange,
  type = "text",
  name,
  id,
}) => {
  return (
    <Stack>
      {label && (
        <FormLabel color={"white"} htmlFor={id}>
          {label}
        </FormLabel>
      )}
      <Input
        bg={"primarymid"}
        width={"31.6875rem"}
        height={"4.75rem"}
        color={"textsecondarylight"}
        _placeholder={{ color: "textsecondary" }}
        placeholder={placeholder}
        onChange={onchange}
        border={"none"}
        outline={"none"}
        type={type}
        name={name}
        id={id}
      />
    </Stack>
  );
};

export default BrandInput;
