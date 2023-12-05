import { Box, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import BrandInput from "../components/BrandInput";
import BrandButton from "../components/BrandButton";
import ArrowIcon from "./Icons/ArrowIcon";

const CaseDetails = ({ formik }) => {
  return (
    <Box>
      <Stack>
        <Text
          color={"white"}
          fontSize={"2.5rem"}
          fontWeight={"bold"}
          lineHeight={"3.4375rem"}
          fontFamily={"aldrich"}
        >
          1. Add a new case
        </Text>
        <Text color={"white"} fontFamily={"inter"}>
          Enter essential case details below to establish a secure chain of
          custody.
        </Text>
      </Stack>
      <Box>
        <SimpleGrid
          columns={2}
          gap={"3.94rem"}
          mt={"2.75rem"}
          rowGap={"1.56rem"}
        >
          <Stack spacing={"0.94rem"}>
            <Flex
              bg={
                "linear-gradient(271deg, #D219FE 1.09%, rgba(220, 77, 254, 0.98) 25.47%, rgba(63, 0, 251, 0.94) 107.56%)"
              }
              position={"relative"}
              w={"full"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"3.4rem"}
              width={"31.7rem"}
              rounded={"0.31rem"}
            >
              <Flex
                rounded={"0.31rem"}
                position={"absolute"}
                justifyContent={"center"}
                alignItems={"center"}
                bg="primarymid"
                color={"textlight"}
                height={"3.375rem"}
                w={"31.65rem"}
                fontFamily={"aldrich"}
                fontSize={"1.25rem"}
                fontStyle={"normal"}
                fontWeight={400}
                lineHeight={"normal"}
              >
                Case Number - #100432
              </Flex>
            </Flex>
            <BrandInput
              label={"Date of Logged Evidence"}
              onchange={() => {}}
              id={""}
              name={""}
              placeholder={""}
            />
            <BrandInput
              label={"Scene Location"}
              onchange={() => {}}
              id={""}
              name={""}
              placeholder={""}
            />
          </Stack>
          <Stack spacing={"0.94rem"}>
            <Flex
              bg={
                "linear-gradient(271deg, #D219FE 1.09%, rgba(220, 77, 254, 0.98) 25.47%, rgba(63, 0, 251, 0.94) 107.56%)"
              }
              position={"relative"}
              w={"full"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"3.4rem"}
              width={"31.7rem"}
              rounded={"0.31rem"}
            >
              <Flex
                rounded={"0.31rem"}
                position={"absolute"}
                justifyContent={"center"}
                alignItems={"center"}
                bg="primarymid"
                color={"textlight"}
                height={"3.375rem"}
                w={"31.65rem"}
                fontFamily={"aldrich"}
                fontSize={"1.25rem"}
                fontStyle={"normal"}
                fontWeight={400}
                lineHeight={"normal"}
              >
                Current Date - 12 |04| 2023
              </Flex>
            </Flex>
            <BrandInput
              label={"Collected by"}
              onchange={() => {}}
              id={""}
              name={""}
              placeholder={""}
            />
            <BrandInput
              label={"Storage Location"}
              onchange={() => {}}
              id={""}
              name={""}
              placeholder={""}
            />
          </Stack>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default CaseDetails;
