// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import { IRetirementCertificateNFT } from "./IRetirementCertificateNFT.sol";

import { DataTypes } from '../libraries/DataTypes.sol';


interface ITicketManager {

    /**
     * @notice - Claim single type of RetirementCertificateNFTAssociatedTicket
     * @dev - Only a RetirementCertificateNFT holder can claim by using this method
     */ 
    function claimRetirementCertificateNFTAssociatedTicket(IRetirementCertificateNFT retirementCertificateNFT, uint256 tokenIdOfRetirementCertificateNFT, uint256 ticketType) external returns (bool);

    /**
     * @notice - Claim multi-type of RetirementCertificateNFTAssociatedTicket
     * @dev - Only a RetirementCertificateNFT holder can claim by using this method
     */ 
    function claimBatchRetirementCertificateNFTAssociatedTicket(IRetirementCertificateNFT retirementCertificateNFT, uint256[] memory tokenIdOfRetirementCertificateNFTs, uint256[] memory ticketTypes, uint256[] memory numberOfTickets) external returns (bool);

    /**
     * @notice - Check whether a RetirementCertificateNFTAssociatedTicket has already been redeemed or not
     */
    function checkWhetherRetirementCertificateNFTAssociatedTicketHasAlreadyBeenRedeemedOrNot(IRetirementCertificateNFT retirementCertificateNFT, uint256 tokenIdOfRetirementCertificateNFT) external view returns (bool);

}