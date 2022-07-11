/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Events, EventsInterface } from "../Events";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract RetirementNFTAssociatedTicket",
        name: "retirementNFTAssociatedTicket",
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
        internalType: "contract IRetirementNFT",
        name: "retirementNFT",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "BatchRetirementNFTAssociatedTicketCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract RetirementNFTAssociatedTicket",
        name: "retirementNFTAssociatedTicket",
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
        internalType: "contract IRetirementNFT",
        name: "retirementNFT",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "RetirementNFTAssociatedTicketCreated",
    type: "event",
  },
];

const _bytecode =
  "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220162566fc9540a1624717296dd035344d8fdfe1c99ec83d7cdd418e2f0adf221264736f6c63430008070033";

type EventsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EventsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Events__factory extends ContractFactory {
  constructor(...args: EventsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Events";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Events> {
    return super.deploy(overrides || {}) as Promise<Events>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Events {
    return super.attach(address) as Events;
  }
  connect(signer: Signer): Events__factory {
    return super.connect(signer) as Events__factory;
  }
  static readonly contractName: "Events";
  public readonly contractName: "Events";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EventsInterface {
    return new utils.Interface(_abi) as EventsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Events {
    return new Contract(address, _abi, signerOrProvider) as Events;
  }
}
