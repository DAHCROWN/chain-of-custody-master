import {
  Box,
  Checkbox,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CloseIcon from "./Icons/CloseIcon";
import BrandButton from "./BrandButton";

const DATA = [
  {
    name: "Dotun Obi",
    role: "Police Officer",
  },
  {
    name: "Dotun Obi",
    role: "Police Officer",
  },
  {
    name: "Dotun Obi",
    role: "Police Officer",
  },
  {
    name: "Dotun Obi",
    role: "Police Officer",
  },
  {
    name: "Dotun Obi",
    role: "Police Officer",
  },
  {
    name: "Dotun Obi",
    role: "Police Officer",
  },
  {
    name: "Dotun Obi",
    role: "Police Officer",
  },
  {
    name: "Dotun Obi",
    role: "Police Officer",
  },
];

const ParticipantItem = ({ name, role, isAdded }) => {
  return (
    <Flex w={"full"} justifyContent={"space-between"}>
      <Stack>
        <Text
          color={"white"}
          fontFamily={"inter"}
          fontSize={"0.875rem"}
          fontStyle={"normal"}
          fontWeight={"500"}
          lineHeight={"normal"}
        >
          {name}
        </Text>
        <Text
          color={"#FFF"}
          fontFamily={"inter"}
          fontSize={"0.625rem"}
          fontStyle={"normal"}
          fontWeight={"300"}
          lineHeight={"normal"}
        >
          {role}
        </Text>
      </Stack>
      <Checkbox />
    </Flex>
  );
};

const AddParticipants = ({ onOpen, onClose, isOpen }) => {
  const [addedParticipants, setAddParticipants] = useState<typeof DATA>();
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"3xl"}>
      <ModalContent
        bg={"primarydark"}
        color={"white"}
        shadow={"lg"}
        py={"1.38rem"}
        w={"43rem"}
        h={"25rem"}
        border={"1px solid #383838"}
      >
        <ModalBody>
          <Flex justifyContent={"space-between"} gap={5} h={"full"}>
            <Flex
              flexDirection={"column"}
              h={"full"}
              justifyContent={"space-between"}
            >
              <Flex
                w={"18rem"}
                flexWrap={"wrap"}
                bg={"primarymid"}
                p={3}
                h={"10rem"}
                rounded={"md"}
                gap={"0.31rem"}
                columnGap={3}
              >
                {[1, 2, 3, 4].map((item) => (
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
                      <CloseIcon boxSize={8} />
                    </Flex>
                  </Flex>
                ))}
              </Flex>

              <BrandButton
                type={"submit"}
                text={"Add Participant(s)"}
                w={"10.5625rem"}
                h={"2.75rem"}
                onClick={onClose}
              />
            </Flex>
            <Stack
              gap={"1.25rem"}
              w={"20rem"}
              bg={"primarymid"}
              p={3}
              rounded={"md"}
              maxH={"21rem"}
              overflowY={"scroll"}
            >
              {DATA.map((item) => (
                <ParticipantItem
                  {...item}
                  isAdded={addedParticipants?.includes(item)}
                />
              ))}
            </Stack>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddParticipants;
