import { Box, Center, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import BrandInput from "../components/BrandInput";
import BrandButton from "../components/BrandButton";
import ArrowIcon from "../components/Icons/ArrowIcon";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <Box bg={"primarydark"}>
      <Flex justifyContent={"flex-end"} p={[1, "4.81rem"]}>
        <Text color={"white"}>Need help?</Text>
      </Flex>
      <Center>
        <VStack>
          <Stack textAlign={"center"} mb={"3.87rem"}>
            <Text
              color={"white"}
              fontSize={"2.5rem"}
              fontWeight={"bold"}
              fontFamily={"aldrich"}
            >
              Create an Account
            </Text>
            <Text
              color={"textsecondarylight"}
              fontWeight={"400"}
              lineHeight={"normal"}
              fontStyle={"normal"}
              fontSize={" 1.5625rem"}
              width={"58.75rem"}
              fontFamily={"inter"}
            >
              Sign up now to streamline case management. Ensure a secure chain
              of custody with our intuitive platform.
            </Text>
          </Stack>
          <Stack spacing={"0.94rem"}>
            <BrandInput
              placeholder={"Full name"}
              onchange={() => {}}
              name={"full_name"}
              id={"full_name"}
            />
            <BrandInput
              label={"Email Address"}
              placeholder={"Email Address"}
              onchange={() => {}}
              name={"email"}
              id={"email"}
            />
            <BrandInput
              label={"Role"}
              placeholder={"Role"}
              onchange={() => {}}
              name={"role"}
              id={"role"}
            />
            <BrandButton
              onClick={() => {
                navigate("/");
              }}
              text={"Create your Account"}
              Icon={ArrowIcon}
            />
          </Stack>

          <Flex color={"white"} gap={1} mt={"3.94rem"} fontFamily={"aldrich"}>
            <Text>Already have an account? </Text>{" "}
            <Text as={Link} fontWeight={"bold"} to={"/login"}>
              login
            </Text>
          </Flex>
        </VStack>
      </Center>
    </Box>
  );
};

export default Register;
