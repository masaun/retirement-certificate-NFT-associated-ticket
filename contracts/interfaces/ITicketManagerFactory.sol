// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import { IRetirementCertificateNFTAssociatedTicket } from "./IRetirementCertificateNFTAssociatedTicket.sol";

import { DataTypes } from '../libraries/DataTypes.sol';


interface ITicketManagerFactory {

    /**
     * @notice - Create a new TicketManager contract
     * @param _retirementCertificateNFTAssociatedTicket - RetirementCertificateNFTAssociatedTicket that is managed by new TicketManager contract
     */
    function createTicketManager(IRetirementCertificateNFTAssociatedTicket _retirementCertificateNFTAssociatedTicket) external;

}