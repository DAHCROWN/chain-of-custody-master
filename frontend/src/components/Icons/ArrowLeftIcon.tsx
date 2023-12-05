import { Icon } from "@chakra-ui/react";
import React from "react";

const ArrowLeftIcon = ({ props }) => {
  return (
    <Icon
      {...props}
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 6.00024L17 6.00024"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 11.0001L1.70711 6.70723C1.37377 6.3739 1.20711 6.20723 1.20711 6.00012C1.20711 5.79302 1.37377 5.62635 1.70711 5.29302L6 1.00012"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Icon>
  );
};

export default ArrowLeftIcon;
