/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RetirementCertificateNFT,
  RetirementCertificateNFTInterface,
} from "../RetirementCertificateNFT";

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
    name: "mintNewRetirementCertificateNFT",
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
        internalType: "address",
        name: "walletAddress",
        type: "address",
      },
    ],
    name: "retirementCertificateNFTBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "_numberOfRetirementCertificateNFTs",
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
  "0x60806040523480156200001157600080fd5b506040518060400160405280600e81526020017f5265746972656d656e74204e46540000000000000000000000000000000000008152506040518060400160405280600481526020017f524e46540000000000000000000000000000000000000000000000000000000081525081600090805190602001906200009692919062000232565b508060019080519060200190620000af92919062000232565b505050620000c76000801b33620000cd60201b60201c565b62000347565b620000df8282620001bf60201b60201c565b620001bb5760016006600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620001606200022a60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b60006006600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b8280546200024090620002e2565b90600052602060002090601f016020900481019282620002645760008555620002b0565b82601f106200027f57805160ff1916838001178555620002b0565b82800160010185558215620002b0579182015b82811115620002af57825182559160200191906001019062000292565b5b509050620002bf9190620002c3565b5090565b5b80821115620002de576000816000905550600101620002c4565b5090565b60006002820490506001821680620002fb57607f821691505b6020821081141562000312576200031162000318565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b61307680620003576000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c80636352211e116100b8578063a217fddf1161007c578063a217fddf146103ab578063a22cb465146103c9578063b88d4fde146103e5578063c87b56dd14610401578063d547741f14610431578063e985e9c51461044d57610142565b80636352211e146102e15780636801693e1461031157806370a082311461032d57806391d148541461035d57806395d89b411461038d57610142565b8063248a9ca31161010a578063248a9ca3146101fd5780632a6b40ad1461022d5780632f2ff15d1461025d57806336568abe1461027957806342842e0e14610295578063501b0cb5146102b157610142565b806301ffc9a71461014757806306fdde0314610177578063081812fc14610195578063095ea7b3146101c557806323b872dd146101e1575b600080fd5b610161600480360381019061015c9190612166565b61047d565b60405161016e919061259e565b60405180910390f35b61017f61048f565b60405161018c91906125d4565b60405180910390f35b6101af60048036038101906101aa91906121c0565b610521565b6040516101bc9190612537565b60405180910390f35b6101df60048036038101906101da91906120b9565b610567565b005b6101fb60048036038101906101f69190611fa3565b61067f565b005b610217600480360381019061021291906120f9565b6106df565b60405161022491906125b9565b60405180910390f35b610247600480360381019061024291906121c0565b6106ff565b6040516102549190612537565b60405180910390f35b61027760048036038101906102729190612126565b610711565b005b610293600480360381019061028e9190612126565b610732565b005b6102af60048036038101906102aa9190611fa3565b6107b5565b005b6102cb60048036038101906102c69190611f36565b6107d5565b6040516102d89190612796565b60405180910390f35b6102fb60048036038101906102f691906121c0565b6107e7565b6040516103089190612537565b60405180910390f35b61032b600480360381019061032691906120b9565b610899565b005b61034760048036038101906103429190611f36565b6108b5565b6040516103549190612796565b60405180910390f35b61037760048036038101906103729190612126565b61096d565b604051610384919061259e565b60405180910390f35b6103956109d8565b6040516103a291906125d4565b60405180910390f35b6103b3610a6a565b6040516103c091906125b9565b60405180910390f35b6103e360048036038101906103de9190612079565b610a71565b005b6103ff60048036038101906103fa9190611ff6565b610a87565b005b61041b600480360381019061041691906121c0565b610ae9565b60405161042891906125d4565b60405180910390f35b61044b60048036038101906104469190612126565b610b51565b005b61046760048036038101906104629190611f63565b610b72565b604051610474919061259e565b60405180910390f35b600061048882610c06565b9050919050565b60606000805461049e90612a49565b80601f01602080910402602001604051908101604052809291908181526020018280546104ca90612a49565b80156105175780601f106104ec57610100808354040283529160200191610517565b820191906000526020600020905b8154815290600101906020018083116104fa57829003601f168201915b5050505050905090565b600061052c82610c80565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610572826107e7565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105da90612736565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610602610ccb565b73ffffffffffffffffffffffffffffffffffffffff16148061063157506106308161062b610ccb565b610b72565b5b610670576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610667906126d6565b60405180910390fd5b61067a8383610cd3565b505050565b61069061068a610ccb565b82610d8c565b6106cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c690612756565b60405180910390fd5b6106da838383610e21565b505050565b600060066000838152602001908152602001600020600101549050919050565b600061070a826107e7565b9050919050565b61071a826106df565b61072381611088565b61072d838361109c565b505050565b61073a610ccb565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146107a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079e90612776565b60405180910390fd5b6107b1828261117d565b5050565b6107d083838360405180602001604052806000815250610a87565b505050565b60006107e0826108b5565b9050919050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610890576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088790612716565b60405180910390fd5b80915050919050565b6000801b6108a681611088565b6108b0838361125f565b505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610926576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091d906126b6565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006006600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6060600180546109e790612a49565b80601f0160208091040260200160405190810160405280929190818152602001828054610a1390612a49565b8015610a605780601f10610a3557610100808354040283529160200191610a60565b820191906000526020600020905b815481529060010190602001808311610a4357829003601f168201915b5050505050905090565b6000801b81565b610a83610a7c610ccb565b838361127d565b5050565b610a98610a92610ccb565b83610d8c565b610ad7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ace90612756565b60405180910390fd5b610ae3848484846113ea565b50505050565b6060610af482610c80565b6000610afe611446565b90506000815111610b1e5760405180602001604052806000815250610b49565b80610b288461145d565b604051602001610b399291906124d9565b6040516020818303038152906040525b915050919050565b610b5a826106df565b610b6381611088565b610b6d838361117d565b505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610c795750610c78826115be565b5b9050919050565b610c89816116a0565b610cc8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cbf90612716565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610d46836107e7565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610d98836107e7565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610dda5750610dd98185610b72565b5b80610e1857508373ffffffffffffffffffffffffffffffffffffffff16610e0084610521565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610e41826107e7565b73ffffffffffffffffffffffffffffffffffffffff1614610e97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8e90612636565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f07576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610efe90612676565b60405180910390fd5b610f1283838361170c565b610f1d600082610cd3565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f6d919061292b565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610fc4919061284a565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611083838383611711565b505050565b61109981611094610ccb565b611716565b50565b6110a6828261096d565b6111795760016006600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061111e610ccb565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b611187828261096d565b1561125b5760006006600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611200610ccb565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b6112798282604051806020016040528060008152506117b3565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156112ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e390612696565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516113dd919061259e565b60405180910390a3505050565b6113f5848484610e21565b6114018484848461180e565b611440576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161143790612616565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060008214156114a5576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506115b9565b600082905060005b600082146114d75780806114c090612aac565b915050600a826114d091906128a0565b91506114ad565b60008167ffffffffffffffff8111156114f3576114f2612be2565b5b6040519080825280601f01601f1916602001820160405280156115255781602001600182028036833780820191505090505b5090505b600085146115b25760018261153e919061292b565b9150600a8561154d9190612af5565b6030611559919061284a565b60f81b81838151811061156f5761156e612bb3565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856115ab91906128a0565b9450611529565b8093505050505b919050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061168957507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806116995750611698826119a5565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b611720828261096d565b6117af576117458173ffffffffffffffffffffffffffffffffffffffff166014611a0f565b6117538360001c6020611a0f565b6040516020016117649291906124fd565b6040516020818303038152906040526040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117a691906125d4565b60405180910390fd5b5050565b6117bd8383611c4b565b6117ca600084848461180e565b611809576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161180090612616565b60405180910390fd5b505050565b600061182f8473ffffffffffffffffffffffffffffffffffffffff16611e25565b15611998578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611858610ccb565b8786866040518563ffffffff1660e01b815260040161187a9493929190612552565b602060405180830381600087803b15801561189457600080fd5b505af19250505080156118c557506040513d601f19601f820116820180604052508101906118c29190612193565b60015b611948573d80600081146118f5576040519150601f19603f3d011682016040523d82523d6000602084013e6118fa565b606091505b50600081511415611940576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161193790612616565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061199d565b600190505b949350505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b606060006002836002611a2291906128d1565b611a2c919061284a565b67ffffffffffffffff811115611a4557611a44612be2565b5b6040519080825280601f01601f191660200182016040528015611a775781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611aaf57611aae612bb3565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110611b1357611b12612bb3565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006001846002611b5391906128d1565b611b5d919061284a565b90505b6001811115611bfd577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110611b9f57611b9e612bb3565b5b1a60f81b828281518110611bb657611bb5612bb3565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c945080611bf690612a1f565b9050611b60565b5060008414611c41576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c38906125f6565b60405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611cbb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cb2906126f6565b60405180910390fd5b611cc4816116a0565b15611d04576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cfb90612656565b60405180910390fd5b611d106000838361170c565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611d60919061284a565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611e2160008383611711565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000611e5b611e56846127d6565b6127b1565b905082815260208101848484011115611e7757611e76612c16565b5b611e828482856129dd565b509392505050565b600081359050611e9981612fcd565b92915050565b600081359050611eae81612fe4565b92915050565b600081359050611ec381612ffb565b92915050565b600081359050611ed881613012565b92915050565b600081519050611eed81613012565b92915050565b600082601f830112611f0857611f07612c11565b5b8135611f18848260208601611e48565b91505092915050565b600081359050611f3081613029565b92915050565b600060208284031215611f4c57611f4b612c20565b5b6000611f5a84828501611e8a565b91505092915050565b60008060408385031215611f7a57611f79612c20565b5b6000611f8885828601611e8a565b9250506020611f9985828601611e8a565b9150509250929050565b600080600060608486031215611fbc57611fbb612c20565b5b6000611fca86828701611e8a565b9350506020611fdb86828701611e8a565b9250506040611fec86828701611f21565b9150509250925092565b600080600080608085870312156120105761200f612c20565b5b600061201e87828801611e8a565b945050602061202f87828801611e8a565b935050604061204087828801611f21565b925050606085013567ffffffffffffffff81111561206157612060612c1b565b5b61206d87828801611ef3565b91505092959194509250565b600080604083850312156120905761208f612c20565b5b600061209e85828601611e8a565b92505060206120af85828601611e9f565b9150509250929050565b600080604083850312156120d0576120cf612c20565b5b60006120de85828601611e8a565b92505060206120ef85828601611f21565b9150509250929050565b60006020828403121561210f5761210e612c20565b5b600061211d84828501611eb4565b91505092915050565b6000806040838503121561213d5761213c612c20565b5b600061214b85828601611eb4565b925050602061215c85828601611e8a565b9150509250929050565b60006020828403121561217c5761217b612c20565b5b600061218a84828501611ec9565b91505092915050565b6000602082840312156121a9576121a8612c20565b5b60006121b784828501611ede565b91505092915050565b6000602082840312156121d6576121d5612c20565b5b60006121e484828501611f21565b91505092915050565b6121f68161295f565b82525050565b61220581612971565b82525050565b6122148161297d565b82525050565b600061222582612807565b61222f818561281d565b935061223f8185602086016129ec565b61224881612c25565b840191505092915050565b600061225e82612812565b612268818561282e565b93506122788185602086016129ec565b61228181612c25565b840191505092915050565b600061229782612812565b6122a1818561283f565b93506122b18185602086016129ec565b80840191505092915050565b60006122ca60208361282e565b91506122d582612c36565b602082019050919050565b60006122ed60328361282e565b91506122f882612c5f565b604082019050919050565b600061231060258361282e565b915061231b82612cae565b604082019050919050565b6000612333601c8361282e565b915061233e82612cfd565b602082019050919050565b600061235660248361282e565b915061236182612d26565b604082019050919050565b600061237960198361282e565b915061238482612d75565b602082019050919050565b600061239c60298361282e565b91506123a782612d9e565b604082019050919050565b60006123bf603e8361282e565b91506123ca82612ded565b604082019050919050565b60006123e260208361282e565b91506123ed82612e3c565b602082019050919050565b600061240560188361282e565b915061241082612e65565b602082019050919050565b600061242860218361282e565b915061243382612e8e565b604082019050919050565b600061244b60178361283f565b915061245682612edd565b601782019050919050565b600061246e602e8361282e565b915061247982612f06565b604082019050919050565b600061249160118361283f565b915061249c82612f55565b601182019050919050565b60006124b4602f8361282e565b91506124bf82612f7e565b604082019050919050565b6124d3816129d3565b82525050565b60006124e5828561228c565b91506124f1828461228c565b91508190509392505050565b60006125088261243e565b9150612514828561228c565b915061251f82612484565b915061252b828461228c565b91508190509392505050565b600060208201905061254c60008301846121ed565b92915050565b600060808201905061256760008301876121ed565b61257460208301866121ed565b61258160408301856124ca565b8181036060830152612593818461221a565b905095945050505050565b60006020820190506125b360008301846121fc565b92915050565b60006020820190506125ce600083018461220b565b92915050565b600060208201905081810360008301526125ee8184612253565b905092915050565b6000602082019050818103600083015261260f816122bd565b9050919050565b6000602082019050818103600083015261262f816122e0565b9050919050565b6000602082019050818103600083015261264f81612303565b9050919050565b6000602082019050818103600083015261266f81612326565b9050919050565b6000602082019050818103600083015261268f81612349565b9050919050565b600060208201905081810360008301526126af8161236c565b9050919050565b600060208201905081810360008301526126cf8161238f565b9050919050565b600060208201905081810360008301526126ef816123b2565b9050919050565b6000602082019050818103600083015261270f816123d5565b9050919050565b6000602082019050818103600083015261272f816123f8565b9050919050565b6000602082019050818103600083015261274f8161241b565b9050919050565b6000602082019050818103600083015261276f81612461565b9050919050565b6000602082019050818103600083015261278f816124a7565b9050919050565b60006020820190506127ab60008301846124ca565b92915050565b60006127bb6127cc565b90506127c78282612a7b565b919050565b6000604051905090565b600067ffffffffffffffff8211156127f1576127f0612be2565b5b6127fa82612c25565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000612855826129d3565b9150612860836129d3565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561289557612894612b26565b5b828201905092915050565b60006128ab826129d3565b91506128b6836129d3565b9250826128c6576128c5612b55565b5b828204905092915050565b60006128dc826129d3565b91506128e7836129d3565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156129205761291f612b26565b5b828202905092915050565b6000612936826129d3565b9150612941836129d3565b92508282101561295457612953612b26565b5b828203905092915050565b600061296a826129b3565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612a0a5780820151818401526020810190506129ef565b83811115612a19576000848401525b50505050565b6000612a2a826129d3565b91506000821415612a3e57612a3d612b26565b5b600182039050919050565b60006002820490506001821680612a6157607f821691505b60208210811415612a7557612a74612b84565b5b50919050565b612a8482612c25565b810181811067ffffffffffffffff82111715612aa357612aa2612be2565b5b80604052505050565b6000612ab7826129d3565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612aea57612ae9612b26565b5b600182019050919050565b6000612b00826129d3565b9150612b0b836129d3565b925082612b1b57612b1a612b55565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b612fd68161295f565b8114612fe157600080fd5b50565b612fed81612971565b8114612ff857600080fd5b50565b6130048161297d565b811461300f57600080fd5b50565b61301b81612987565b811461302657600080fd5b50565b613032816129d3565b811461303d57600080fd5b5056fea26469706673582212204336a952286231a38a6f71127336ad647862cb3ab17926bff7f17497c1f9213b64736f6c63430008070033";

type RetirementCertificateNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RetirementCertificateNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RetirementCertificateNFT__factory extends ContractFactory {
  constructor(...args: RetirementCertificateNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "RetirementCertificateNFT";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RetirementCertificateNFT> {
    return super.deploy(overrides || {}) as Promise<RetirementCertificateNFT>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RetirementCertificateNFT {
    return super.attach(address) as RetirementCertificateNFT;
  }
  connect(signer: Signer): RetirementCertificateNFT__factory {
    return super.connect(signer) as RetirementCertificateNFT__factory;
  }
  static readonly contractName: "RetirementCertificateNFT";
  public readonly contractName: "RetirementCertificateNFT";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RetirementCertificateNFTInterface {
    return new utils.Interface(_abi) as RetirementCertificateNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RetirementCertificateNFT {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RetirementCertificateNFT;
  }
}