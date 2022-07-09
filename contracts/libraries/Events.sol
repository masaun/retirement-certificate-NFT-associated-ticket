// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

//@dev - RetirementNFT-associated ticket
import { RetirementNFTAssociatedTicket } from "../RetirementNFTAssociatedTicket.sol";

//@dev - Retirement NFT
import { IRetirementNFT } from "../interfaces/IRetirementNFT.sol";

import { DataTypes } from './DataTypes.sol';


library Events {

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

}
