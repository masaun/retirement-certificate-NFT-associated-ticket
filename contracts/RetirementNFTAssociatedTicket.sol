// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

//@dev - Interfaces
import { IRetirementNFTAssociatedTicket } from "./interfaces/IRetirementNFTAssociatedTicket.sol";
import { IRetirementNFTAssociatedTicketFactory } from "./interfaces/IRetirementNFTAssociatedTicketFactory.sol";

//@dev - RNG (Random Number Generated) via Chainlink VRF
import { IRandomNumberGeneratorV2 } from "./interfaces/IRandomNumberGeneratorV2.sol";

//@dev - Retirement NFT
import { IRetirementNFT } from "./interfaces/IRetirementNFT.sol";

//@dev - Chainlink VRF
import { VRFCoordinatorV2Mock } from "./chainlink-examples/test/VRFCoordinatorV2Mock.sol";

//@dev - OpenZeppelin
import { ERC1155 } from "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
//import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";

//@dev - Struct, Enum, etc
import { DataTypes } from "./libraries/DataTypes.sol";

//@dev - Debugging
import "hardhat/console.sol";


/**
 * @title - The Retirement NFT associated Ticket contract (ERC1155)
 */
contract RetirementNFTAssociatedTicket is IRetirementNFTAssociatedTicket, ERC1155, AccessControl {

    IRandomNumberGeneratorV2 public rngV2;
    VRFCoordinatorV2Mock public vrfCoordinatorV2;

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
    constructor(IRandomNumberGeneratorV2 _rngV2, string memory _uri, IRetirementNFTAssociatedTicketFactory _retirementNFTAssociatedTicketFactory, VRFCoordinatorV2Mock _vrfCoordinatorV2) ERC1155("") {
        rngV2 = _rngV2;
        vrfCoordinatorV2 = _vrfCoordinatorV2;

        //@dev - Grant admin role to caller (msg.sender)
        _grantRole(DEFAULT_ADMIN_ROLE, address(_retirementNFTAssociatedTicketFactory));  // Factory contract address
        _grantRole(URI_SETTER_ROLE, address(_retirementNFTAssociatedTicketFactory));     // Factory contract address
        _grantRole(MINTER_ROLE, address(_retirementNFTAssociatedTicketFactory));         // Factory contract address

        //@dev - Set a URI (image, etc) to the ERC1155 NFT
        //@dev - NOTE: This method is able to be called by the wallet address that has a "URI_SETTER_ROLE" role.
        setURI(_uri);
    }

    /**
     * @notice - Set a new URI (image, etc) for ERC1155 NFT
     */ 
    //function setURI(string memory newURI) public {
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
    function saveRetirementNFTAssociatedTicketMetadata(IRetirementNFT retirementNFT) public override {
        //@dev - Generate Random Number via Chainlink VRF
        rngV2.requestRandomWords();

        //@dev - Get requestId
        uint256 requestId = rngV2.getSRequestId();
        console.log("-------------- requestId: %d --------------", requestId);  // [Result]:Success to retrieve value

        //@dev - Execute fulfillRandomWords() method to get callback
        vrfCoordinatorV2.fulfillRandomWords(requestId, address(rngV2));

        //@dev - Get value of RNs (random nubmers) that is stored in s_randomWords by above
        uint256 randomNumber = rngV2.getSRandomWord();
        console.log("-------------- randomNumber: %s --------------", randomNumber);  // [Result]: Success

        uint256[] memory randomNumbers = rngV2.getSRandomWords();

        //@dev - Bundle (Save) a RN retrieved with RetirementNFT Ticket
        address RETIREMENT_NFT = address(retirementNFT);
        console.log("-------------- RETIREMENT_NFT: %s --------------", RETIREMENT_NFT);  // [Result]: Success to retrieve value

        DataTypes.RetirementNFTAssociatedTicketMetadata storage retirementNFTAssociatedTicketMetadata = retirementNFTAssociatedTicketMetadatas[RETIREMENT_NFT];
        retirementNFTAssociatedTicketMetadata.ticketHolder = 0x0000000000000000000000000000000000000000;  // [TODO]: Assign actual wallet address 
        //retirementNFTAssociatedTicketMetadata.randomNumber = randomNumber;
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