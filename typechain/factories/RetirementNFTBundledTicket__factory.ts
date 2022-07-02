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
    inputs: [
      {
        internalType: "contract RandomNumberGeneratorV2",
        name: "_rngV2",
        type: "address",
      },
    ],
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
    name: "mintNewRetirementNFTBundledTicket",
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
    inputs: [],
    name: "rngV2",
    outputs: [
      {
        internalType: "contract RandomNumberGeneratorV2",
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
  "0x60806040523480156200001157600080fd5b50604051620034f9380380620034f9833981810160405281019062000037919062000360565b6040518060400160405280601d81526020017f5265746972656d656e74204e46542062756e646c6564205469636b65740000008152506040518060400160405280601381526020017f524e46545f42554e444c45445f5449434b4554000000000000000000000000008152508160009080519060200190620000bb92919062000299565b508060019080519060200190620000d492919062000299565b50505080600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200012d6000801b336200013460201b60201c565b506200045e565b6200014682826200022660201b60201c565b620002225760016006600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620001c76200029160201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b60006006600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b828054620002a790620003da565b90600052602060002090601f016020900481019282620002cb576000855562000317565b82601f10620002e657805160ff191683800117855562000317565b8280016001018555821562000317579182015b8281111562000316578251825591602001919060010190620002f9565b5b5090506200032691906200032a565b5090565b5b80821115620003455760008160009055506001016200032b565b5090565b6000815190506200035a8162000444565b92915050565b6000602082840312156200037957620003786200043f565b5b6000620003898482850162000349565b91505092915050565b60006200039f82620003ba565b9050919050565b6000620003b38262000392565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006002820490506001821680620003f357607f821691505b602082108114156200040a576200040962000410565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b6200044f81620003a6565b81146200045b57600080fd5b50565b61308b806200046e6000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80636352211e116100b8578063a22cb4651161007c578063a22cb4651461035e578063b88d4fde1461037a578063c87b56dd14610396578063c8eb9acd146103c6578063d547741f146103e4578063e985e9c51461040057610137565b80636352211e1461029257806370a08231146102c257806391d14854146102f257806395d89b4114610322578063a217fddf1461034057610137565b8063248a9ca3116100ff578063248a9ca3146101f25780632f2ff15d1461022257806336568abe1461023e57806337a701bd1461025a57806342842e0e1461027657610137565b806301ffc9a71461013c57806306fdde031461016c578063081812fc1461018a578063095ea7b3146101ba57806323b872dd146101d6575b600080fd5b6101566004803603810190610151919061211b565b610430565b6040516101639190612562565b60405180910390f35b610174610442565b60405161018191906125b3565b60405180910390f35b6101a4600480360381019061019f9190612175565b6104d4565b6040516101b191906124fb565b60405180910390f35b6101d460048036038101906101cf919061206e565b61051a565b005b6101f060048036038101906101eb9190611f58565b610632565b005b61020c600480360381019061020791906120ae565b610692565b604051610219919061257d565b60405180910390f35b61023c600480360381019061023791906120db565b6106b2565b005b610258600480360381019061025391906120db565b6106d3565b005b610274600480360381019061026f919061206e565b610756565b005b610290600480360381019061028b9190611f58565b610772565b005b6102ac60048036038101906102a79190612175565b610792565b6040516102b991906124fb565b60405180910390f35b6102dc60048036038101906102d79190611eeb565b610844565b6040516102e99190612775565b60405180910390f35b61030c600480360381019061030791906120db565b6108fc565b6040516103199190612562565b60405180910390f35b61032a610967565b60405161033791906125b3565b60405180910390f35b6103486109f9565b604051610355919061257d565b60405180910390f35b6103786004803603810190610373919061202e565b610a00565b005b610394600480360381019061038f9190611fab565b610a16565b005b6103b060048036038101906103ab9190612175565b610a78565b6040516103bd91906125b3565b60405180910390f35b6103ce610ae0565b6040516103db9190612598565b60405180910390f35b6103fe60048036038101906103f991906120db565b610b06565b005b61041a60048036038101906104159190611f18565b610b27565b6040516104279190612562565b60405180910390f35b600061043b82610bbb565b9050919050565b60606000805461045190612a5e565b80601f016020809104026020016040519081016040528092919081815260200182805461047d90612a5e565b80156104ca5780601f1061049f576101008083540402835291602001916104ca565b820191906000526020600020905b8154815290600101906020018083116104ad57829003601f168201915b5050505050905090565b60006104df82610c35565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061052582610792565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610596576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058d90612715565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105b5610c80565b73ffffffffffffffffffffffffffffffffffffffff1614806105e457506105e3816105de610c80565b610b27565b5b610623576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061a906126b5565b60405180910390fd5b61062d8383610c88565b505050565b61064361063d610c80565b82610d41565b610682576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067990612735565b60405180910390fd5b61068d838383610dd6565b505050565b600060066000838152602001908152602001600020600101549050919050565b6106bb82610692565b6106c48161103d565b6106ce8383611051565b505050565b6106db610c80565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610748576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073f90612755565b60405180910390fd5b6107528282611132565b5050565b6000801b6107638161103d565b61076d8383611214565b505050565b61078d83838360405180602001604052806000815250610a16565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561083b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610832906126f5565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ac90612695565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006006600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60606001805461097690612a5e565b80601f01602080910402602001604051908101604052809291908181526020018280546109a290612a5e565b80156109ef5780601f106109c4576101008083540402835291602001916109ef565b820191906000526020600020905b8154815290600101906020018083116109d257829003601f168201915b5050505050905090565b6000801b81565b610a12610a0b610c80565b8383611232565b5050565b610a27610a21610c80565b83610d41565b610a66576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5d90612735565b60405180910390fd5b610a728484848461139f565b50505050565b6060610a8382610c35565b6000610a8d6113fb565b90506000815111610aad5760405180602001604052806000815250610ad8565b80610ab784611412565b604051602001610ac892919061249d565b6040516020818303038152906040525b915050919050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610b0f82610692565b610b188161103d565b610b228383611132565b505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610c2e5750610c2d82611573565b5b9050919050565b610c3e81611655565b610c7d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c74906126f5565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610cfb83610792565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610d4d83610792565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610d8f5750610d8e8185610b27565b5b80610dcd57508373ffffffffffffffffffffffffffffffffffffffff16610db5846104d4565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610df682610792565b73ffffffffffffffffffffffffffffffffffffffff1614610e4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4390612615565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ebc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb390612655565b60405180910390fd5b610ec78383836116c1565b610ed2600082610c88565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f22919061290a565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f799190612829565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46110388383836116c6565b505050565b61104e81611049610c80565b6116cb565b50565b61105b82826108fc565b61112e5760016006600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506110d3610c80565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b61113c82826108fc565b156112105760006006600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506111b5610c80565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b61122e828260405180602001604052806000815250611768565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156112a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129890612675565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516113929190612562565b60405180910390a3505050565b6113aa848484610dd6565b6113b6848484846117c3565b6113f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113ec906125f5565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b6060600082141561145a576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061156e565b600082905060005b6000821461148c57808061147590612ac1565b915050600a82611485919061287f565b9150611462565b60008167ffffffffffffffff8111156114a8576114a7612bf7565b5b6040519080825280601f01601f1916602001820160405280156114da5781602001600182028036833780820191505090505b5090505b60008514611567576001826114f3919061290a565b9150600a856115029190612b0a565b603061150e9190612829565b60f81b81838151811061152457611523612bc8565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611560919061287f565b94506114de565b8093505050505b919050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061163e57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061164e575061164d8261195a565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b6116d582826108fc565b611764576116fa8173ffffffffffffffffffffffffffffffffffffffff1660146119c4565b6117088360001c60206119c4565b6040516020016117199291906124c1565b6040516020818303038152906040526040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161175b91906125b3565b60405180910390fd5b5050565b6117728383611c00565b61177f60008484846117c3565b6117be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117b5906125f5565b60405180910390fd5b505050565b60006117e48473ffffffffffffffffffffffffffffffffffffffff16611dda565b1561194d578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261180d610c80565b8786866040518563ffffffff1660e01b815260040161182f9493929190612516565b602060405180830381600087803b15801561184957600080fd5b505af192505050801561187a57506040513d601f19601f820116820180604052508101906118779190612148565b60015b6118fd573d80600081146118aa576040519150601f19603f3d011682016040523d82523d6000602084013e6118af565b606091505b506000815114156118f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118ec906125f5565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611952565b600190505b949350505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6060600060028360026119d791906128b0565b6119e19190612829565b67ffffffffffffffff8111156119fa576119f9612bf7565b5b6040519080825280601f01601f191660200182016040528015611a2c5781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611a6457611a63612bc8565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110611ac857611ac7612bc8565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006001846002611b0891906128b0565b611b129190612829565b90505b6001811115611bb2577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110611b5457611b53612bc8565b5b1a60f81b828281518110611b6b57611b6a612bc8565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c945080611bab90612a34565b9050611b15565b5060008414611bf6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bed906125d5565b60405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611c70576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c67906126d5565b60405180910390fd5b611c7981611655565b15611cb9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cb090612635565b60405180910390fd5b611cc5600083836116c1565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611d159190612829565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611dd6600083836116c6565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000611e10611e0b846127b5565b612790565b905082815260208101848484011115611e2c57611e2b612c2b565b5b611e378482856129f2565b509392505050565b600081359050611e4e81612fe2565b92915050565b600081359050611e6381612ff9565b92915050565b600081359050611e7881613010565b92915050565b600081359050611e8d81613027565b92915050565b600081519050611ea281613027565b92915050565b600082601f830112611ebd57611ebc612c26565b5b8135611ecd848260208601611dfd565b91505092915050565b600081359050611ee58161303e565b92915050565b600060208284031215611f0157611f00612c35565b5b6000611f0f84828501611e3f565b91505092915050565b60008060408385031215611f2f57611f2e612c35565b5b6000611f3d85828601611e3f565b9250506020611f4e85828601611e3f565b9150509250929050565b600080600060608486031215611f7157611f70612c35565b5b6000611f7f86828701611e3f565b9350506020611f9086828701611e3f565b9250506040611fa186828701611ed6565b9150509250925092565b60008060008060808587031215611fc557611fc4612c35565b5b6000611fd387828801611e3f565b9450506020611fe487828801611e3f565b9350506040611ff587828801611ed6565b925050606085013567ffffffffffffffff81111561201657612015612c30565b5b61202287828801611ea8565b91505092959194509250565b6000806040838503121561204557612044612c35565b5b600061205385828601611e3f565b925050602061206485828601611e54565b9150509250929050565b6000806040838503121561208557612084612c35565b5b600061209385828601611e3f565b92505060206120a485828601611ed6565b9150509250929050565b6000602082840312156120c4576120c3612c35565b5b60006120d284828501611e69565b91505092915050565b600080604083850312156120f2576120f1612c35565b5b600061210085828601611e69565b925050602061211185828601611e3f565b9150509250929050565b60006020828403121561213157612130612c35565b5b600061213f84828501611e7e565b91505092915050565b60006020828403121561215e5761215d612c35565b5b600061216c84828501611e93565b91505092915050565b60006020828403121561218b5761218a612c35565b5b600061219984828501611ed6565b91505092915050565b6121ab8161293e565b82525050565b6121ba81612950565b82525050565b6121c98161295c565b82525050565b60006121da826127e6565b6121e481856127fc565b93506121f4818560208601612a01565b6121fd81612c3a565b840191505092915050565b612211816129bc565b82525050565b6000612222826127f1565b61222c818561280d565b935061223c818560208601612a01565b61224581612c3a565b840191505092915050565b600061225b826127f1565b612265818561281e565b9350612275818560208601612a01565b80840191505092915050565b600061228e60208361280d565b915061229982612c4b565b602082019050919050565b60006122b160328361280d565b91506122bc82612c74565b604082019050919050565b60006122d460258361280d565b91506122df82612cc3565b604082019050919050565b60006122f7601c8361280d565b915061230282612d12565b602082019050919050565b600061231a60248361280d565b915061232582612d3b565b604082019050919050565b600061233d60198361280d565b915061234882612d8a565b602082019050919050565b600061236060298361280d565b915061236b82612db3565b604082019050919050565b6000612383603e8361280d565b915061238e82612e02565b604082019050919050565b60006123a660208361280d565b91506123b182612e51565b602082019050919050565b60006123c960188361280d565b91506123d482612e7a565b602082019050919050565b60006123ec60218361280d565b91506123f782612ea3565b604082019050919050565b600061240f60178361281e565b915061241a82612ef2565b601782019050919050565b6000612432602e8361280d565b915061243d82612f1b565b604082019050919050565b600061245560118361281e565b915061246082612f6a565b601182019050919050565b6000612478602f8361280d565b915061248382612f93565b604082019050919050565b612497816129b2565b82525050565b60006124a98285612250565b91506124b58284612250565b91508190509392505050565b60006124cc82612402565b91506124d88285612250565b91506124e382612448565b91506124ef8284612250565b91508190509392505050565b600060208201905061251060008301846121a2565b92915050565b600060808201905061252b60008301876121a2565b61253860208301866121a2565b612545604083018561248e565b818103606083015261255781846121cf565b905095945050505050565b600060208201905061257760008301846121b1565b92915050565b600060208201905061259260008301846121c0565b92915050565b60006020820190506125ad6000830184612208565b92915050565b600060208201905081810360008301526125cd8184612217565b905092915050565b600060208201905081810360008301526125ee81612281565b9050919050565b6000602082019050818103600083015261260e816122a4565b9050919050565b6000602082019050818103600083015261262e816122c7565b9050919050565b6000602082019050818103600083015261264e816122ea565b9050919050565b6000602082019050818103600083015261266e8161230d565b9050919050565b6000602082019050818103600083015261268e81612330565b9050919050565b600060208201905081810360008301526126ae81612353565b9050919050565b600060208201905081810360008301526126ce81612376565b9050919050565b600060208201905081810360008301526126ee81612399565b9050919050565b6000602082019050818103600083015261270e816123bc565b9050919050565b6000602082019050818103600083015261272e816123df565b9050919050565b6000602082019050818103600083015261274e81612425565b9050919050565b6000602082019050818103600083015261276e8161246b565b9050919050565b600060208201905061278a600083018461248e565b92915050565b600061279a6127ab565b90506127a68282612a90565b919050565b6000604051905090565b600067ffffffffffffffff8211156127d0576127cf612bf7565b5b6127d982612c3a565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000612834826129b2565b915061283f836129b2565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561287457612873612b3b565b5b828201905092915050565b600061288a826129b2565b9150612895836129b2565b9250826128a5576128a4612b6a565b5b828204905092915050565b60006128bb826129b2565b91506128c6836129b2565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156128ff576128fe612b3b565b5b828202905092915050565b6000612915826129b2565b9150612920836129b2565b92508282101561293357612932612b3b565b5b828203905092915050565b600061294982612992565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006129c7826129ce565b9050919050565b60006129d9826129e0565b9050919050565b60006129eb82612992565b9050919050565b82818337600083830152505050565b60005b83811015612a1f578082015181840152602081019050612a04565b83811115612a2e576000848401525b50505050565b6000612a3f826129b2565b91506000821415612a5357612a52612b3b565b5b600182039050919050565b60006002820490506001821680612a7657607f821691505b60208210811415612a8a57612a89612b99565b5b50919050565b612a9982612c3a565b810181811067ffffffffffffffff82111715612ab857612ab7612bf7565b5b80604052505050565b6000612acc826129b2565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612aff57612afe612b3b565b5b600182019050919050565b6000612b15826129b2565b9150612b20836129b2565b925082612b3057612b2f612b6a565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b612feb8161293e565b8114612ff657600080fd5b50565b61300281612950565b811461300d57600080fd5b50565b6130198161295c565b811461302457600080fd5b50565b61303081612966565b811461303b57600080fd5b50565b613047816129b2565b811461305257600080fd5b5056fea26469706673582212206d2072504fa5c430b5fc5532150d9af1e0b4c597c8a2b4d2ef31386384ca64d264736f6c63430008070033";

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
    _rngV2: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RetirementNFTBundledTicket> {
    return super.deploy(
      _rngV2,
      overrides || {}
    ) as Promise<RetirementNFTBundledTicket>;
  }
  getDeployTransaction(
    _rngV2: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_rngV2, overrides || {});
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
