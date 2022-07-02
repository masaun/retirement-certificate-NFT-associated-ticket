/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BytesLike,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RandomNumberGeneratorV2,
  RandomNumberGeneratorV2Interface,
} from "../RandomNumberGeneratorV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint64",
        name: "subscriptionId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "vrfCoordinator",
        type: "address",
      },
      {
        internalType: "address",
        name: "link",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "keyHash",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "have",
        type: "address",
      },
      {
        internalType: "address",
        name: "want",
        type: "address",
      },
    ],
    name: "OnlyCoordinatorCanFulfill",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "ReturnedRandomness",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "rawFulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "requestRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "s_randomWords",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "s_requestId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x610180604052620186a063ffffffff166101209063ffffffff1660e01b815250600361ffff166101409061ffff1660f01b815250600263ffffffff166101609063ffffffff1660e01b8152503480156200005857600080fd5b5060405162000c2238038062000c2283398181016040528101906200007e9190620001dd565b828073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b81525050508273ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508173ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1660601b8152505080610100818152505033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508367ffffffffffffffff1660e08167ffffffffffffffff1660c01b8152505050505050620002f4565b600081519050620001a981620002a6565b92915050565b600081519050620001c081620002c0565b92915050565b600081519050620001d781620002da565b92915050565b60008060008060808587031215620001fa57620001f9620002a1565b5b60006200020a87828801620001c6565b94505060206200021d8782880162000198565b9350506040620002308782880162000198565b92505060606200024387828801620001af565b91505092959194509250565b60006200025c826200026d565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600067ffffffffffffffff82169050919050565b600080fd5b620002b1816200024f565b8114620002bd57600080fd5b50565b620002cb8162000263565b8114620002d757600080fd5b50565b620002e5816200028d565b8114620002f157600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160c01c610100516101205160e01c6101405160f01c6101605160e01c6108b06200037260003960006102470152600061020501526000610226015260006101c3015260006101e4015260005050600061018701526000818160c7015261011b01526108b06000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80631fe543e314610051578063e0c862891461006d578063e89e106a14610077578063f6eaffc814610095575b600080fd5b61006b600480360381019061006691906104e8565b6100c5565b005b610075610185565b005b61007f6102e0565b60405161008c91906106c1565b60405180910390f35b6100af60048036038101906100aa919061048e565b6102e6565b6040516100bc91906106c1565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461017757337f00000000000000000000000000000000000000000000000000000000000000006040517f1cf993f400000000000000000000000000000000000000000000000000000000815260040161016e929190610623565b60405180910390fd5b610181828261030a565b5050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635d3b1d307f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006040518663ffffffff1660e01b815260040161028695949392919061066e565b602060405180830381600087803b1580156102a057600080fd5b505af11580156102b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d891906104bb565b600181905550565b60015481565b600081815481106102f657600080fd5b906000526020600020016000915090505481565b806000908051906020019061032092919061035c565b507fefb16d61046900da527008568620fb9f8420e2f5ed4de3bfbded5035c9362b0e81604051610350919061064c565b60405180910390a15050565b828054828255906000526020600020908101928215610398579160200282015b8281111561039757825182559160200191906001019061037c565b5b5090506103a591906103a9565b5090565b5b808211156103c25760008160009055506001016103aa565b5090565b60006103d96103d484610701565b6106dc565b905080838252602082019050828560208602820111156103fc576103fb610843565b5b60005b8581101561042c57816104128882610464565b8452602084019350602083019250506001810190506103ff565b5050509392505050565b600082601f83011261044b5761044a61083e565b5b813561045b8482602086016103c6565b91505092915050565b60008135905061047381610863565b92915050565b60008151905061048881610863565b92915050565b6000602082840312156104a4576104a361084d565b5b60006104b284828501610464565b91505092915050565b6000602082840312156104d1576104d061084d565b5b60006104df84828501610479565b91505092915050565b600080604083850312156104ff576104fe61084d565b5b600061050d85828601610464565b925050602083013567ffffffffffffffff81111561052e5761052d610848565b5b61053a85828601610436565b9150509250929050565b600061055083836105e7565b60208301905092915050565b61056581610766565b82525050565b60006105768261073d565b6105808185610755565b935061058b8361072d565b8060005b838110156105bc5781516105a38882610544565b97506105ae83610748565b92505060018101905061058f565b5085935050505092915050565b6105d281610778565b82525050565b6105e181610782565b82525050565b6105f0816107b0565b82525050565b6105ff816107b0565b82525050565b61060e816107ba565b82525050565b61061d816107ca565b82525050565b6000604082019050610638600083018561055c565b610645602083018461055c565b9392505050565b60006020820190508181036000830152610666818461056b565b905092915050565b600060a08201905061068360008301886105c9565b6106906020830187610614565b61069d60408301866105d8565b6106aa6060830185610605565b6106b76080830184610605565b9695505050505050565b60006020820190506106d660008301846105f6565b92915050565b60006106e66106f7565b90506106f282826107de565b919050565b6000604051905090565b600067ffffffffffffffff82111561071c5761071b61080f565b5b602082029050602081019050919050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600061077182610790565b9050919050565b6000819050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600067ffffffffffffffff82169050919050565b6107e782610852565b810181811067ffffffffffffffff821117156108065761080561080f565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b61086c816107b0565b811461087757600080fd5b5056fea2646970667358221220be84c77982714873401f1a5650a50ba6024f3bf11ba2cd6dc51f70e27bafa95e64736f6c63430008070033";

type RandomNumberGeneratorV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RandomNumberGeneratorV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RandomNumberGeneratorV2__factory extends ContractFactory {
  constructor(...args: RandomNumberGeneratorV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "RandomNumberGeneratorV2";
  }

  deploy(
    subscriptionId: BigNumberish,
    vrfCoordinator: string,
    link: string,
    keyHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RandomNumberGeneratorV2> {
    return super.deploy(
      subscriptionId,
      vrfCoordinator,
      link,
      keyHash,
      overrides || {}
    ) as Promise<RandomNumberGeneratorV2>;
  }
  getDeployTransaction(
    subscriptionId: BigNumberish,
    vrfCoordinator: string,
    link: string,
    keyHash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      subscriptionId,
      vrfCoordinator,
      link,
      keyHash,
      overrides || {}
    );
  }
  attach(address: string): RandomNumberGeneratorV2 {
    return super.attach(address) as RandomNumberGeneratorV2;
  }
  connect(signer: Signer): RandomNumberGeneratorV2__factory {
    return super.connect(signer) as RandomNumberGeneratorV2__factory;
  }
  static readonly contractName: "RandomNumberGeneratorV2";
  public readonly contractName: "RandomNumberGeneratorV2";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RandomNumberGeneratorV2Interface {
    return new utils.Interface(_abi) as RandomNumberGeneratorV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RandomNumberGeneratorV2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RandomNumberGeneratorV2;
  }
}
