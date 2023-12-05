import { Box, Center, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import BrandInput from "../components/BrandInput";
import BrandButton from "../components/BrandButton";
import ArrowIcon from "../components/Icons/ArrowIcon";
import { Link, useNavigate } from "react-router-dom";
import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

const Login = () => {
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })

  
  const navigate = useNavigate();
  if (isConnected){
    navigate("/")
  }
  
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
              Login to Your Account
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
              Welcome back! Log in to your account and seamlessly continue
              managing your cases with our secure platform.
            </Text>
          </Stack>
          <Stack spacing={"0.94rem"}>
            <BrandInput
              label={"Email Address"}
              placeholder={"Email Address"}
              onchange={() => {}}
              name={"email"}
              id={"email"}
              type="email"
            />

            <BrandButton
              onClick={() => {
                navigate("/");
              }}
              text={"Login to Your Account"}
              Icon={ArrowIcon}
            />
            <BrandButton
              onClick={() => connect()}
              text={"Connect Wallet"}
            />
            {/* <button onClick={() => connect()}>Connect Wallet</button> */}


          </Stack>
          <Flex color={"white"} gap={1} mt={"8.81rem"} fontFamily={"aldrich"}>
            <Text>Don’t have an account? </Text>{" "}
            <Text as={Link} fontWeight={"bold"} to={"/register"}>
              Create an Account
            </Text>
          </Flex>
        </VStack>
      </Center>
    </Box>
  );
};

export default Login;
