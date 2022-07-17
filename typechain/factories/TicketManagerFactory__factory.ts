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
  "0x608060405234801561001057600080fd5b506100246000801b3361002960201b60201c565b610187565b610039828261011560201b60201c565b61011157600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506100b661017f60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b6126ee806101966000396000f3fe60806040523480156200001157600080fd5b5060043610620000945760003560e01c806391d14854116200006357806391d148541462000145578063a217fddf146200017b578063d547741f146200019d578063da7224fb14620001bd5762000094565b806301ffc9a71462000099578063248a9ca314620000cf5780632f2ff15d146200010557806336568abe1462000125575b600080fd5b620000b76004803603810190620000b1919062000a79565b620001dd565b604051620000c6919062000c77565b60405180910390f35b620000ed6004803603810190620000e7919062000a00565b6200025a565b604051620000fc919062000c94565b60405180910390f35b6200012360048036038101906200011d919062000a32565b62000279565b005b6200014360048036038101906200013d919062000a32565b620002a0565b005b6200016360048036038101906200015d919062000a32565b6200032a565b60405162000172919062000c77565b60405180910390f35b6200018562000394565b60405162000194919062000c94565b60405180910390f35b620001bb6004803603810190620001b5919062000a32565b6200039b565b005b620001db6004803603810190620001d5919062000aab565b620003c2565b005b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148062000253575062000252826200043e565b5b9050919050565b6000806000838152602001908152602001600020600101549050919050565b62000284826200025a565b6200028f81620004a8565b6200029b8383620004c0565b505050565b620002aa620005a5565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146200031a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003119062000d41565b60405180910390fd5b620003268282620005ad565b5050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b620003a6826200025a565b620003b181620004a8565b620003bd8383620005ad565b505050565b600081604051620003d39062000996565b620003df919062000cb1565b604051809103906000f080158015620003fc573d6000803e3d6000fd5b5090507fe5cba664b6c10a689ae696b210811e7f51da3260d459f60ee1e232d8d39f11c981836040516200043292919062000cce565b60405180910390a15050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b620004bd81620004b7620005a5565b62000693565b50565b620004cc82826200032a565b620005a157600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555062000546620005a5565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600033905090565b620005b982826200032a565b156200068f57600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555062000634620005a5565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b6200069f82826200032a565b6200073757620006c78173ffffffffffffffffffffffffffffffffffffffff1660146200073b565b620006d78360001c60206200073b565b604051602001620006ea92919062000c35565b6040516020818303038152906040526040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200072e919062000cfb565b60405180910390fd5b5050565b60606000600283600262000750919062000de7565b6200075c919062000d8a565b67ffffffffffffffff81111562000778576200077762000fef565b5b6040519080825280601f01601f191660200182016040528015620007ab5781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110620007e657620007e562000fc0565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106200084d576200084c62000fc0565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600060018460026200088f919062000de7565b6200089b919062000d8a565b90505b600181111562000945577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110620008e157620008e062000fc0565b5b1a60f81b828281518110620008fb57620008fa62000fc0565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c9450806200093d9062000f62565b90506200089e565b50600084146200098c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620009839062000d1f565b60405180910390fd5b8091505092915050565b611552806200116783390190565b600081359050620009b581620010fe565b92915050565b600081359050620009cc8162001118565b92915050565b600081359050620009e38162001132565b92915050565b600081359050620009fa816200114c565b92915050565b60006020828403121562000a195762000a186200101e565b5b600062000a2984828501620009bb565b91505092915050565b6000806040838503121562000a4c5762000a4b6200101e565b5b600062000a5c85828601620009bb565b925050602062000a6f85828601620009a4565b9150509250929050565b60006020828403121562000a925762000a916200101e565b5b600062000aa284828501620009d2565b91505092915050565b60006020828403121562000ac45762000ac36200101e565b5b600062000ad484828501620009e9565b91505092915050565b62000ae88162000e5c565b82525050565b62000af98162000e68565b82525050565b62000b0a8162000edc565b82525050565b62000b1b8162000ef0565b82525050565b600062000b2e8262000d63565b62000b3a818562000d6e565b935062000b4c81856020860162000f2c565b62000b578162001023565b840191505092915050565b600062000b6f8262000d63565b62000b7b818562000d7f565b935062000b8d81856020860162000f2c565b80840191505092915050565b600062000ba860208362000d6e565b915062000bb58262001034565b602082019050919050565b600062000bcf60178362000d7f565b915062000bdc826200105d565b601782019050919050565b600062000bf660118362000d7f565b915062000c038262001086565b601182019050919050565b600062000c1d602f8362000d6e565b915062000c2a82620010af565b604082019050919050565b600062000c428262000bc0565b915062000c50828562000b62565b915062000c5d8262000be7565b915062000c6b828462000b62565b91508190509392505050565b600060208201905062000c8e600083018462000add565b92915050565b600060208201905062000cab600083018462000aee565b92915050565b600060208201905062000cc8600083018462000aff565b92915050565b600060408201905062000ce5600083018562000b10565b62000cf4602083018462000aff565b9392505050565b6000602082019050818103600083015262000d17818462000b21565b905092915050565b6000602082019050818103600083015262000d3a8162000b99565b9050919050565b6000602082019050818103600083015262000d5c8162000c0e565b9050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600062000d978262000ed2565b915062000da48362000ed2565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000ddc5762000ddb62000f91565b5b828201905092915050565b600062000df48262000ed2565b915062000e018362000ed2565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161562000e3d5762000e3c62000f91565b5b828202905092915050565b600062000e558262000eb2565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600062000eab8262000e48565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600062000ee98262000f04565b9050919050565b600062000efd8262000f04565b9050919050565b600062000f118262000f18565b9050919050565b600062000f258262000eb2565b9050919050565b60005b8381101562000f4c57808201518184015260208101905062000f2f565b8381111562000f5c576000848401525b50505050565b600062000f6f8262000ed2565b9150600082141562000f865762000f8562000f91565b5b600182039050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b6000601f19601f8301169050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b620011098162000e48565b81146200111557600080fd5b50565b620011238162000e68565b81146200112f57600080fd5b50565b6200113d8162000e72565b81146200114957600080fd5b50565b620011578162000e9e565b81146200116357600080fd5b5056fe60806040523480156200001157600080fd5b50604051620015523803806200155283398181016040528101906200003791906200020e565b6200004c6000801b336200009460201b60201c565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050620002a7565b620000a682826200018560201b60201c565b6200018157600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555062000126620001ef60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b60008151905062000208816200028d565b92915050565b60006020828403121562000227576200022662000288565b5b60006200023784828501620001f7565b91505092915050565b60006200024d8262000268565b9050919050565b6000620002618262000240565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b620002988162000254565b8114620002a457600080fd5b50565b61129b80620002b76000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806391d148541161006657806391d148541461016b578063a217fddf1461019b578063a75c2447146101b9578063c786b889146101e9578063d547741f146102075761009e565b806301ffc9a7146100a35780631256c574146100d3578063248a9ca3146101035780632f2ff15d1461013357806336568abe1461014f575b600080fd5b6100bd60048036038101906100b89190610aee565b610223565b6040516100ca9190610dbc565b60405180910390f35b6100ed60048036038101906100e89190610b5b565b61029d565b6040516100fa9190610dbc565b60405180910390f35b61011d60048036038101906101189190610a81565b6102b0565b60405161012a9190610dd7565b60405180910390f35b61014d60048036038101906101489190610aae565b6102cf565b005b61016960048036038101906101649190610aae565b6102f0565b005b61018560048036038101906101809190610aae565b610373565b6040516101929190610dbc565b60405180910390f35b6101a36103dd565b6040516101b09190610dd7565b60405180910390f35b6101d360048036038101906101ce9190610b1b565b6103e4565b6040516101e09190610dbc565b60405180910390f35b6101f16103ec565b6040516101fe9190610df2565b60405180910390f35b610221600480360381019061021c9190610aae565b610412565b005b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610296575061029582610433565b5b9050919050565b60006102a88261049d565b509392505050565b6000806000838152602001908152602001600020600101549050919050565b6102d8826102b0565b6102e181610562565b6102eb8383610576565b505050565b6102f8610656565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610365576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035c90610e4f565b60405180910390fd5b61036f828261065e565b5050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b600092915050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61041b826102b0565b61042481610562565b61042e838361065e565b505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000803090506000339050600080600190506000604051806020016040528060008152509050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d9999ca886868686866040518663ffffffff1660e01b8152600401610526959493929190610d62565b600060405180830381600087803b15801561054057600080fd5b505af1158015610554573d6000803e3d6000fd5b505050505050505050919050565b6105738161056e610656565b61073f565b50565b6105808282610373565b61065257600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506105f7610656565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600033905090565b6106688282610373565b1561073b57600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506106e0610656565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b6107498282610373565b6107d85761076e8173ffffffffffffffffffffffffffffffffffffffff1660146107dc565b61077c8360001c60206107dc565b60405160200161078d929190610d28565b6040516020818303038152906040526040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107cf9190610e0d565b60405180910390fd5b5050565b6060600060028360026107ef9190610f08565b6107f99190610eb2565b67ffffffffffffffff811115610812576108116110e3565b5b6040519080825280601f01601f1916602001820160405280156108445781602001600182028036833780820191505090505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061087c5761087b6110b4565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106108e0576108df6110b4565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600060018460026109209190610f08565b61092a9190610eb2565b90505b60018111156109ca577f3031323334353637383961626364656600000000000000000000000000000000600f86166010811061096c5761096b6110b4565b5b1a60f81b828281518110610983576109826110b4565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c9450806109c39061105b565b905061092d565b5060008414610a0e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0590610e2f565b60405180910390fd5b8091505092915050565b600081359050610a27816111f2565b92915050565b600081359050610a3c81611209565b92915050565b600081359050610a5181611220565b92915050565b600081359050610a6681611237565b92915050565b600081359050610a7b8161124e565b92915050565b600060208284031215610a9757610a96611112565b5b6000610aa584828501610a2d565b91505092915050565b60008060408385031215610ac557610ac4611112565b5b6000610ad385828601610a2d565b9250506020610ae485828601610a18565b9150509250929050565b600060208284031215610b0457610b03611112565b5b6000610b1284828501610a42565b91505092915050565b60008060408385031215610b3257610b31611112565b5b6000610b4085828601610a57565b9250506020610b5185828601610a6c565b9150509250929050565b600080600060608486031215610b7457610b73611112565b5b6000610b8286828701610a57565b9350506020610b9386828701610a6c565b9250506040610ba486828701610a6c565b9150509250925092565b610bb781610f62565b82525050565b610bc681610f74565b82525050565b610bd581610f80565b82525050565b6000610be682610e6f565b610bf08185610e85565b9350610c00818560208601611028565b610c0981611117565b840191505092915050565b610c1d81610ff2565b82525050565b6000610c2e82610e7a565b610c388185610e96565b9350610c48818560208601611028565b610c5181611117565b840191505092915050565b6000610c6782610e7a565b610c718185610ea7565b9350610c81818560208601611028565b80840191505092915050565b6000610c9a602083610e96565b9150610ca582611128565b602082019050919050565b6000610cbd601783610ea7565b9150610cc882611151565b601782019050919050565b6000610ce0601183610ea7565b9150610ceb8261117a565b601182019050919050565b6000610d03602f83610e96565b9150610d0e826111a3565b604082019050919050565b610d2281610fe8565b82525050565b6000610d3382610cb0565b9150610d3f8285610c5c565b9150610d4a82610cd3565b9150610d568284610c5c565b91508190509392505050565b600060a082019050610d776000830188610bae565b610d846020830187610bae565b610d916040830186610d19565b610d9e6060830185610d19565b8181036080830152610db08184610bdb565b90509695505050505050565b6000602082019050610dd16000830184610bbd565b92915050565b6000602082019050610dec6000830184610bcc565b92915050565b6000602082019050610e076000830184610c14565b92915050565b60006020820190508181036000830152610e278184610c23565b905092915050565b60006020820190508181036000830152610e4881610c8d565b9050919050565b60006020820190508181036000830152610e6881610cf6565b9050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000610ebd82610fe8565b9150610ec883610fe8565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610efd57610efc611085565b5b828201905092915050565b6000610f1382610fe8565b9150610f1e83610fe8565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610f5757610f56611085565b5b828202905092915050565b6000610f6d82610fc8565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6000610fc182610f62565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610ffd82611004565b9050919050565b600061100f82611016565b9050919050565b600061102182610fc8565b9050919050565b60005b8381101561104657808201518184015260208101905061102b565b83811115611055576000848401525b50505050565b600061106682610fe8565b9150600082141561107a57611079611085565b5b600182039050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b6000601f19601f8301169050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b6111fb81610f62565b811461120657600080fd5b50565b61121281610f80565b811461121d57600080fd5b50565b61122981610f8a565b811461123457600080fd5b50565b61124081610fb6565b811461124b57600080fd5b50565b61125781610fe8565b811461126257600080fd5b5056fea2646970667358221220ecf52d167362b834723e00b2c59f2305c325486e6c08f6ea9ad1b2c6688de9d864736f6c63430008070033a2646970667358221220b4234fdde0c0576e8e7136dc6d47825578e2ad8ecf7d12138c471a38ab6329ad64736f6c63430008070033";

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
