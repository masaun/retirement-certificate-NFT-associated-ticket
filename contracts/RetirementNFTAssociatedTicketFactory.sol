// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

//@dev - Interfaces
import { IRetirementNFTAssociatedTicketFactory } from "./interfaces/IRetirementNFTAssociatedTicketFactory.sol";

//@dev - RNG (Random Number Generated) via Chainlink VRF
import { IRandomNumberGeneratorV2 } from "./interfaces/IRandomNumberGeneratorV2.sol";

//@dev - RetirementNFT-associated ticket
import { RetirementNFTAssociatedTicket } from "./RetirementNFTAssociatedTicket.sol";

//@dev - Retirement NFT
import { IRetirementNFT } from "./interfaces/IRetirementNFT.sol";

//@dev - OpenZeppelin
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";

//@dev - Struct, Enum, etc
import { DataTypes } from "./libraries/DataTypes.sol";


/**
 * @title The factory contract of the Retirement NFT associated Ticket contract
 */
contract RetirementNFTAssociatedTicketFactory is IRetirementNFTAssociatedTicketFactory, AccessControl {

    //@dev - contract instances
    IRandomNumberGeneratorV2 public rngV2;

    //@dev - Storages
    mapping (address => DataTypes.RetirementNFTAssociatedTicketMetadata) retirementNFTAssociatedTicketMetadatas;

    //@dev - Roles
    bytes32 public constant TICKET_MINTER_ROLE = keccak256("TICKET_MINTER_ROLE");

    /**
     * @notice - Constructor
     */ 
    constructor(IRandomNumberGeneratorV2 _rngV2) {
        rngV2 = _rngV2;

        //@dev - Grant admin role to caller (msg.sender)
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(TICKET_MINTER_ROLE, msg.sender);
    }


    /**
     * @notice - Mint a new RetirementNFTAssociatedTicket with RNG via Chainlink VRF
     */ 
    function mintRetirementNFTAssociatedTicket(address to, uint ticketType, uint mintAmount, IRetirementNFT retirementNFT, string memory uri) public override onlyRole(TICKET_MINTER_ROLE) {
        //@dev - [TODO]: Add require() method for checking whether "to" address has a RetiermentNFT or not

        // //@dev - Generate Random Number via Chainlink VRF
        // rngV2.requestRandomWords();
        
        // //@dev - Get value of RNs (random nubmers) that is stored in s_randomWords by above
        // uint256[] memory randomNumbers = rngV2.getSRandomWords();

        //@dev - Create a new retirementNFTAssociatedTicket
        RetirementNFTAssociatedTicket retirementNFTAssociatedTicket = new RetirementNFTAssociatedTicket(rngV2, uri, this);

        //@dev - Save a metadata of RetirementNFTAssociatedTicket
        //@dev - [Error]: "panic code 0x32 (Array accessed at an out-of-bounds or negative index)" 
        retirementNFTAssociatedTicket.saveRetirementNFTAssociatedTicketMetadata(retirementNFT);
        //retirementNFTAssociatedTicket.saveRetirementNFTAssociatedTicketMetadata(retirementNFT, randomNumbers);

        //@dev - Mint a new RetirementNFTAssociatedTicket
        //retirementNFTAssociatedTicket.mint(to, ticketType, mintAmount, "");
    }

    /**
     * @notice - Mint batch RetirementNFTAssociatedTicket with RNG via Chainlink VRF
     */ 
    function mintBatchRetirementNFTAssociatedTicket(address to, uint256[] memory ticketTypes, uint256[] memory mintAmounts, IRetirementNFT retirementNFT, string memory uri) public override onlyRole(TICKET_MINTER_ROLE) {

        // //@dev - Generate Random Number via Chainlink VRF
        // rngV2.requestRandomWords();
        
        // //@dev - Get value of RNs (random nubmers) that is stored in s_randomWords by above
        // uint256[] memory randomNumbers = rngV2.getSRandomWords();

        //@dev - Create a new retirementNFTAssociatedTicket
        RetirementNFTAssociatedTicket retirementNFTAssociatedTicket = new RetirementNFTAssociatedTicket(rngV2, uri, this);

        //@dev - Save a metadata of RetirementNFTAssociatedTicket
        //@dev - [Error]: "panic code 0x32 (Array accessed at an out-of-bounds or negative index)" 
        retirementNFTAssociatedTicket.saveRetirementNFTAssociatedTicketMetadata(retirementNFT);
        //retirementNFTAssociatedTicket.saveRetirementNFTAssociatedTicketMetadata(retirementNFT, randomNumbers);

        //@dev - Mint batch of RetirementNFTAssociatedTickets
        retirementNFTAssociatedTicket.mintBatch(to, ticketTypes, mintAmounts, "");
    }

}