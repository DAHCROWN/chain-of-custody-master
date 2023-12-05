import { useContractRead } from 'wagmi'
import {abi} from '../helpers/constants'
import { useAccount } from 'wagmi'

export async function CreateUser(){
    
}

export async function FetchUserDetails(){
    const { address} = useAccount()
    const {data} = useContractRead({
        address: '0xbc3cE25C72A7DCD1c0Cddf77B6419bef3a3BAa96',
        abi: abi,
        functionName: 'findUser',
        args: [address]
      })
      console.log("data", data)
      return (data)
}

export async function FetchUserCustodyList(){
    const { address} = useAccount()
    const {data} = useContractRead({
        address: '0xbc3cE25C72A7DCD1c0Cddf77B6419bef3a3BAa96',
        abi: abi,
        functionName: 'findUser',
        args: [address]
      })
      console.log("data", data)
      return (data)
}

export async function FindLatestId(){
    const { data, isError, isLoading, error } = useContractRead({
        address: '0xbc3cE25C72A7DCD1c0Cddf77B6419bef3a3BAa96',
        abi: abi,
        functionName: 'custodyCounter'
      })
    return data
}

export async function FetchIdDetails(id){
    const {data} = useContractRead({
        address: '0xbc3cE25C72A7DCD1c0Cddf77B6419bef3a3BAa96',
        abi: abi,
        functionName: 'cases',
        args: [id]
      })
    return data
    
}

export async function FetchCustodyList(){
    let custodyList = [];
    const latestCounter = FindLatestId()
    console.log("latest num:", latestCounter)

    for (let index = 0; index < latestCounter; index++) {
        const element = FetchIdDetails(index);
        custodyList.push(element)
        
    }

    return (custodyList)
}