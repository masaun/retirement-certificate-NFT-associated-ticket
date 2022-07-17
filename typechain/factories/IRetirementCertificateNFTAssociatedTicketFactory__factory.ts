/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IRetirementCertificateNFTAssociatedTicketFactory,
  IRetirementCertificateNFTAssociatedTicketFactoryInterface,
} from "../IRetirementCertificateNFTAssociatedTicketFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract RetirementCertificateNFTAssociatedTicket",
        name: "retirementCertificateNFTAssociatedTicket",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ticketTypes",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "mintAmounts",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "contract IRetirementCertificateNFT",
        name: "retirementCertificateNFT",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string",
      },
      {
        indexed: false,
        internalType: "contract ITicketManager",
        name: "ticketManager",
        type: "address",
      },
    ],
    name: "BatchRetirementCertificateNFTAssociatedTicketCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract RetirementCertificateNFTAssociatedTicket",
        name: "retirementCertificateNFTAssociatedTicket",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ticketType",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mintAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "contract IRetirementCertificateNFT",
        name: "retirementCertificateNFT",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string",
      },
      {
        indexed: false,
        internalType: "contract ITicketManager",
        name: "ticketManager",
        type: "address",
      },
    ],
    name: "RetirementCertificateNFTAssociatedTicketCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ticketTypes",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "mintAmounts",
        type: "uint256[]",
      },
      {
        internalType: "contract IRetirementCertificateNFT",
        name: "retirementCertificateNFT",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "createBatchRetirementCertificateNFTAssociatedTicket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "ticketType",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "mintAmount",
        type: "uint256",
      },
      {
        internalType: "contract IRetirementCertificateNFT",
        name: "retirementCertificateNFT",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "createRetirementCertificateNFTAssociatedTicket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IRetirementCertificateNFTAssociatedTicketFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IRetirementCertificateNFTAssociatedTicketFactoryInterface {
    return new utils.Interface(
      _abi
    ) as IRetirementCertificateNFTAssociatedTicketFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRetirementCertificateNFTAssociatedTicketFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IRetirementCertificateNFTAssociatedTicketFactory;
  }
}
