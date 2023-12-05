import { Icon } from "@chakra-ui/react";
import React from "react";

const TimestampIcon = ({ ...props }) => {
  return (
    <Icon
      {...props}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="19.167"
        cy="19.1"
        r="5.86667"
        fill="#DC4DFE"
        stroke="url(#paint0_linear_59_1059)"
        stroke-width="1.26667"
      />
      <circle
        cx="19"
        cy="19"
        r="18.3667"
        stroke="url(#paint1_linear_59_1059)"
        stroke-width="1.26667"
      />
      <defs>
        <linearGradient
          id="paint0_linear_59_1059"
          x1="26.8337"
          y1="21.4092"
          x2="9.42528"
          y2="21.1512"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.071713" stop-color="#D219FE" />
          <stop
            offset="0.256377"
            stop-color="#DC4DFE"
            stop-opacity="0.977468"
          />
          <stop offset="0.878403" stop-color="#3F00FB" stop-opacity="0.94" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_59_1059"
          x1="41.4103"
          y1="25.75"
          x2="-9.47577"
          y2="24.9958"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.071713" stop-color="#D219FE" />
          <stop
            offset="0.256377"
            stop-color="#DC4DFE"
            stop-opacity="0.977468"
          />
          <stop offset="0.878403" stop-color="#3F00FB" stop-opacity="0.94" />
        </linearGradient>
      </defs>
    </Icon>
  );
};

export default TimestampIcon;
