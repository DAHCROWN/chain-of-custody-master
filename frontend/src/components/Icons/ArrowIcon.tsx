import { Icon } from "@chakra-ui/react";
import React from "react";

const ArrowIcon = ({ props }) => {
  return (
    <Icon
      {...props}
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0001 5.99976L1.00014 5.99976"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 0.999878L16.2928 5.29277C16.6262 5.6261 16.7928 5.79277 16.7928 5.99988C16.7928 6.20698 16.6262 6.37365 16.2928 6.70698L12 10.9999"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Icon>
  );
};

export default ArrowIcon;
