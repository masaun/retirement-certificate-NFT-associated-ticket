// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import { TicketManager } from "./TicketManager.sol";

//@dev - Interfaces
import { ITicketManagerFactory } from "./interfaces/ITicketManagerFactory.sol";
import { IRetirementCertificateNFTAssociatedTicket } from "./interfaces/IRetirementCertificateNFTAssociatedTicket.sol";

//@dev - Struct, Enum, Event, etc
import { DataTypes } from "./libraries/DataTypes.sol";
import { Events } from "./libraries/Events.sol";

//@dev - OpenZeppeling
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";


/**
 * @title - The Ticket Manager Factory contract
 * @dev - [NOTE]: Implementation of Access Control (Role Management) is still in progress
 */
contract TicketManagerFactory is ITicketManagerFactory, AccessControl {

    constructor() {
        //@dev - Grant admin role to caller (msg.sender)
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /**
     * @notice - Create a new TicketManager contract
     * @param _retirementCertificateNFTAssociatedTicket - RetirementCertificateNFTAssociatedTicket that is managed by new TicketManager contract
     */
    function createTicketManager(IRetirementCertificateNFTAssociatedTicket _retirementCertificateNFTAssociatedTicket) public override {
        //@dev - Create a new TicketManager contract
        TicketManager ticketManager = new TicketManager(_retirementCertificateNFTAssociatedTicket);

        //@dev - [TODO]: Save a metadata of new TicketManager created above

        //@dev - Emit information of a new TicketManager contract created
        emit Events.TicketManagerCreated(ticketManager, _retirementCertificateNFTAssociatedTicket);
    }

}