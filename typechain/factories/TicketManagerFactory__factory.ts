/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TicketManagerFactory,
  TicketManagerFactoryInterface,
} from "../TicketManagerFactory";

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
        indexed: false,
        internalType: "contract ITicketManager",
        name: "ticketManager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IRetirementCertificateNFTAssociatedTicket",
        name: "retirementCertificateNFTAssociatedTicket",
        type: "address",
      },
    ],
    name: "TicketManagerCreated",
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
        internalType: "contract IRetirementCertificateNFTAssociatedTicket",
        name: "_retirementCertificateNFTAssociatedTicket",
        type: "address",
      },
    ],
    name: "createTicketManager",
    outputs: [
      {
        internalType: "contract TicketManager",
        name: "_ticketManager",
        type: "address",
      },
    ],
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506100246000801b3361002960201b60201c565b610187565b610039828261011560201b60201c565b61011157600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506100b661017f60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b613148806101966000396000f3fe60806040523480156200001157600080fd5b5060043610620000945760003560e01c806391d14854116200006357806391d148541462000145578063a217fddf146200017b578063d547741f146200019d578063da7224fb14620001bd5762000094565b806301ffc9a71462000099578063248a9ca314620000cf5780632f2ff15d146200010557806336568abe1462000125575b600080fd5b620000b76004803603810190620000b1919062000a95565b620001f3565b604051620000c6919062000c93565b60405180910390f35b620000ed6004803603810190620000e7919062000a1c565b62000270565b604051620000fc919062000cb0565b60405180910390f35b6200012360048036038101906200011d919062000a4e565b6200028f565b005b6200014360048036038101906200013d919062000a4e565b620002b6565b005b6200016360048036038101906200015d919062000a4e565b62000340565b60405162000172919062000c93565b60405180910390f35b62000185620003aa565b60405162000194919062000cb0565b60405180910390f35b620001bb6004803603810190620001b5919062000a4e565b620003b1565b005b620001db6004803603810190620001d5919062000ac7565b620003d8565b604051620001ea919062000cea565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148062000269575062000268826200045a565b5b9050919050565b6000806000838152602001908152602001600020600101549050919050565b6200029a8262000270565b620002a581620004c4565b620002b18383620004dc565b505050565b620002c0620005c1565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161462000330576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003279062000d7a565b60405180910390fd5b6200033c8282620005c9565b5050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b620003bc8262000270565b620003c781620004c4565b620003d38383620005c9565b505050565b60008082604051620003ea90620009b2565b620003f6919062000ccd565b604051809103906000f08015801562000413573d6000803e3d6000fd5b5090507fe5cba664b6c10a689ae696b210811e7f51da3260d459f60ee1e232d8d39f11c981846040516200044992919062000d07565b60405180910390a180915050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b620004d981620004d3620005c1565b620006af565b50565b620004e8828262000340565b620005bd57600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555062000562620005c1565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600033905090565b620005d5828262000340565b15620006ab57600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555062000650620005c1565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b620006bb828262000340565b6200075357620006e38173ffffffffffffffffffffffffffffffffffffffff16601462000757565b620006f38360001c602062000757565b6040516020016200070692919062000c51565b6040516020818303038152906040526040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200074a919062000d34565b60405180910390fd5b5050565b6060600060028360026200076c919062000e20565b62000778919062000dc3565b67ffffffffffffffff81111562000794576200079362001028565b5b6040519080825280601f01601f191660200182016040528015620007c75781602001600182028036833780820191505090505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811062000802576200080162000ff9565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811062000869576200086862000ff9565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006001846002620008ab919062000e20565b620008b7919062000dc3565b90505b600181111562000961577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110620008fd57620008fc62000ff9565b5b1a60f81b82828151811062000917576200091662000ff9565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c945080620009599062000f9b565b9050620008ba565b5060008414620009a8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200099f9062000d58565b60405180910390fd5b8091505092915050565b611f7380620011a083390190565b600081359050620009d18162001137565b92915050565b600081359050620009e88162001151565b92915050565b600081359050620009ff816200116b565b92915050565b60008135905062000a168162001185565b92915050565b60006020828403121562000a355762000a3462001057565b5b600062000a4584828501620009d7565b91505092915050565b6000806040838503121562000a685762000a6762001057565b5b600062000a7885828601620009d7565b925050602062000a8b85828601620009c0565b9150509250929050565b60006020828403121562000aae5762000aad62001057565b5b600062000abe84828501620009ee565b91505092915050565b60006020828403121562000ae05762000adf62001057565b5b600062000af08482850162000a05565b91505092915050565b62000b048162000e95565b82525050565b62000b158162000ea1565b82525050565b62000b268162000f15565b82525050565b62000b378162000f29565b82525050565b600062000b4a8262000d9c565b62000b56818562000da7565b935062000b6881856020860162000f65565b62000b73816200105c565b840191505092915050565b600062000b8b8262000d9c565b62000b97818562000db8565b935062000ba981856020860162000f65565b80840191505092915050565b600062000bc460208362000da7565b915062000bd1826200106d565b602082019050919050565b600062000beb60178362000db8565b915062000bf88262001096565b601782019050919050565b600062000c1260118362000db8565b915062000c1f82620010bf565b601182019050919050565b600062000c39602f8362000da7565b915062000c4682620010e8565b604082019050919050565b600062000c5e8262000bdc565b915062000c6c828562000b7e565b915062000c798262000c03565b915062000c87828462000b7e565b91508190509392505050565b600060208201905062000caa600083018462000af9565b92915050565b600060208201905062000cc7600083018462000b0a565b92915050565b600060208201905062000ce4600083018462000b1b565b92915050565b600060208201905062000d01600083018462000b2c565b92915050565b600060408201905062000d1e600083018562000b2c565b62000d2d602083018462000b1b565b9392505050565b6000602082019050818103600083015262000d50818462000b3d565b905092915050565b6000602082019050818103600083015262000d738162000bb5565b9050919050565b6000602082019050818103600083015262000d958162000c2a565b9050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600062000dd08262000f0b565b915062000ddd8362000f0b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000e155762000e1462000fca565b5b828201905092915050565b600062000e2d8262000f0b565b915062000e3a8362000f0b565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161562000e765762000e7562000fca565b5b828202905092915050565b600062000e8e8262000eeb565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600062000ee48262000e81565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600062000f228262000f3d565b9050919050565b600062000f368262000f3d565b9050919050565b600062000f4a8262000f51565b9050919050565b600062000f5e8262000eeb565b9050919050565b60005b8381101562000f8557808201518184015260208101905062000f68565b8381111562000f95576000848401525b50505050565b600062000fa88262000f0b565b9150600082141562000fbf5762000fbe62000fca565b5b600182039050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b6000601f19601f8301169050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b620011428162000e81565b81146200114e57600080fd5b50565b6200115c8162000ea1565b81146200116857600080fd5b50565b620011768162000eab565b81146200118257600080fd5b50565b620011908162000ed7565b81146200119c57600080fd5b5056fe60806040523480156200001157600080fd5b5060405162001f7338038062001f7383398181016040528101906200003791906200020e565b6200004c6000801b336200009460201b60201c565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050620002a7565b620000a682826200018560201b60201c565b6200018157600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555062000126620001ef60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b60008151905062000208816200028d565b92915050565b60006020828403121562000227576200022662000288565b5b60006200023784828501620001f7565b91505092915050565b60006200024d8262000268565b9050919050565b6000620002618262000240565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b620002988162000254565b8114620002a457600080fd5b50565b611cbc80620002b76000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063a217fddf1161008c578063bc197c8111610066578063bc197c811461024a578063c786b8891461027a578063d547741f14610298578063f23a6e61146102b4576100cf565b8063a217fddf146101cc578063a29a6e3d146101ea578063a75c24471461021a576100cf565b806301ffc9a7146100d45780631256c57414610104578063248a9ca3146101345780632f2ff15d1461016457806336568abe1461018057806391d148541461019c575b600080fd5b6100ee60048036038101906100e99190611154565b6102e4565b6040516100fb9190611644565b60405180910390f35b61011e6004803603810190610119919061127c565b6102f6565b60405161012b9190611644565b60405180910390f35b61014e600480360381019061014991906110e7565b6103d3565b60405161015b919061165f565b60405180910390f35b61017e60048036038101906101799190611114565b6103f2565b005b61019a60048036038101906101959190611114565b610413565b005b6101b660048036038101906101b19190611114565b610496565b6040516101c39190611644565b60405180910390f35b6101d4610500565b6040516101e1919061165f565b60405180910390f35b61020460048036038101906101ff9190611181565b610507565b6040516102119190611644565b60405180910390f35b610234600480360381019061022f919061123c565b6105e6565b6040516102419190611644565b60405180910390f35b610264600480360381019061025f9190610f81565b6105ee565b604051610271919061167a565b60405180910390f35b610282610603565b60405161028f9190611695565b60405180910390f35b6102b260048036038101906102ad9190611114565b610629565b005b6102ce60048036038101906102c99190611050565b61064a565b6040516102db919061167a565b60405180910390f35b60006102ef8261065f565b9050919050565b6000808473ffffffffffffffffffffffffffffffffffffffff1663501b0cb5336040518263ffffffff1660e01b81526004016103329190611567565b60206040518083038186803b15801561034a57600080fd5b505afa15801561035e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038291906112cf565b116103c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b9906116f2565b60405180910390fd5b6103cb826106d9565b509392505050565b6000806000838152602001908152602001600020600101549050919050565b6103fb826103d3565b6104048161079e565b61040e83836107b2565b505050565b61041b610892565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610488576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047f90611712565b60405180910390fd5b610492828261089a565b5050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b6000808573ffffffffffffffffffffffffffffffffffffffff1663501b0cb5336040518263ffffffff1660e01b81526004016105439190611567565b60206040518083038186803b15801561055b57600080fd5b505afa15801561056f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059391906112cf565b116105d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ca906116f2565b60405180910390fd5b6105dd838361097b565b50949350505050565b600092915050565b600063bc197c8160e01b905095945050505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610632826103d3565b61063b8161079e565b610645838361089a565b505050565b600063f23a6e6160e01b905095945050505050565b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806106d257506106d182610a38565b5b9050919050565b6000803090506000339050600080600190506000604051806020016040528060008152509050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d9999ca886868686866040518663ffffffff1660e01b81526004016107629594939291906115ea565b600060405180830381600087803b15801561077c57600080fd5b505af1158015610790573d6000803e3d6000fd5b505050505050505050919050565b6107af816107aa610892565b610ab2565b50565b6107bc8282610496565b61088e57600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610833610892565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600033905090565b6108a48282610496565b1561097757600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061091c610892565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b60008030905060003390506000604051806020016040528060008152509050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c3e779cd84848989866040518663ffffffff1660e01b81526004016109fd959493929190611582565b600060405180830381600087803b158015610a1757600080fd5b505af1158015610a2b573d6000803e3d6000fd5b5050505050505092915050565b60007f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610aab5750610aaa82610b4f565b5b9050919050565b610abc8282610496565b610b4b57610ae18173ffffffffffffffffffffffffffffffffffffffff166014610bb9565b610aef8360001c6020610bb9565b604051602001610b0092919061152d565b6040516020818303038152906040526040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4291906116b0565b60405180910390fd5b5050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b606060006002836002610bcc9190611886565b610bd69190611830565b67ffffffffffffffff811115610bef57610bee611aa1565b5b6040519080825280601f01601f191660200182016040528015610c215781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110610c5957610c58611a72565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110610cbd57610cbc611a72565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006001846002610cfd9190611886565b610d079190611830565b90505b6001811115610da7577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110610d4957610d48611a72565b5b1a60f81b828281518110610d6057610d5f611a72565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c945080610da0906119e8565b9050610d0a565b5060008414610deb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de2906116d2565b60405180910390fd5b8091505092915050565b6000610e08610e0384611757565b611732565b90508083825260208201905082856020860282011115610e2b57610e2a611ad5565b5b60005b85811015610e5b5781610e418882610f57565b845260208401935060208301925050600181019050610e2e565b5050509392505050565b6000610e78610e7384611783565b611732565b905082815260208101848484011115610e9457610e93611ada565b5b610e9f8482856119a6565b509392505050565b600081359050610eb681611c13565b92915050565b600082601f830112610ed157610ed0611ad0565b5b8135610ee1848260208601610df5565b91505092915050565b600081359050610ef981611c2a565b92915050565b600081359050610f0e81611c41565b92915050565b600082601f830112610f2957610f28611ad0565b5b8135610f39848260208601610e65565b91505092915050565b600081359050610f5181611c58565b92915050565b600081359050610f6681611c6f565b92915050565b600081519050610f7b81611c6f565b92915050565b600080600080600060a08688031215610f9d57610f9c611ae4565b5b6000610fab88828901610ea7565b9550506020610fbc88828901610ea7565b945050604086013567ffffffffffffffff811115610fdd57610fdc611adf565b5b610fe988828901610ebc565b935050606086013567ffffffffffffffff81111561100a57611009611adf565b5b61101688828901610ebc565b925050608086013567ffffffffffffffff81111561103757611036611adf565b5b61104388828901610f14565b9150509295509295909350565b600080600080600060a0868803121561106c5761106b611ae4565b5b600061107a88828901610ea7565b955050602061108b88828901610ea7565b945050604061109c88828901610f57565b93505060606110ad88828901610f57565b925050608086013567ffffffffffffffff8111156110ce576110cd611adf565b5b6110da88828901610f14565b9150509295509295909350565b6000602082840312156110fd576110fc611ae4565b5b600061110b84828501610eea565b91505092915050565b6000806040838503121561112b5761112a611ae4565b5b600061113985828601610eea565b925050602061114a85828601610ea7565b9150509250929050565b60006020828403121561116a57611169611ae4565b5b600061117884828501610eff565b91505092915050565b6000806000806080858703121561119b5761119a611ae4565b5b60006111a987828801610f42565b945050602085013567ffffffffffffffff8111156111ca576111c9611adf565b5b6111d687828801610ebc565b935050604085013567ffffffffffffffff8111156111f7576111f6611adf565b5b61120387828801610ebc565b925050606085013567ffffffffffffffff81111561122457611223611adf565b5b61123087828801610ebc565b91505092959194509250565b6000806040838503121561125357611252611ae4565b5b600061126185828601610f42565b925050602061127285828601610f57565b9150509250929050565b60008060006060848603121561129557611294611ae4565b5b60006112a386828701610f42565b93505060206112b486828701610f57565b92505060406112c586828701610f57565b9150509250925092565b6000602082840312156112e5576112e4611ae4565b5b60006112f384828501610f6c565b91505092915050565b6000611308838361150f565b60208301905092915050565b61131d816118e0565b82525050565b600061132e826117c4565b61133881856117f2565b9350611343836117b4565b8060005b8381101561137457815161135b88826112fc565b9750611366836117e5565b925050600181019050611347565b5085935050505092915050565b61138a816118f2565b82525050565b611399816118fe565b82525050565b6113a881611908565b82525050565b60006113b9826117cf565b6113c38185611803565b93506113d38185602086016119b5565b6113dc81611ae9565b840191505092915050565b6113f081611970565b82525050565b6000611401826117da565b61140b8185611814565b935061141b8185602086016119b5565b61142481611ae9565b840191505092915050565b600061143a826117da565b6114448185611825565b93506114548185602086016119b5565b80840191505092915050565b600061146d602083611814565b915061147882611afa565b602082019050919050565b6000611490603a83611814565b915061149b82611b23565b604082019050919050565b60006114b3601783611825565b91506114be82611b72565b601782019050919050565b60006114d6601183611825565b91506114e182611b9b565b601182019050919050565b60006114f9602f83611814565b915061150482611bc4565b604082019050919050565b61151881611966565b82525050565b61152781611966565b82525050565b6000611538826114a6565b9150611544828561142f565b915061154f826114c9565b915061155b828461142f565b91508190509392505050565b600060208201905061157c6000830184611314565b92915050565b600060a0820190506115976000830188611314565b6115a46020830187611314565b81810360408301526115b68186611323565b905081810360608301526115ca8185611323565b905081810360808301526115de81846113ae565b90509695505050505050565b600060a0820190506115ff6000830188611314565b61160c6020830187611314565b611619604083018661151e565b611626606083018561151e565b818103608083015261163881846113ae565b90509695505050505050565b60006020820190506116596000830184611381565b92915050565b60006020820190506116746000830184611390565b92915050565b600060208201905061168f600083018461139f565b92915050565b60006020820190506116aa60008301846113e7565b92915050565b600060208201905081810360008301526116ca81846113f6565b905092915050565b600060208201905081810360008301526116eb81611460565b9050919050565b6000602082019050818103600083015261170b81611483565b9050919050565b6000602082019050818103600083015261172b816114ec565b9050919050565b600061173c61174d565b90506117488282611a12565b919050565b6000604051905090565b600067ffffffffffffffff82111561177257611771611aa1565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561179e5761179d611aa1565b5b6117a782611ae9565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061183b82611966565b915061184683611966565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561187b5761187a611a43565b5b828201905092915050565b600061189182611966565b915061189c83611966565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156118d5576118d4611a43565b5b828202905092915050565b60006118eb82611946565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600061193f826118e0565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061197b82611982565b9050919050565b600061198d82611994565b9050919050565b600061199f82611946565b9050919050565b82818337600083830152505050565b60005b838110156119d35780820151818401526020810190506119b8565b838111156119e2576000848401525b50505050565b60006119f382611966565b91506000821415611a0757611a06611a43565b5b600182039050919050565b611a1b82611ae9565b810181811067ffffffffffffffff82111715611a3a57611a39611aa1565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b7f4120636c61696d657220286d73672e73656e64657229206d757374206861732060008201527f6d6f7265207468616e2031205265746972656d656e74204e4654000000000000602082015250565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b611c1c816118e0565b8114611c2757600080fd5b50565b611c33816118fe565b8114611c3e57600080fd5b50565b611c4a81611908565b8114611c5557600080fd5b50565b611c6181611934565b8114611c6c57600080fd5b50565b611c7881611966565b8114611c8357600080fd5b5056fea2646970667358221220ab9fa5326098f61711ac0f6ea756220dda87f2911474844963d3af4d0518300864736f6c63430008070033a264697066735822122045d56cfe76adb8bb6b3ab1a62703ec561e0108de4bf10997ea23ec4353b7d88d64736f6c63430008070033";

type TicketManagerFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TicketManagerFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TicketManagerFactory__factory extends ContractFactory {
  constructor(...args: TicketManagerFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TicketManagerFactory";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TicketManagerFactory> {
    return super.deploy(overrides || {}) as Promise<TicketManagerFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TicketManagerFactory {
    return super.attach(address) as TicketManagerFactory;
  }
  connect(signer: Signer): TicketManagerFactory__factory {
    return super.connect(signer) as TicketManagerFactory__factory;
  }
  static readonly contractName: "TicketManagerFactory";
  public readonly contractName: "TicketManagerFactory";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TicketManagerFactoryInterface {
    return new utils.Interface(_abi) as TicketManagerFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TicketManagerFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TicketManagerFactory;
  }
}