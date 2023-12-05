import { Box, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import BrandInput from "../components/BrandInput";
import BrandTextArea from "./BrandTextArea";

const EvidenceDetails = ({ onOpen }) => {
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
          2. Add a new case
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
            <BrandInput
              label={"Evidence Type"}
              onchange={() => {}}
              id={""}
              name={""}
              placeholder={""}
            />
            <BrandInput
              label={"Upload"}
              onchange={() => {}}
              id={""}
              name={""}
              placeholder={""}
            />
          </Stack>
          <Stack spacing={"0.94rem"}>
            <BrandTextArea
              label={"Evidence Description"}
              onchange={() => {}}
              id={""}
              name={""}
              placeholder={"Enter the Evidence Description"}
            />
            <Stack>
              <Text color="white">Add Participant(s)</Text>
              <Box
                bg={"primarymid"}
                rounded={"sm"}
                width={"31.6875rem"}
                height={"4.75rem"}
                cursor={"pointer"}
                py={2}
                px={4}
                color={"textsecondary"}
                onClick={onOpen}
              >
                Select Participant(s) to be added
              </Box>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default EvidenceDetails;
