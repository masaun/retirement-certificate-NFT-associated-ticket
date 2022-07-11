/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockRetirementNFTAssociatedTicketGatedService,
  MockRetirementNFTAssociatedTicketGatedServiceInterface,
} from "../MockRetirementNFTAssociatedTicketGatedService";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "contract RetirementNFTAssociatedTicket",
        name: "retirementNFTAssociatedTicket",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "ticketType",
        type: "uint256",
      },
    ],
    name: "accessSpecialContent",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b506105b8806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063040f607114610030575b600080fd5b61004a6004803603810190610045919061026c565b610060565b604051610057919061038b565b60405180910390f35b6000338383600082905060008173ffffffffffffffffffffffffffffffffffffffff1662fdd58e86856040518363ffffffff1660e01b81526004016100a6929190610362565b60206040518083038186803b1580156100be57600080fd5b505afa1580156100d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100f691906102ac565b90506000811161013b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610132906103d6565b60405180910390fd5b61015d6040518060600160405280602a8152602001610559602a913933610168565b505050505092915050565b610200828260405160240161017e9291906103a6565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610204565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60008135905061023c8161052a565b92915050565b60008135905061025181610541565b92915050565b60008151905061026681610541565b92915050565b600080604083850312156102835761028261049f565b5b60006102918582860161022d565b92505060206102a285828601610242565b9150509250929050565b6000602082840312156102c2576102c161049f565b5b60006102d084828501610257565b91505092915050565b6102e281610412565b82525050565b6102f181610424565b82525050565b6000610302826103f6565b61030c8185610401565b935061031c81856020860161046c565b610325816104a4565b840191505092915050565b600061033d604483610401565b9150610348826104b5565b606082019050919050565b61035c81610462565b82525050565b600060408201905061037760008301856102d9565b6103846020830184610353565b9392505050565b60006020820190506103a060008301846102e8565b92915050565b600060408201905081810360008301526103c081856102f7565b90506103cf60208301846102d9565b9392505050565b600060208201905081810360008301526103ef81610330565b9050919050565b600081519050919050565b600082825260208201905092915050565b600061041d82610442565b9050919050565b60008115159050919050565b600061043b82610412565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b8381101561048a57808201518184015260208101905061046f565b83811115610499576000848401525b50505050565b600080fd5b6000601f19601f8301169050919050565b7f412063616c6c65722073686f756c6420686173206d6f7265207468616e20312060008201527f6f6620746865205265746972656d656e744e46544173736f636961746564546960208201527f636b657400000000000000000000000000000000000000000000000000000000604082015250565b61053381610430565b811461053e57600080fd5b50565b61054a81610462565b811461055557600080fd5b5056fe2573206973207375636365737366756c20746f20616363657373207370656369616c20636f6e74656e74a2646970667358221220be7579eb11bd4d921b687592a77dfbef532dc07eb11be56fa23159c9d4e9ed4464736f6c63430008070033";

type MockRetirementNFTAssociatedTicketGatedServiceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockRetirementNFTAssociatedTicketGatedServiceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockRetirementNFTAssociatedTicketGatedService__factory extends ContractFactory {
  constructor(
    ...args: MockRetirementNFTAssociatedTicketGatedServiceConstructorParams
  ) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MockRetirementNFTAssociatedTicketGatedService";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockRetirementNFTAssociatedTicketGatedService> {
    return super.deploy(
      overrides || {}
    ) as Promise<MockRetirementNFTAssociatedTicketGatedService>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockRetirementNFTAssociatedTicketGatedService {
    return super.attach(
      address
    ) as MockRetirementNFTAssociatedTicketGatedService;
  }
  connect(
    signer: Signer
  ): MockRetirementNFTAssociatedTicketGatedService__factory {
    return super.connect(
      signer
    ) as MockRetirementNFTAssociatedTicketGatedService__factory;
  }
  static readonly contractName: "MockRetirementNFTAssociatedTicketGatedService";
  public readonly contractName: "MockRetirementNFTAssociatedTicketGatedService";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockRetirementNFTAssociatedTicketGatedServiceInterface {
    return new utils.Interface(
      _abi
    ) as MockRetirementNFTAssociatedTicketGatedServiceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockRetirementNFTAssociatedTicketGatedService {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockRetirementNFTAssociatedTicketGatedService;
  }
}
