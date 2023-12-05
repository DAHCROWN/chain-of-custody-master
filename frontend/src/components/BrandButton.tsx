import {
  Box,
  Button,
  ButtonProps,
  Flex,
  IconProps,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface IBrandButton extends ButtonProps {
  text: string;
  onClick?: () => void;
  Icon?: React.FC<IconProps>;
  h?: string;
  w?: string;
  isReverse?: Boolean;
}

const BrandButton = ({
  text,
  onClick,
  Icon,
  h = "4.75rem",
  w = "full",
  type = "button",
  isReverse,
  ...rest
}: IBrandButton) => {
  return (
    <Flex
      as={Button}
      type={type}
      alignItems={"center"}
      justifyContent={Icon ? "space-between" : "center"}
      onClick={onClick}
      borderRadius={"0.3125rem"}
      flexDirection={isReverse ? "row-reverse" : "row"}
      w={w}
      h={h}
      px={"1.87rem"}
      py={"1.63rem"}
      bg={
        "linear-gradient( 271deg, #d219fe 1.09%, rgba(220, 77, 254, 0.98) 25.47%, rgba(63, 0, 251, 0.94) 107.56%)"
      }
      _hover={{
        bg: "linear-gradient( 271deg, #d219fe 1.09%, rgba(220, 77, 254, 0.98) 25.47%, rgba(63, 0, 251, 0.94) 107.56%)",
      }}
    >
      <Text bg={"none"} color={"white"}>
        {text}
      </Text>
      {Icon && <Icon boxSize={7} />}
    </Flex>
  );
};

export default BrandButton;
