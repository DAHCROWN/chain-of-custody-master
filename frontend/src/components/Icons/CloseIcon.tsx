import { Icon } from "@chakra-ui/react";
import React from "react";

const CloseIcon = ({ props }) => {
  return (
    <Icon
      {...props}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_52_804)">
        <path
          d="M7.49968 7.5L4.5 4.5M4.50032 7.5L7.5 4.5"
          stroke="#B8B8B8"
          stroke-width="0.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11C8.76142 11 11 8.76142 11 6Z"
          stroke="#B8B8B8"
          stroke-width="0.7"
        />
      </g>
      <defs>
        <clipPath id="clip0_52_804">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </Icon>
  );
};

export default CloseIcon;
