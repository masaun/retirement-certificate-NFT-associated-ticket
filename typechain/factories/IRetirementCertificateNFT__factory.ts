/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IRetirementCertificateNFT,
  IRetirementCertificateNFTInterface,
} from "../IRetirementCertificateNFT";

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
    name: "mintNewRetirementCertificateNFT",
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
    name: "retirementCertificateNFTBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "_numberOfRetirementNFTs",
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
    name: "retirementCertificateNFTOwnerOf",
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

export class IRetirementCertificateNFT__factory {
  static readonly abi = _abi;
  static createInterface(): IRetirementCertificateNFTInterface {
    return new utils.Interface(_abi) as IRetirementCertificateNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRetirementCertificateNFT {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IRetirementCertificateNFT;
  }
}
