/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ITicketManager,
  ITicketManagerInterface,
} from "../ITicketManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IRetirementCertificateNFT",
        name: "retirementCertificateNFT",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenIdOfRetirementCertificateNFT",
        type: "uint256",
      },
    ],
    name: "checkWhetherRetirementCertificateNFTAssociatedTicketHasAlreadyBeenRedeemedOrNot",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IRetirementCertificateNFT",
        name: "retirementCertificateNFT",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "tokenIdOfRetirementCertificateNFTs",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "ticketTypes",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "numberOfTickets",
        type: "uint256[]",
      },
    ],
    name: "claimBatchRetirementCertificateNFTAssociatedTicket",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IRetirementCertificateNFT",
        name: "retirementCertificateNFT",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenIdOfRetirementCertificateNFT",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ticketType",
        type: "uint256",
      },
    ],
    name: "claimRetirementCertificateNFTAssociatedTicket",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ITicketManager__factory {
  static readonly abi = _abi;
  static createInterface(): ITicketManagerInterface {
    return new utils.Interface(_abi) as ITicketManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITicketManager {
    return new Contract(address, _abi, signerOrProvider) as ITicketManager;
  }
}
