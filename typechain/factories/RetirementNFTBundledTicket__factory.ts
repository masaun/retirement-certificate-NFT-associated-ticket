/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RetirementNFTBundledTicket,
  RetirementNFTBundledTicketInterface,
} from "../RetirementNFTBundledTicket";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220fce1acb998bf06d27b34d696facb78d33ee8c7985cbdc2a1aff6597401c2969864736f6c63430008070033";

type RetirementNFTBundledTicketConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RetirementNFTBundledTicketConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RetirementNFTBundledTicket__factory extends ContractFactory {
  constructor(...args: RetirementNFTBundledTicketConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "RetirementNFTBundledTicket";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RetirementNFTBundledTicket> {
    return super.deploy(overrides || {}) as Promise<RetirementNFTBundledTicket>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RetirementNFTBundledTicket {
    return super.attach(address) as RetirementNFTBundledTicket;
  }
  connect(signer: Signer): RetirementNFTBundledTicket__factory {
    return super.connect(signer) as RetirementNFTBundledTicket__factory;
  }
  static readonly contractName: "RetirementNFTBundledTicket";
  public readonly contractName: "RetirementNFTBundledTicket";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RetirementNFTBundledTicketInterface {
    return new utils.Interface(_abi) as RetirementNFTBundledTicketInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RetirementNFTBundledTicket {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RetirementNFTBundledTicket;
  }
}
