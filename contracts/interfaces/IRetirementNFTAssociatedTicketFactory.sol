// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import { DataTypes } from '../libraries/DataTypes.sol';
import { Events } from "../libraries/Events.sol";

import { IRetirementNFT } from "./IRetirementNFT.sol";

//@dev - RetirementNFT-associated ticket
import { RetirementNFTAssociatedTicket } from "../RetirementNFTAssociatedTicket.sol";


/**
 * @title - Interface file of the RetirementNFTAssociatedTicketFactory contract
 */ 
interface IRetirementNFTAssociatedTicketFactory {

    event RetirementNFTAssociatedTicketCreated(
        RetirementNFTAssociatedTicket retirementNFTAssociatedTicket,
        address to, 
        uint ticketType, 
        uint mintAmount, 
        IRetirementNFT retirementNFT, 
        string uri
    );

    event BatchRetirementNFTAssociatedTicketCreated(
        RetirementNFTAssociatedTicket retirementNFTAssociatedTicket,
        address to, 
        uint256[] ticketTypes, 
        uint256[] mintAmounts,
        IRetirementNFT retirementNFT, 
        string uri
    );

    function createRetirementNFTAssociatedTicket(address to, uint ticketType, uint mintAmount, IRetirementNFT retirementNFT, string memory uri) external;

    function createBatchRetirementNFTAssociatedTicket(address to, uint256[] memory ticketTypes, uint256[] memory mintAmounts, IRetirementNFT retirementNFT, string memory uri) external;

}