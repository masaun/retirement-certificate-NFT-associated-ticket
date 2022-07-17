// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import { IRetirementCertificateNFTAssociatedTicket } from "./IRetirementCertificateNFTAssociatedTicket.sol";
import { ITicketManager } from "./ITicketManager.sol";

import { DataTypes } from '../libraries/DataTypes.sol';


interface ITicketManagerFactory {

    /**
     * @notice - Create a new TicketManager contract
     * @param _retirementCertificateNFTAssociatedTicket - RetirementCertificateNFTAssociatedTicket that is managed by new TicketManager contract
     */
    function createTicketManager(IRetirementCertificateNFTAssociatedTicket _retirementCertificateNFTAssociatedTicket) external;

    /**
     * @notice - Event of information of a new TicketManager contract created
     */
    event TicketManagerCreated(
        ITicketManager ticketManager,
        IRetirementCertificateNFTAssociatedTicket retirementCertificateNFTAssociatedTicket
    );

}