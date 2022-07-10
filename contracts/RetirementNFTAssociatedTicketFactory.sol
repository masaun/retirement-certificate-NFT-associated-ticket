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

//@dev - Chainlink VRF
import { VRFCoordinatorV2Mock } from "./chainlink-examples/test/VRFCoordinatorV2Mock.sol";

//@dev - OpenZeppelin
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";

//@dev - Struct, Enum, Event, etc
import { DataTypes } from "./libraries/DataTypes.sol";
import { Events } from "./libraries/Events.sol";


/**
 * @title The factory contract of the Retirement NFT associated Ticket contract
 */
contract RetirementNFTAssociatedTicketFactory is IRetirementNFTAssociatedTicketFactory, AccessControl {

    //@dev - contract instances
    IRandomNumberGeneratorV2 public rngV2;
    VRFCoordinatorV2Mock public vrfCoordinatorV2;

    //@dev - Storages
    mapping (address => DataTypes.RetirementNFTAssociatedTicketMetadata) retirementNFTAssociatedTicketMetadatas;

    //@dev - Roles
    address private ticketCreator;
    bytes32 public constant TICKET_MINTER_ROLE = keccak256("TICKET_MINTER_ROLE");


    /**
     * @notice - Constructor
     */ 
    constructor(IRandomNumberGeneratorV2 _rngV2, VRFCoordinatorV2Mock _vrfCoordinatorV2) {
        rngV2 = _rngV2;
        vrfCoordinatorV2 = _vrfCoordinatorV2;

        //@dev - Grant admin role to caller (msg.sender)
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);  // Deployer address
        _grantRole(TICKET_MINTER_ROLE, msg.sender);  // Deployer address
        ticketCreator = msg.sender;                  // Deployer address
    }


    /**
     * @notice - Create a new RetirementNFTAssociatedTicket with RNG via Chainlink VRF
     */
    function createRetirementNFTAssociatedTicket(address to, uint ticketType, uint mintAmount, IRetirementNFT retirementNFT, string memory uri) public override onlyRole(TICKET_MINTER_ROLE) {
        //@dev - [TODO]: Add require() method for checking whether "to" address has a RetiermentNFT or not

        //@dev - Create a new retirementNFTAssociatedTicket
        RetirementNFTAssociatedTicket retirementNFTAssociatedTicket = new RetirementNFTAssociatedTicket(retirementNFT, ticketCreator, rngV2, uri, this, vrfCoordinatorV2);

        //@dev - Save a metadata of RetirementNFTAssociatedTicket
        retirementNFTAssociatedTicket.saveRetirementNFTAssociatedTicketMetadata(retirementNFT);

        //@dev - Mint a new RetirementNFTAssociatedTicket
        //retirementNFTAssociatedTicket.mint(to, ticketType, mintAmount, "");

        //@dev - Emit information of a new RetirementNFTAssociatedTicket created
        emit RetirementNFTAssociatedTicketCreated(retirementNFTAssociatedTicket, to, ticketType, mintAmount, retirementNFT, uri);
        //emit Events.RetirementNFTAssociatedTicketCreated(retirementNFTAssociatedTicket, to, ticketType, mintAmount, retirementNFT, uri);
    }

    /**
     * @notice - Create batch RetirementNFTAssociatedTicket with RNG via Chainlink VRF
     */ 
    function createBatchRetirementNFTAssociatedTicket(address to, uint256[] memory ticketTypes, uint256[] memory mintAmounts, IRetirementNFT retirementNFT, string memory uri) public override onlyRole(TICKET_MINTER_ROLE) {

        //@dev - Create a new retirementNFTAssociatedTicket
        RetirementNFTAssociatedTicket retirementNFTAssociatedTicket = new RetirementNFTAssociatedTicket(retirementNFT, ticketCreator, rngV2, uri, this, vrfCoordinatorV2);

        //@dev - Save a metadata of RetirementNFTAssociatedTicket
        retirementNFTAssociatedTicket.saveRetirementNFTAssociatedTicketMetadata(retirementNFT);

        //@dev - Mint batch of RetirementNFTAssociatedTickets
        //retirementNFTAssociatedTicket.mintBatch(to, ticketTypes, mintAmounts, "");

        //@dev - Emit information of a new RetirementNFTAssociatedTicket created
        //emit BatchRetirementNFTAssociatedTicketCreated(retirementNFTAssociatedTicket, to, ticketTypes, mintAmounts, retirementNFT, uri);
        emit Events.BatchRetirementNFTAssociatedTicketCreated(retirementNFTAssociatedTicket, to, ticketTypes, mintAmounts, retirementNFT, uri);
    }

}