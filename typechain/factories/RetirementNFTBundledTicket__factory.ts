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
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeMint",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280601d81526020017f5265746972656d656e74204e46542062756e646c6564205469636b65740000008152506040518060400160405280601381526020017f524e46545f42554e444c45445f5449434b455400000000000000000000000000815250816000908051906020019062000096929190620001a6565b508060019080519060200190620000af929190620001a6565b505050620000d2620000c6620000d860201b60201c565b620000e060201b60201c565b620002bb565b600033905090565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001b49062000256565b90600052602060002090601f016020900481019282620001d8576000855562000224565b82601f10620001f357805160ff191683800117855562000224565b8280016001018555821562000224579182015b828111156200022357825182559160200191906001019062000206565b5b50905062000233919062000237565b5090565b5b808211156200025257600081600090555060010162000238565b5090565b600060028204905060018216806200026f57607f821691505b602082108114156200028657620002856200028c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b61287780620002cb6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063715018a6116100a2578063a22cb46511610071578063a22cb465146102a4578063b88d4fde146102c0578063c87b56dd146102dc578063e985e9c51461030c578063f2fde38b1461033c5761010b565b8063715018a6146102425780638da5cb5b1461024c57806395d89b411461026a578063a1448194146102885761010b565b806323b872dd116100de57806323b872dd146101aa57806342842e0e146101c65780636352211e146101e257806370a08231146102125761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e578063095ea7b31461018e575b600080fd5b61012a60048036038101906101259190611b08565b610358565b6040516101379190611eb1565b60405180910390f35b61014861043a565b6040516101559190611ecc565b60405180910390f35b61017860048036038101906101739190611b62565b6104cc565b6040516101859190611e4a565b60405180910390f35b6101a860048036038101906101a39190611ac8565b610512565b005b6101c460048036038101906101bf91906119b2565b61062a565b005b6101e060048036038101906101db91906119b2565b61068a565b005b6101fc60048036038101906101f79190611b62565b6106aa565b6040516102099190611e4a565b60405180910390f35b61022c60048036038101906102279190611945565b61075c565b604051610239919061208e565b60405180910390f35b61024a610814565b005b610254610828565b6040516102619190611e4a565b60405180910390f35b610272610852565b60405161027f9190611ecc565b60405180910390f35b6102a2600480360381019061029d9190611ac8565b6108e4565b005b6102be60048036038101906102b99190611a88565b6108fa565b005b6102da60048036038101906102d59190611a05565b610910565b005b6102f660048036038101906102f19190611b62565b610972565b6040516103039190611ecc565b60405180910390f35b61032660048036038101906103219190611972565b6109da565b6040516103339190611eb1565b60405180910390f35b61035660048036038101906103519190611945565b610a6e565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061042357507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610433575061043282610af2565b5b9050919050565b606060008054610449906122b3565b80601f0160208091040260200160405190810160405280929190818152602001828054610475906122b3565b80156104c25780601f10610497576101008083540402835291602001916104c2565b820191906000526020600020905b8154815290600101906020018083116104a557829003601f168201915b5050505050905090565b60006104d782610b5c565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061051d826106aa565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561058e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105859061204e565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105ad610ba7565b73ffffffffffffffffffffffffffffffffffffffff1614806105dc57506105db816105d6610ba7565b6109da565b5b61061b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061290611fce565b60405180910390fd5b6106258383610baf565b505050565b61063b610635610ba7565b82610c68565b61067a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106719061206e565b60405180910390fd5b610685838383610cfd565b505050565b6106a583838360405180602001604052806000815250610910565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610753576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074a9061202e565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156107cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c490611fae565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61081c610f64565b6108266000610fe2565b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610861906122b3565b80601f016020809104026020016040519081016040528092919081815260200182805461088d906122b3565b80156108da5780601f106108af576101008083540402835291602001916108da565b820191906000526020600020905b8154815290600101906020018083116108bd57829003601f168201915b5050505050905090565b6108ec610f64565b6108f682826110a8565b5050565b61090c610905610ba7565b83836110c6565b5050565b61092161091b610ba7565b83610c68565b610960576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109579061206e565b60405180910390fd5b61096c84848484611233565b50505050565b606061097d82610b5c565b600061098761128f565b905060008151116109a757604051806020016040528060008152506109d2565b806109b1846112a6565b6040516020016109c2929190611e26565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610a76610f64565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610ae6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610add90611f0e565b60405180910390fd5b610aef81610fe2565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610b6581611407565b610ba4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9b9061202e565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610c22836106aa565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610c74836106aa565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610cb65750610cb581856109da565b5b80610cf457508373ffffffffffffffffffffffffffffffffffffffff16610cdc846104cc565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610d1d826106aa565b73ffffffffffffffffffffffffffffffffffffffff1614610d73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6a90611f2e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610de3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dda90611f6e565b60405180910390fd5b610dee838383611473565b610df9600082610baf565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e4991906121c9565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ea09190612142565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610f5f838383611478565b505050565b610f6c610ba7565b73ffffffffffffffffffffffffffffffffffffffff16610f8a610828565b73ffffffffffffffffffffffffffffffffffffffff1614610fe0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fd79061200e565b60405180910390fd5b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6110c282826040518060200160405280600081525061147d565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611135576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161112c90611f8e565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516112269190611eb1565b60405180910390a3505050565b61123e848484610cfd565b61124a848484846114d8565b611289576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161128090611eee565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060008214156112ee576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611402565b600082905060005b6000821461132057808061130990612316565b915050600a826113199190612198565b91506112f6565b60008167ffffffffffffffff81111561133c5761133b61244c565b5b6040519080825280601f01601f19166020018201604052801561136e5781602001600182028036833780820191505090505b5090505b600085146113fb5760018261138791906121c9565b9150600a85611396919061235f565b60306113a29190612142565b60f81b8183815181106113b8576113b761241d565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856113f49190612198565b9450611372565b8093505050505b919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b611487838361166f565b61149460008484846114d8565b6114d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114ca90611eee565b60405180910390fd5b505050565b60006114f98473ffffffffffffffffffffffffffffffffffffffff16611849565b15611662578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611522610ba7565b8786866040518563ffffffff1660e01b81526004016115449493929190611e65565b602060405180830381600087803b15801561155e57600080fd5b505af192505050801561158f57506040513d601f19601f8201168201806040525081019061158c9190611b35565b60015b611612573d80600081146115bf576040519150601f19603f3d011682016040523d82523d6000602084013e6115c4565b606091505b5060008151141561160a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161160190611eee565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611667565b600190505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156116df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116d690611fee565b60405180910390fd5b6116e881611407565b15611728576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161171f90611f4e565b60405180910390fd5b61173460008383611473565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546117849190612142565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461184560008383611478565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600061187f61187a846120ce565b6120a9565b90508281526020810184848401111561189b5761189a612480565b5b6118a6848285612271565b509392505050565b6000813590506118bd816127e5565b92915050565b6000813590506118d2816127fc565b92915050565b6000813590506118e781612813565b92915050565b6000815190506118fc81612813565b92915050565b600082601f8301126119175761191661247b565b5b813561192784826020860161186c565b91505092915050565b60008135905061193f8161282a565b92915050565b60006020828403121561195b5761195a61248a565b5b6000611969848285016118ae565b91505092915050565b600080604083850312156119895761198861248a565b5b6000611997858286016118ae565b92505060206119a8858286016118ae565b9150509250929050565b6000806000606084860312156119cb576119ca61248a565b5b60006119d9868287016118ae565b93505060206119ea868287016118ae565b92505060406119fb86828701611930565b9150509250925092565b60008060008060808587031215611a1f57611a1e61248a565b5b6000611a2d878288016118ae565b9450506020611a3e878288016118ae565b9350506040611a4f87828801611930565b925050606085013567ffffffffffffffff811115611a7057611a6f612485565b5b611a7c87828801611902565b91505092959194509250565b60008060408385031215611a9f57611a9e61248a565b5b6000611aad858286016118ae565b9250506020611abe858286016118c3565b9150509250929050565b60008060408385031215611adf57611ade61248a565b5b6000611aed858286016118ae565b9250506020611afe85828601611930565b9150509250929050565b600060208284031215611b1e57611b1d61248a565b5b6000611b2c848285016118d8565b91505092915050565b600060208284031215611b4b57611b4a61248a565b5b6000611b59848285016118ed565b91505092915050565b600060208284031215611b7857611b7761248a565b5b6000611b8684828501611930565b91505092915050565b611b98816121fd565b82525050565b611ba78161220f565b82525050565b6000611bb8826120ff565b611bc28185612115565b9350611bd2818560208601612280565b611bdb8161248f565b840191505092915050565b6000611bf18261210a565b611bfb8185612126565b9350611c0b818560208601612280565b611c148161248f565b840191505092915050565b6000611c2a8261210a565b611c348185612137565b9350611c44818560208601612280565b80840191505092915050565b6000611c5d603283612126565b9150611c68826124a0565b604082019050919050565b6000611c80602683612126565b9150611c8b826124ef565b604082019050919050565b6000611ca3602583612126565b9150611cae8261253e565b604082019050919050565b6000611cc6601c83612126565b9150611cd18261258d565b602082019050919050565b6000611ce9602483612126565b9150611cf4826125b6565b604082019050919050565b6000611d0c601983612126565b9150611d1782612605565b602082019050919050565b6000611d2f602983612126565b9150611d3a8261262e565b604082019050919050565b6000611d52603e83612126565b9150611d5d8261267d565b604082019050919050565b6000611d75602083612126565b9150611d80826126cc565b602082019050919050565b6000611d98602083612126565b9150611da3826126f5565b602082019050919050565b6000611dbb601883612126565b9150611dc68261271e565b602082019050919050565b6000611dde602183612126565b9150611de982612747565b604082019050919050565b6000611e01602e83612126565b9150611e0c82612796565b604082019050919050565b611e2081612267565b82525050565b6000611e328285611c1f565b9150611e3e8284611c1f565b91508190509392505050565b6000602082019050611e5f6000830184611b8f565b92915050565b6000608082019050611e7a6000830187611b8f565b611e876020830186611b8f565b611e946040830185611e17565b8181036060830152611ea68184611bad565b905095945050505050565b6000602082019050611ec66000830184611b9e565b92915050565b60006020820190508181036000830152611ee68184611be6565b905092915050565b60006020820190508181036000830152611f0781611c50565b9050919050565b60006020820190508181036000830152611f2781611c73565b9050919050565b60006020820190508181036000830152611f4781611c96565b9050919050565b60006020820190508181036000830152611f6781611cb9565b9050919050565b60006020820190508181036000830152611f8781611cdc565b9050919050565b60006020820190508181036000830152611fa781611cff565b9050919050565b60006020820190508181036000830152611fc781611d22565b9050919050565b60006020820190508181036000830152611fe781611d45565b9050919050565b6000602082019050818103600083015261200781611d68565b9050919050565b6000602082019050818103600083015261202781611d8b565b9050919050565b6000602082019050818103600083015261204781611dae565b9050919050565b6000602082019050818103600083015261206781611dd1565b9050919050565b6000602082019050818103600083015261208781611df4565b9050919050565b60006020820190506120a36000830184611e17565b92915050565b60006120b36120c4565b90506120bf82826122e5565b919050565b6000604051905090565b600067ffffffffffffffff8211156120e9576120e861244c565b5b6120f28261248f565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061214d82612267565b915061215883612267565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561218d5761218c612390565b5b828201905092915050565b60006121a382612267565b91506121ae83612267565b9250826121be576121bd6123bf565b5b828204905092915050565b60006121d482612267565b91506121df83612267565b9250828210156121f2576121f1612390565b5b828203905092915050565b600061220882612247565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561229e578082015181840152602081019050612283565b838111156122ad576000848401525b50505050565b600060028204905060018216806122cb57607f821691505b602082108114156122df576122de6123ee565b5b50919050565b6122ee8261248f565b810181811067ffffffffffffffff8211171561230d5761230c61244c565b5b80604052505050565b600061232182612267565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561235457612353612390565b5b600182019050919050565b600061236a82612267565b915061237583612267565b925082612385576123846123bf565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6127ee816121fd565b81146127f957600080fd5b50565b6128058161220f565b811461281057600080fd5b50565b61281c8161221b565b811461282757600080fd5b50565b61283381612267565b811461283e57600080fd5b5056fea2646970667358221220a6a2c6940750cda23831b002ab4c6705e7db5d257fb004beeeea04d99849f37164736f6c63430008070033";

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
