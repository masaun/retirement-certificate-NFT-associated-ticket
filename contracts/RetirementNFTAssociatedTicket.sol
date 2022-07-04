// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

//@dev - Interfaces
import { IRetirementNFTAssociatedTicket } from "./interfaces/IRetirementNFTAssociatedTicket.sol";
import { IRetirementNFTAssociatedTicketFactory } from "./interfaces/IRetirementNFTAssociatedTicketFactory.sol";

//@dev - RNG (Random Number Generated) via Chainlink VRF
import { IRandomNumberGeneratorV2 } from "./interfaces/IRandomNumberGeneratorV2.sol";

//@dev - Retirement NFT
import { IRetirementNFT } from "./interfaces/IRetirementNFT.sol";

//@dev - OpenZeppelin
import { ERC1155 } from "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
//import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";


//@dev - Struct, Enum, etc
import { DataTypes } from "./libraries/DataTypes.sol";


/**
 * @title The Retirement NFT associated Ticket contract
 */
contract RetirementNFTAssociatedTicket is IRetirementNFTAssociatedTicket, ERC1155, AccessControl {

    IRandomNumberGeneratorV2 public rngV2;

    //@dev - Storages
    mapping (address => DataTypes.RetirementNFTAssociatedTicketMetadata) retirementNFTAssociatedTicketMetadatas;

    //@dev - Roles
    bytes32 public constant URI_SETTER_ROLE = keccak256("URI_SETTER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    //@dev - Ticket types
    uint256 public constant TICKET_TYPE_1 = 0;
    //uint256 public constant TICKET_TYPE_2 = 1;
    //uint256 public constant TICKET_TYPE_3 = 2;

    /**
     * @notice - Constructor
     */ 
    constructor(IRandomNumberGeneratorV2 _rngV2, string memory _uri, IRetirementNFTAssociatedTicketFactory _retirementNFTAssociatedTicketFactory) ERC1155("") {
        rngV2 = _rngV2;

        //@dev - Set a URI (image, etc) to the ERC1155 NFT
        setURI(_uri);

        //@dev - Grant admin role to caller (msg.sender)
        _grantRole(DEFAULT_ADMIN_ROLE, address(_retirementNFTAssociatedTicketFactory));  // Factory contract address
        _grantRole(URI_SETTER_ROLE, address(_retirementNFTAssociatedTicketFactory));     // Factory contract address
        _grantRole(MINTER_ROLE, address(_retirementNFTAssociatedTicketFactory));         // Factory contract address
    }

    /**
     * @notice - Check whether a caller (msg.sender) has the RetirementNFT or not
     */ 
    modifier onlyRetirementNFTHolder(address caller) {
        // [TODO]: The method for checking whether a caller (msg.sender) has the RetirementNFT or not
        _;
    }

    /**
     * @notice - Set a new URI (image, etc) for ERC1155 NFT
     */ 
    function setURI(string memory newURI) internal onlyRole(URI_SETTER_ROLE) {
        _setURI(newURI);
    }

    /**
     * @notice - Mint a retirementNFTAssociatedTicket
     */ 
    function mint(address to, uint256 ticketType, uint256 mintAmount, bytes memory data)
        public 
        override
        onlyRole(MINTER_ROLE)
    {
        _mint(to, ticketType, mintAmount, data);
    }

    /**
     * @notice - Mint batch of retirementNFTAssociatedTicket
     */
    function mintBatch(address to, uint256[] memory ticketTypes, uint256[] memory mintAmounts, bytes memory data)
        public
        override
        onlyRole(MINTER_ROLE)
    {
        _mintBatch(to, ticketTypes, mintAmounts, data);
    }

    /**
     * @notice - Save a metadata of RetirementNFTAssociatedTicket
     */ 
    function saveRetirementNFTAssociatedTicketMetadata(IRetirementNFT retirementNFT, uint256[] memory randomNumbers) public override {
        //@dev - Bundle (Save) a RN retrieved with RetirementNFT Ticket
        address RETIREMENT_NFT = address(retirementNFT);
        DataTypes.RetirementNFTAssociatedTicketMetadata storage retirementNFTAssociatedTicketMetadata = retirementNFTAssociatedTicketMetadatas[RETIREMENT_NFT];
        retirementNFTAssociatedTicketMetadata.ticketHolder = address(0);  // [TODO]: Assign actual wallet address 
        retirementNFTAssociatedTicketMetadata.randomNumber = randomNumbers[0];
    }


    /**
     * @notice - This method is required for Role-based access control of ERC1155 by using OpenZeppelin's AccessControl.sol
     */ 
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC1155, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

}