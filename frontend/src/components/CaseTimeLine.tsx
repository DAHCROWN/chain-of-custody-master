import {
  Box,
  Flex,
  Stack,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  useSteps,
} from "@chakra-ui/react";
import React from "react";
import TimestampIcon from "./Icons/TimestampIcon";

const CaseTimeLine = () => {
  const steps = [
    { title: "First", description: "Contact Info" },
    { title: "Second", description: "Date & Time" },
    { title: "Third", description: "Select Rooms" },
  ];
  const { activeStep, setActiveStep } = useSteps({
    index: 3,
    count: steps.length,
  });

  return (
    <Flex flexDir={"column"} justifyContent={"center"}>
      <TimestampIcon boxSize={8} />

      {[1, 2, 3].map((item) => (
        <Stack w={"full"}>
          <Flex fontFamily={"aldrich"} color={"white"} gap={4}>
            <Flex
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                bg={
                  "linear-gradient(271deg, #D219FE 1.09%, rgba(220, 77, 254, 0.98) 25.47%, rgba(63, 0, 251, 0.94) 107.56%)"
                }
                height={"9rem"}
                width={1}
                rounded={"full"}
              />
              <TimestampIcon boxSize={8} />
            </Flex>
            <Flex
              justifyContent={"space-between"}
              alignItems={"flex-start"}
              w={"50%"}
              mt={-8}
            >
              <Stack>
                <Text>JenniferOffice@gmail.com</Text>
                <Text>Officer Jennifer Francis</Text>
              </Stack>
              <Text>11|10|2023, 12:31:02pm</Text>
            </Flex>
          </Flex>
        </Stack>
      ))}
    </Flex>
  );
};

export default CaseTimeLine;
