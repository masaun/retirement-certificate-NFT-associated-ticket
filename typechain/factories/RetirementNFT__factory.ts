/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RetirementNFT, RetirementNFTInterface } from "../RetirementNFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
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
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
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
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
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
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600e81526020017f5265746972656d656e74204e46540000000000000000000000000000000000008152506040518060400160405280600481526020017f524e46540000000000000000000000000000000000000000000000000000000081525081600090805190602001906200009692919062000232565b508060019080519060200190620000af92919062000232565b505050620000c76000801b33620000cd60201b60201c565b62000347565b620000df8282620001bf60201b60201c565b620001bb5760016006600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620001606200022a60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b60006006600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b8280546200024090620002e2565b90600052602060002090601f016020900481019282620002645760008555620002b0565b82601f106200027f57805160ff1916838001178555620002b0565b82800160010185558215620002b0579182015b82811115620002af57825182559160200191906001019062000292565b5b509050620002bf9190620002c3565b5090565b5b80821115620002de576000816000905550600101620002c4565b5090565b60006002820490506001821680620002fb57607f821691505b6020821081141562000312576200031162000318565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b612fdc80620003576000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806370a08231116100ad578063b0ae50c911610071578063b0ae50c914610353578063b88d4fde1461036f578063c87b56dd1461038b578063d547741f146103bb578063e985e9c5146103d75761012c565b806370a082311461029b57806391d14854146102cb57806395d89b41146102fb578063a217fddf14610319578063a22cb465146103375761012c565b8063248a9ca3116100f4578063248a9ca3146101e75780632f2ff15d1461021757806336568abe1461023357806342842e0e1461024f5780636352211e1461026b5761012c565b806301ffc9a71461013157806306fdde0314610161578063081812fc1461017f578063095ea7b3146101af57806323b872dd146101cb575b600080fd5b61014b600480360381019061014691906120cc565b610407565b6040516101589190612504565b60405180910390f35b610169610419565b604051610176919061253a565b60405180910390f35b61019960048036038101906101949190612126565b6104ab565b6040516101a6919061249d565b60405180910390f35b6101c960048036038101906101c4919061201f565b6104f1565b005b6101e560048036038101906101e09190611f09565b610609565b005b61020160048036038101906101fc919061205f565b610669565b60405161020e919061251f565b60405180910390f35b610231600480360381019061022c919061208c565b610689565b005b61024d6004803603810190610248919061208c565b6106aa565b005b61026960048036038101906102649190611f09565b61072d565b005b61028560048036038101906102809190612126565b61074d565b604051610292919061249d565b60405180910390f35b6102b560048036038101906102b09190611e9c565b6107ff565b6040516102c291906126fc565b60405180910390f35b6102e560048036038101906102e0919061208c565b6108b7565b6040516102f29190612504565b60405180910390f35b610303610922565b604051610310919061253a565b60405180910390f35b6103216109b4565b60405161032e919061251f565b60405180910390f35b610351600480360381019061034c9190611fdf565b6109bb565b005b61036d6004803603810190610368919061201f565b6109d1565b005b61038960048036038101906103849190611f5c565b6109ed565b005b6103a560048036038101906103a09190612126565b610a4f565b6040516103b2919061253a565b60405180910390f35b6103d560048036038101906103d0919061208c565b610ab7565b005b6103f160048036038101906103ec9190611ec9565b610ad8565b6040516103fe9190612504565b60405180910390f35b600061041282610b6c565b9050919050565b606060008054610428906129af565b80601f0160208091040260200160405190810160405280929190818152602001828054610454906129af565b80156104a15780601f10610476576101008083540402835291602001916104a1565b820191906000526020600020905b81548152906001019060200180831161048457829003601f168201915b5050505050905090565b60006104b682610be6565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104fc8261074d565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561056d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105649061269c565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661058c610c31565b73ffffffffffffffffffffffffffffffffffffffff1614806105bb57506105ba816105b5610c31565b610ad8565b5b6105fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f19061263c565b60405180910390fd5b6106048383610c39565b505050565b61061a610614610c31565b82610cf2565b610659576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610650906126bc565b60405180910390fd5b610664838383610d87565b505050565b600060066000838152602001908152602001600020600101549050919050565b61069282610669565b61069b81610fee565b6106a58383611002565b505050565b6106b2610c31565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461071f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610716906126dc565b60405180910390fd5b61072982826110e3565b5050565b610748838383604051806020016040528060008152506109ed565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ed9061267c565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610870576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108679061261c565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006006600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b606060018054610931906129af565b80601f016020809104026020016040519081016040528092919081815260200182805461095d906129af565b80156109aa5780601f1061097f576101008083540402835291602001916109aa565b820191906000526020600020905b81548152906001019060200180831161098d57829003601f168201915b5050505050905090565b6000801b81565b6109cd6109c6610c31565b83836111c5565b5050565b6000801b6109de81610fee565b6109e88383611332565b505050565b6109fe6109f8610c31565b83610cf2565b610a3d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a34906126bc565b60405180910390fd5b610a4984848484611350565b50505050565b6060610a5a82610be6565b6000610a646113ac565b90506000815111610a845760405180602001604052806000815250610aaf565b80610a8e846113c3565b604051602001610a9f92919061243f565b6040516020818303038152906040525b915050919050565b610ac082610669565b610ac981610fee565b610ad383836110e3565b505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610bdf5750610bde82611524565b5b9050919050565b610bef81611606565b610c2e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c259061267c565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610cac8361074d565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610cfe8361074d565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610d405750610d3f8185610ad8565b5b80610d7e57508373ffffffffffffffffffffffffffffffffffffffff16610d66846104ab565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610da78261074d565b73ffffffffffffffffffffffffffffffffffffffff1614610dfd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df49061259c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e64906125dc565b60405180910390fd5b610e78838383611672565b610e83600082610c39565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ed39190612891565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f2a91906127b0565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610fe9838383611677565b505050565b610fff81610ffa610c31565b61167c565b50565b61100c82826108b7565b6110df5760016006600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611084610c31565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6110ed82826108b7565b156111c15760006006600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611166610c31565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611234576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161122b906125fc565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516113259190612504565b60405180910390a3505050565b61134c828260405180602001604052806000815250611719565b5050565b61135b848484610d87565b61136784848484611774565b6113a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161139d9061257c565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b6060600082141561140b576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061151f565b600082905060005b6000821461143d57808061142690612a12565b915050600a826114369190612806565b9150611413565b60008167ffffffffffffffff81111561145957611458612b48565b5b6040519080825280601f01601f19166020018201604052801561148b5781602001600182028036833780820191505090505b5090505b60008514611518576001826114a49190612891565b9150600a856114b39190612a5b565b60306114bf91906127b0565b60f81b8183815181106114d5576114d4612b19565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856115119190612806565b945061148f565b8093505050505b919050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806115ef57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806115ff57506115fe8261190b565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b61168682826108b7565b611715576116ab8173ffffffffffffffffffffffffffffffffffffffff166014611975565b6116b98360001c6020611975565b6040516020016116ca929190612463565b6040516020818303038152906040526040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161170c919061253a565b60405180910390fd5b5050565b6117238383611bb1565b6117306000848484611774565b61176f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117669061257c565b60405180910390fd5b505050565b60006117958473ffffffffffffffffffffffffffffffffffffffff16611d8b565b156118fe578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026117be610c31565b8786866040518563ffffffff1660e01b81526004016117e094939291906124b8565b602060405180830381600087803b1580156117fa57600080fd5b505af192505050801561182b57506040513d601f19601f8201168201806040525081019061182891906120f9565b60015b6118ae573d806000811461185b576040519150601f19603f3d011682016040523d82523d6000602084013e611860565b606091505b506000815114156118a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161189d9061257c565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611903565b600190505b949350505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6060600060028360026119889190612837565b61199291906127b0565b67ffffffffffffffff8111156119ab576119aa612b48565b5b6040519080825280601f01601f1916602001820160405280156119dd5781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611a1557611a14612b19565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110611a7957611a78612b19565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006001846002611ab99190612837565b611ac391906127b0565b90505b6001811115611b63577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110611b0557611b04612b19565b5b1a60f81b828281518110611b1c57611b1b612b19565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c945080611b5c90612985565b9050611ac6565b5060008414611ba7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b9e9061255c565b60405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611c21576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c189061265c565b60405180910390fd5b611c2a81611606565b15611c6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c61906125bc565b60405180910390fd5b611c7660008383611672565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611cc691906127b0565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611d8760008383611677565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000611dc1611dbc8461273c565b612717565b905082815260208101848484011115611ddd57611ddc612b7c565b5b611de8848285612943565b509392505050565b600081359050611dff81612f33565b92915050565b600081359050611e1481612f4a565b92915050565b600081359050611e2981612f61565b92915050565b600081359050611e3e81612f78565b92915050565b600081519050611e5381612f78565b92915050565b600082601f830112611e6e57611e6d612b77565b5b8135611e7e848260208601611dae565b91505092915050565b600081359050611e9681612f8f565b92915050565b600060208284031215611eb257611eb1612b86565b5b6000611ec084828501611df0565b91505092915050565b60008060408385031215611ee057611edf612b86565b5b6000611eee85828601611df0565b9250506020611eff85828601611df0565b9150509250929050565b600080600060608486031215611f2257611f21612b86565b5b6000611f3086828701611df0565b9350506020611f4186828701611df0565b9250506040611f5286828701611e87565b9150509250925092565b60008060008060808587031215611f7657611f75612b86565b5b6000611f8487828801611df0565b9450506020611f9587828801611df0565b9350506040611fa687828801611e87565b925050606085013567ffffffffffffffff811115611fc757611fc6612b81565b5b611fd387828801611e59565b91505092959194509250565b60008060408385031215611ff657611ff5612b86565b5b600061200485828601611df0565b925050602061201585828601611e05565b9150509250929050565b6000806040838503121561203657612035612b86565b5b600061204485828601611df0565b925050602061205585828601611e87565b9150509250929050565b60006020828403121561207557612074612b86565b5b600061208384828501611e1a565b91505092915050565b600080604083850312156120a3576120a2612b86565b5b60006120b185828601611e1a565b92505060206120c285828601611df0565b9150509250929050565b6000602082840312156120e2576120e1612b86565b5b60006120f084828501611e2f565b91505092915050565b60006020828403121561210f5761210e612b86565b5b600061211d84828501611e44565b91505092915050565b60006020828403121561213c5761213b612b86565b5b600061214a84828501611e87565b91505092915050565b61215c816128c5565b82525050565b61216b816128d7565b82525050565b61217a816128e3565b82525050565b600061218b8261276d565b6121958185612783565b93506121a5818560208601612952565b6121ae81612b8b565b840191505092915050565b60006121c482612778565b6121ce8185612794565b93506121de818560208601612952565b6121e781612b8b565b840191505092915050565b60006121fd82612778565b61220781856127a5565b9350612217818560208601612952565b80840191505092915050565b6000612230602083612794565b915061223b82612b9c565b602082019050919050565b6000612253603283612794565b915061225e82612bc5565b604082019050919050565b6000612276602583612794565b915061228182612c14565b604082019050919050565b6000612299601c83612794565b91506122a482612c63565b602082019050919050565b60006122bc602483612794565b91506122c782612c8c565b604082019050919050565b60006122df601983612794565b91506122ea82612cdb565b602082019050919050565b6000612302602983612794565b915061230d82612d04565b604082019050919050565b6000612325603e83612794565b915061233082612d53565b604082019050919050565b6000612348602083612794565b915061235382612da2565b602082019050919050565b600061236b601883612794565b915061237682612dcb565b602082019050919050565b600061238e602183612794565b915061239982612df4565b604082019050919050565b60006123b16017836127a5565b91506123bc82612e43565b601782019050919050565b60006123d4602e83612794565b91506123df82612e6c565b604082019050919050565b60006123f76011836127a5565b915061240282612ebb565b601182019050919050565b600061241a602f83612794565b915061242582612ee4565b604082019050919050565b61243981612939565b82525050565b600061244b82856121f2565b915061245782846121f2565b91508190509392505050565b600061246e826123a4565b915061247a82856121f2565b9150612485826123ea565b915061249182846121f2565b91508190509392505050565b60006020820190506124b26000830184612153565b92915050565b60006080820190506124cd6000830187612153565b6124da6020830186612153565b6124e76040830185612430565b81810360608301526124f98184612180565b905095945050505050565b60006020820190506125196000830184612162565b92915050565b60006020820190506125346000830184612171565b92915050565b6000602082019050818103600083015261255481846121b9565b905092915050565b6000602082019050818103600083015261257581612223565b9050919050565b6000602082019050818103600083015261259581612246565b9050919050565b600060208201905081810360008301526125b581612269565b9050919050565b600060208201905081810360008301526125d58161228c565b9050919050565b600060208201905081810360008301526125f5816122af565b9050919050565b60006020820190508181036000830152612615816122d2565b9050919050565b60006020820190508181036000830152612635816122f5565b9050919050565b6000602082019050818103600083015261265581612318565b9050919050565b600060208201905081810360008301526126758161233b565b9050919050565b600060208201905081810360008301526126958161235e565b9050919050565b600060208201905081810360008301526126b581612381565b9050919050565b600060208201905081810360008301526126d5816123c7565b9050919050565b600060208201905081810360008301526126f58161240d565b9050919050565b60006020820190506127116000830184612430565b92915050565b6000612721612732565b905061272d82826129e1565b919050565b6000604051905090565b600067ffffffffffffffff82111561275757612756612b48565b5b61276082612b8b565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006127bb82612939565b91506127c683612939565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156127fb576127fa612a8c565b5b828201905092915050565b600061281182612939565b915061281c83612939565b92508261282c5761282b612abb565b5b828204905092915050565b600061284282612939565b915061284d83612939565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561288657612885612a8c565b5b828202905092915050565b600061289c82612939565b91506128a783612939565b9250828210156128ba576128b9612a8c565b5b828203905092915050565b60006128d082612919565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612970578082015181840152602081019050612955565b8381111561297f576000848401525b50505050565b600061299082612939565b915060008214156129a4576129a3612a8c565b5b600182039050919050565b600060028204905060018216806129c757607f821691505b602082108114156129db576129da612aea565b5b50919050565b6129ea82612b8b565b810181811067ffffffffffffffff82111715612a0957612a08612b48565b5b80604052505050565b6000612a1d82612939565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612a5057612a4f612a8c565b5b600182019050919050565b6000612a6682612939565b9150612a7183612939565b925082612a8157612a80612abb565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b612f3c816128c5565b8114612f4757600080fd5b50565b612f53816128d7565b8114612f5e57600080fd5b50565b612f6a816128e3565b8114612f7557600080fd5b50565b612f81816128ed565b8114612f8c57600080fd5b50565b612f9881612939565b8114612fa357600080fd5b5056fea264697066735822122083c991f2e78a828b8facc7be45e0929f4fc392e0d55f36356e889d045caabb8b64736f6c63430008070033";

type RetirementNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RetirementNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RetirementNFT__factory extends ContractFactory {
  constructor(...args: RetirementNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "RetirementNFT";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RetirementNFT> {
    return super.deploy(overrides || {}) as Promise<RetirementNFT>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RetirementNFT {
    return super.attach(address) as RetirementNFT;
  }
  connect(signer: Signer): RetirementNFT__factory {
    return super.connect(signer) as RetirementNFT__factory;
  }
  static readonly contractName: "RetirementNFT";
  public readonly contractName: "RetirementNFT";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RetirementNFTInterface {
    return new utils.Interface(_abi) as RetirementNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RetirementNFT {
    return new Contract(address, _abi, signerOrProvider) as RetirementNFT;
  }
}
