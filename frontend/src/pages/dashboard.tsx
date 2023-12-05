import {
  Box,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import BrandButton from "../components/BrandButton";
import AddIcon from "../components/Icons/AddIcon";
import { useNavigate } from "react-router-dom";
import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { FetchCustodyList, FetchUserDetails } from '../../helpers/fetch'

const Dashboard = () => {
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const navigate = useNavigate()

  const user: any = FetchUserDetails();
  const something : any = FetchCustodyList();
  console.log("user", user)
  console.log("full list", something)

  
  //exit is wallet not connected
  if (!isConnected){
    return (
      <div>
        <button className="" onClick={() => connect()}>Connect Wallet</button>
      </div>
    )
  }

  //exit to register is without account
  if (user.fullname){
    console.log("redirecting to registration")
    navigate('/register')
  }
 
  return (
    <Box bg={"primarydark"} px={"4rem"} pt={"8rem"}>
      <Flex>
        <Stack>
          <Text
            color={"white"}
            fontSize={"2.5rem"}
            fontWeight={"bold"}
            lineHeight={"3.4375rem"}
            fontFamily={"aldrich"}
          >
            Welcome, Officer Jennifer
          </Text>
          <Text
            color={"#CCC"}
            fontFamily={"inter"}
            fontSize={"1.2rem"}
            fontStyle={"normal"}
            fontWeight={"400"}
          >
            Effortlessly track, organize, and secure your cases on our intuitive
            platform.
          </Text>
        </Stack>
      </Flex>
      <Flex justifyContent={"flex-end"}>
        <BrandButton
          onClick={() => {
            navigate("/new-case");
          }}
          text={"Add a new case"}
          Icon={AddIcon}
          w={"13.3125rem"}
          h={"2.75rem"}
        />
      </Flex>
      <TableContainer mt={10}>
        <Table variant="simple">
          <Thead>
            <Tr color={"textsecondary"}>
              <Th color={"textsecondary"}>Case Number</Th>
              <Th color={"textsecondary"}>Date</Th>
              <Th color={"textsecondary"}>Collected by</Th>
              <Th color={"textsecondary"}>Scene Location</Th>
              <Th color={"textsecondary"}>Storage Location</Th>
              <Th color={"textsecondary"}>Evidence Type</Th>
            </Tr>
          </Thead>
          <Tbody border={"none"}>
            {[1, 2, 3].map((item) => (
              <Tr
                onClick={() => navigate(`/cases/${item}`)}
                borderBottom={"none"}
                color={"textsecondary"}
                cursor={"pointer"}
                _hover={{ color: "textsecondarylight" }}
              >
                <Td>#102384</Td>
                <Td>12 |04| 2023</Td>
                <Td>Officer Jennifer Francis</Td>
                <Td>Minna</Td>
                <Td>Minna</Td>
                <Td>Picture</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Dashboard;
