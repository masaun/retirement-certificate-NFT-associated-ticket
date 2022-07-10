/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IRetirementNFT,
  IRetirementNFTInterface,
} from "../IRetirementNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mintNewRetirementNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "walletAddress",
        type: "address",
      },
    ],
    name: "retirementNFTBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "_balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "retirementNFTOwnerOf",
    outputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IRetirementNFT__factory {
  static readonly abi = _abi;
  static createInterface(): IRetirementNFTInterface {
    return new utils.Interface(_abi) as IRetirementNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRetirementNFT {
    return new Contract(address, _abi, signerOrProvider) as IRetirementNFT;
  }
}
