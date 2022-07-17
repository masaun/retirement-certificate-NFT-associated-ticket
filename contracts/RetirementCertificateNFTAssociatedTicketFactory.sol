// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

//@dev - Interfaces
import { IRetirementCertificateNFTAssociatedTicketFactory } from "./interfaces/IRetirementCertificateNFTAssociatedTicketFactory.sol";

//@dev - RNG (Random Number Generated) via Chainlink VRF
import { IRandomNumberGeneratorV2 } from "./interfaces/IRandomNumberGeneratorV2.sol";

//@dev - RetirementCertificateNFT-associated ticket
import { RetirementCertificateNFTAssociatedTicket } from "./RetirementCertificateNFTAssociatedTicket.sol";

//@dev - Retirement NFT
import { IRetirementCertificateNFT } from "./interfaces/IRetirementCertificateNFT.sol";

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
contract RetirementCertificateNFTAssociatedTicketFactory is IRetirementCertificateNFTAssociatedTicketFactory, AccessControl {

    //@dev - contract instances
    IRandomNumberGeneratorV2 public rngV2;
    VRFCoordinatorV2Mock public vrfCoordinatorV2;

    //@dev - Storages
    mapping (address => DataTypes.RetirementCertificateNFTAssociatedTicketMetadata) retirementCertificateNFTAssociatedTicketMetadatas;

    //@dev - Roles
    address private ticketCreator;
    bytes32 public constant TICKET_CREATOR_ROLE = keccak256("TICKET_CREATOR_ROLE");


    /**
     * @notice - Constructor
     */ 
    constructor(IRandomNumberGeneratorV2 _rngV2, VRFCoordinatorV2Mock _vrfCoordinatorV2) {
        rngV2 = _rngV2;
        vrfCoordinatorV2 = _vrfCoordinatorV2;

        //@dev - Grant admin role to caller (msg.sender)
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);  // Deployer address
        _grantRole(TICKET_CREATOR_ROLE, msg.sender);  // Deployer address
        ticketCreator = msg.sender;                  // Deployer address
    }


    /**
     * @notice - Create a new RetirementCertificateNFTAssociatedTicket with RNG via Chainlink VRF
     */
    function createRetirementCertificateNFTAssociatedTicket(address to, uint ticketType, uint mintAmount, IRetirementCertificateNFT retirementCertificateNFT, string memory uri) public override onlyRole(TICKET_CREATOR_ROLE) {
        //@dev - [TODO]: Add require() method for checking whether "to" address has a RetiermentNFT or not

        //@dev - Create a new RetirementCertificateNFTAssociatedTicket
        RetirementCertificateNFTAssociatedTicket retirementCertificateNFTAssociatedTicket = new RetirementCertificateNFTAssociatedTicket(retirementCertificateNFT, ticketCreator, rngV2, uri, this, vrfCoordinatorV2);

        //@dev - Save a metadata of RetirementCertificateNFTAssociatedTicket
        retirementCertificateNFTAssociatedTicket.saveRetirementCertificateNFTAssociatedTicketMetadata(retirementCertificateNFT);

        //@dev - Emit information of a new RetirementCertificateNFTAssociatedTicket created
        emit RetirementCertificateNFTAssociatedTicketCreated(retirementCertificateNFTAssociatedTicket, to, ticketType, mintAmount, retirementCertificateNFT, uri);
    }

    /**
     * @notice - Create batch RetirementCertificateNFTAssociatedTicket with RNG via Chainlink VRF
     */ 
    function createBatchRetirementCertificateNFTAssociatedTicket(address to, uint256[] memory ticketTypes, uint256[] memory mintAmounts, IRetirementCertificateNFT retirementCertificateNFT, string memory uri) public override onlyRole(TICKET_CREATOR_ROLE) {

        //@dev - Create a new RetirementCertificateNFTAssociatedTicket
        RetirementCertificateNFTAssociatedTicket retirementCertificateNFTAssociatedTicket = new RetirementCertificateNFTAssociatedTicket(retirementCertificateNFT, ticketCreator, rngV2, uri, this, vrfCoordinatorV2);

        //@dev - Save a metadata of RetirementCertificateNFTAssociatedTicket
        retirementCertificateNFTAssociatedTicket.saveRetirementCertificateNFTAssociatedTicketMetadata(retirementCertificateNFT);

        //@dev - Emit information of a new RetirementCertificateNFTAssociatedTicket created
        emit Events.BatchRetirementCertificateNFTAssociatedTicketCreated(retirementCertificateNFTAssociatedTicket, to, ticketTypes, mintAmounts, retirementCertificateNFT, uri);
    }

}