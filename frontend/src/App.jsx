"use client";

import { Text } from "@chakra-ui/react";
import { configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'


// import Artifact from "../../backend/artifacts/contracts/ChainOfCustody.sol/ChainOfCustody.json"; // artifacts generated from the deploy script
// import { ethers } from "ethers";

// const contractAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

// import { useToast } from "@chakra-ui/react";

export default function App() {
  // const toast = useToast();
  // const [step, setStep] = useState(1);
  // const [progress, setProgress] = useState(33.33);
  // const [selectedAddress, setSelectedAddress] = useState();
  // const [Cm, setCm] = useState();

  // const connectWallet = async () => {
  //   // `ethereum` property is injected by Metamask to the global object
  //   // This helps to interact with wallet accounts, balances, connections, etc
  //   const [selectedAddress] = await window.ethereum.request({
  //     method: "eth_requestAccounts", // get the currently connected address
  //   });
  //   setSelectedAddress(selectedAddress);

  //   // provider provides a read-only abstraction of the blockchain
  //   // it provides read-only access to contract, block, and network data
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   // the signer is required, so that the transactions are done on behalf of
  //   // the selected address. `ethers.Contract` returns a `Contract` object
  //   // that is used to call the available functions in the smart contract
  //   const cm = new ethers.Contract(
  //     contractAddress.CM, // contract address
  //     Artifact.abi, // contract abi (meta-data)
  //     provider.getSigner(0) // Signer object signs and sends transactions
  //   );
  //   setCm(cm);
  // };

  // we want to connect the wallet after page loads
  // useEffect(() => {
  //   connectWallet();
  // }, []);

  return <Text color={"white"}>Hello world</Text>;

  // return (
  //   <>
  //     {window.ethereum._state.isConnected &&
  //       window.ethereum._state.accounts.length > 0 && (
  //         <Center>
  //           <Box my={5} p={5} rounded={"md"} shadow={"md"}>
  //             <Text>Connected to metamask: {selectedAddress}</Text>
  //           </Box>
  //         </Center>
  //       )}
  //     <Box
  //       borderWidth="1px"
  //       rounded="lg"
  //       shadow="1px 1px 3px rgba(0,0,0,0.3)"
  //       maxWidth={800}
  //       p={6}
  //       m="10px auto"
  //       as="form"
  //     >
  //       <Progress
  //         hasStripe
  //         value={progress}
  //         mb="5%"
  //         mx="5%"
  //         isAnimated
  //       ></Progress>
  //       {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
  //       <ButtonGroup mt="5%" w="100%">
  //         <Flex w="100%" justifyContent="space-between">
  //           <Flex>
  //             <Button
  //               onClick={() => {
  //                 setStep(step - 1);
  //                 setProgress(progress - 33.33);
  //               }}
  //               isDisabled={step === 1}
  //               colorScheme="teal"
  //               variant="solid"
  //               w="7rem"
  //               mr="5%"
  //             >
  //               Back
  //             </Button>
  //             <Button
  //               w="7rem"
  //               isDisabled={step === 3}
  //               onClick={() => {
  //                 setStep(step + 1);
  //                 if (step === 3) {
  //                   setProgress(100);
  //                 } else {
  //                   setProgress(progress + 33.33);
  //                 }
  //               }}
  //               colorScheme="teal"
  //               variant="outline"
  //             >
  //               Next
  //             </Button>
  //           </Flex>
  //           {step === 3 ? (
  //             <Button
  //               w="7rem"
  //               colorScheme="red"
  //               variant="solid"
  //               onClick={() => {
  //                 toast({
  //                   title: "Account created.",
  //                   description: "We've created your account for you.",
  //                   status: "success",
  //                   duration: 3000,
  //                   isClosable: true,
  //                 });
  //               }}
  //             >
  //               Submit
  //             </Button>
  //           ) : null}
  //         </Flex>
  //       </ButtonGroup>
  //     </Box>
  //   </>
  // );
}
