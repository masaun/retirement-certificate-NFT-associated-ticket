// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

//@dev - RetirementCertificateNFT-associated ticket
import { RetirementCertificateNFTAssociatedTicket } from "../RetirementCertificateNFTAssociatedTicket.sol";

//@dev - Retirement NFT
import { IRetirementCertificateNFT } from "../interfaces/IRetirementCertificateNFT.sol";

import { DataTypes } from './DataTypes.sol';


library Events {

    event RetirementCertificateNFTAssociatedTicketCreated(
        RetirementCertificateNFTAssociatedTicket retirementCertificateNFTAssociatedTicket,
        address to, 
        uint ticketType, 
        uint mintAmount, 
        IRetirementCertificateNFT retirementCertificateNFT, 
        string uri
    );

    event BatchRetirementCertificateNFTAssociatedTicketCreated(
        RetirementCertificateNFTAssociatedTicket retirementCertificateNFTAssociatedTicket,
        address to, 
        uint256[] ticketTypes, 
        uint256[] mintAmounts,
        IRetirementCertificateNFT retirementCertificateNFT, 
        string uri
    );

}
