import { Box, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";

const AddedParticipantItem = () => {
  return (
    <Flex
      bg={
        "linear-gradient(271deg, #D219FE 1.09%, rgba(220, 77, 254, 0.98) 25.47%, rgba(63, 0, 251, 0.94) 107.56%)"
      }
      position={"relative"}
      w={"full"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"1.625rem"}
      width={"max"}
      px={0.4}
      rounded={"sm"}
      gap={3}
    >
      <Flex
        height={"1.6rem"}
        w={"max"}
        alignItems={"center"}
        p={2}
        justifyContent={"space-between"}
        rounded={"sm"}
        gap={"0.31rem"}
        bg={"primarymid"}
      >
        <Text
          whiteSpace={"nowrap"}
          color={"textlight"}
          fontFamily={"inter"}
          fontSize={"0.75rem"}
          fontStyle={"normal"}
          fontWeight={4000}
        >
          Bryan Chukwuemeka
        </Text>
      </Flex>
    </Flex>
  );
};

const CaseViewDetails = () => {
  return (
    <SimpleGrid columns={2}>
      <Box>
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
        <Stack mt={"3.12rem"} spacing={"1.25rem"}>
          <Box>
            <Text fontFamily={"aldrich"} color={"white"}>
              Date of Logged Evidence
            </Text>
            <Flex
              alignItems={"center"}
              color={"textlight"}
              width={"31.6875rem"}
              height={"3.375rem"}
              bg={"primarymid"}
              px={3}
              rounded={"0.31rem"}
              fontFamily={"aldrich"}
            >
              12 | 04| 2023
            </Flex>
          </Box>
          <Box>
            <Text fontFamily={"aldrich"} color={"white"}>
              Collected By
            </Text>
            <Flex
              alignItems={"center"}
              color={"textlight"}
              width={"31.6875rem"}
              height={"3.375rem"}
              bg={"primarymid"}
              px={3}
              rounded={"0.31rem"}
              fontFamily={"aldrich"}
            >
              Officer Johnson Amoga
            </Flex>
          </Box>
          <Box>
            <Text fontFamily={"aldrich"} color={"white"}>
              Evidence Type
            </Text>
            <Flex
              alignItems={"center"}
              color={"textlight"}
              width={"31.6875rem"}
              height={"3.375rem"}
              bg={"primarymid"}
              px={3}
              rounded={"0.31rem"}
              fontFamily={"aldrich"}
            >
              Picture
            </Flex>
          </Box>
          <Box>
            <Text fontFamily={"aldrich"} color={"white"}>
              Uploaded Picture
            </Text>
            <Flex
              alignItems={"center"}
              color={"textlight"}
              width={"31.6875rem"}
              height={"10.375rem"}
              bg={"primarymid"}
              px={3}
              rounded={"0.31rem"}
              fontFamily={"aldrich"}
            ></Flex>
          </Box>
        </Stack>
      </Box>
      <Box>
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
        <Stack mt={"3.12rem"} spacing={"1.25rem"}>
          <Box>
            <Text fontFamily={"aldrich"} color={"white"}>
              Scene Location
            </Text>
            <Flex
              alignItems={"center"}
              color={"textlight"}
              width={"31.6875rem"}
              height={"3.375rem"}
              bg={"primarymid"}
              px={3}
              rounded={"0.31rem"}
              fontFamily={"aldrich"}
            >
              Needs assessment hostel, Minna.
            </Flex>
          </Box>
          <Box>
            <Text fontFamily={"aldrich"} color={"white"}>
              Storage Location
            </Text>
            <Flex
              alignItems={"center"}
              color={"textlight"}
              width={"31.6875rem"}
              height={"3.375rem"}
              bg={"primarymid"}
              px={3}
              rounded={"0.31rem"}
              fontFamily={"aldrich"}
            >
              Forensic Lab, FUT Minna
            </Flex>
          </Box>
          <Box>
            <Text fontFamily={"aldrich"} color={"white"}>
              Evidence Description
            </Text>
            <Flex
              alignItems={"center"}
              color={"textlight"}
              width={"31.6875rem"}
              height={"10.375rem"}
              bg={"primarymid"}
              px={3}
              rounded={"0.31rem"}
              fontFamily={"aldrich"}
            ></Flex>
          </Box>
          <Box>
            <Text fontFamily={"aldrich"} color={"white"}>
              Added Participants
            </Text>
            <Flex
              alignItems={"center"}
              color={"textlight"}
              width={"31.6875rem"}
              height={"3.375rem"}
              bg={"primarymid"}
              px={3}
              rounded={"0.31rem"}
              fontFamily={"aldrich"}
              gap={3}
            >
              <AddedParticipantItem />
              <AddedParticipantItem />
              <AddedParticipantItem />
            </Flex>
          </Box>
        </Stack>
      </Box>
    </SimpleGrid>
  );
};

export default CaseViewDetails;
