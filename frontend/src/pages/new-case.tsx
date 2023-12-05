import {
  Box,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import BrandInput from "../components/BrandInput";
import BrandButton from "../components/BrandButton";
import CaseDetails from "../components/CaseDetails";
import EvidenceDetails from "../components/EvidenceDetails";
import { FormikProvider, useFormik } from "formik";
import ArrowIcon from "../components/Icons/ArrowIcon";
import AddParticipants from "../components/AddParticipants";
import ArrowLeftIcon from "../components/Icons/ArrowLeftIcon";

const ProgressBar = ({ step }) => {
  return (
    <Flex position={"fixed"} right={"10"} gap={3}>
      <Stack h={"100vh"} gap={"1.4rem"}>
        <Box
          h={"15%"}
          rounded={"full"}
          width={"0.5rem"}
          bg={
            "linear-gradient(271deg, #D219FE 1.09%, rgba(220, 77, 254, 0.98) 25.47%, rgba(63, 0, 251, 0.94) 107.56%)"
          }
        />
        <Box
          h={"60%"}
          rounded={"full"}
          width={"0.5rem"}
          bg={
            "linear-gradient(271deg, #D219FE 1.09%, rgba(220, 77, 254, 0.98) 25.47%, rgba(63, 0, 251, 0.94) 107.56%)"
          }
        />
      </Stack>
      <Stack gap={4}>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          rounded={"full"}
          bg={
            "linear-gradient(271deg, #D219FE 1.09%, rgba(220, 77, 254, 0.98) 25.47%, rgba(63, 0, 251, 0.94) 107.56%)"
          }
          w={"3rem"}
          h={"3rem"}
          position={"relative"}
        >
          <Flex
            bg={"primarydark"}
            w={"2.9rem"}
            h={"2.9rem"}
            rounded={"full"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"absolute"}
          >
            <Text color={"white"}>1</Text>
          </Flex>
        </Flex>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          rounded={"full"}
          bg={
            step === 1
              ? "linear-gradient(271deg, #D219FE 1.09%, rgba(220, 77, 254, 0.98) 25.47%, rgba(63, 0, 251, 0.94) 107.56%)"
              : "textsecondary"
          }
          w={"3rem"}
          h={"3rem"}
          position={"relative"}
        >
          <Flex
            bg={"primarydark"}
            w={"2.9rem"}
            h={"2.9rem"}
            rounded={"full"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"absolute"}
          >
            <Text color={"white"}>2</Text>
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  );
};

enum NEWCASESTEPS {
  CASE_DETAILS,
  EVIDENCE_DETAILS,
}

const NewCase = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [step, setStep] = useState(NEWCASESTEPS.CASE_DETAILS);
  const formik = useFormik({
    initialValues: {
      case_number: "",
      current_date: "",
      date_of_logging: "",
      collected_by: "",
      scene_location: "",
      storage_location: "",
      evidence_type: "",
      evidence_desc: "",
      file: "",
      participants: [],
    },
    validationSchema: "",

    onSubmit: (values) => {
      switch (step) {
        case NEWCASESTEPS.CASE_DETAILS:
          handleValidation([
            "case_number",
            "current_date",
            "date_of_logging",
            "collected_by",
            "scene_location",
            "storage_location",
          ]) && setStep(NEWCASESTEPS.EVIDENCE_DETAILS);
          break;

        case NEWCASESTEPS.EVIDENCE_DETAILS:
          handleValidation([
            "evidence_type",
            "evidence_desc",
            "file",
            "participants",
          ]) && console.log({ values });

        default:
          break;
      }
    },
  });

  const handleValidation = (fields) => {
    let all_valid = true;
    fields.forEach((field) => {
      formik.validateField(field);
      if (formik.errors[field]) {
        formik.setFieldTouched(field);
        all_valid = false;
      }
    });

    return all_valid;
  };

  return (
    <>
      <Flex bg={"primarydark"} px={"4rem"} pt={"8rem"}>
        <FormikProvider value={formik}>
          <form id={"case-form"} onSubmit={formik.handleSubmit}>
            {step === NEWCASESTEPS.CASE_DETAILS && (
              <CaseDetails formik={formik} />
            )}
            {step === NEWCASESTEPS.EVIDENCE_DETAILS && (
              <EvidenceDetails onOpen={onOpen} />
            )}
            <Flex
              mt={"4.38rem"}
              alignItems={"center"}
              justifyContent={
                step === NEWCASESTEPS.EVIDENCE_DETAILS
                  ? "space-between"
                  : "flex-end"
              }
            >
              {step === NEWCASESTEPS.EVIDENCE_DETAILS && (
                <BrandButton
                  text={"Previous"}
                  w={"11.1875rem"}
                  onClick={() => setStep(NEWCASESTEPS.CASE_DETAILS)}
                  isReverse
                  Icon={ArrowLeftIcon}
                />
              )}
              <BrandButton
                type={"submit"}
                text={"Next"}
                w={"11.1875rem"}
                Icon={ArrowIcon}
              />
            </Flex>
          </form>
        </FormikProvider>
        <ProgressBar step={step} />
      </Flex>
      <AddParticipants onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default NewCase;
