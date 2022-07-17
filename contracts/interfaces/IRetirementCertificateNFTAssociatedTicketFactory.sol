// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import { DataTypes } from '../libraries/DataTypes.sol';
import { Events } from "../libraries/Events.sol";

import { ITicketManager } from "./ITicketManager.sol";
import { IRetirementCertificateNFT } from "./IRetirementCertificateNFT.sol";

//@dev - RetirementCertificateNFT-associated ticket
import { RetirementCertificateNFTAssociatedTicket } from "../RetirementCertificateNFTAssociatedTicket.sol";


/**
 * @title - Interface file of the RetirementCertificateNFTAssociatedTicketFactory contract
 */ 
interface IRetirementCertificateNFTAssociatedTicketFactory {

    function createRetirementCertificateNFTAssociatedTicket(address to, uint ticketType, uint mintAmount, IRetirementCertificateNFT retirementCertificateNFT, string memory uri) external;

    function createBatchRetirementCertificateNFTAssociatedTicket(address to, uint256[] memory ticketTypes, uint256[] memory mintAmounts, IRetirementCertificateNFT retirementCertificateNFT, string memory uri) external;

    event RetirementCertificateNFTAssociatedTicketCreated(
        RetirementCertificateNFTAssociatedTicket retirementCertificateNFTAssociatedTicket,
        address to, 
        uint ticketType, 
        uint mintAmount, 
        IRetirementCertificateNFT retirementCertificateNFT, 
        string uri,
        ITicketManager ticketManager
    );

    event BatchRetirementCertificateNFTAssociatedTicketCreated(
        RetirementCertificateNFTAssociatedTicket retirementCertificateNFTAssociatedTicket,
        address to, 
        uint256[] ticketTypes, 
        uint256[] mintAmounts,
        IRetirementCertificateNFT retirementCertificateNFT, 
        string uri,
        ITicketManager ticketManager
    );

}