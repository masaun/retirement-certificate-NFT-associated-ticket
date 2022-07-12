// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import { DataTypes } from '../libraries/DataTypes.sol';

import { IRetirementCertificateNFT } from "./IRetirementCertificateNFT.sol";




interface IRetirementCertificateNFTAssociatedTicket {

    /**
     * @notice - Mint a RetirementCertificateNFTAssociatedTicket
     */ 
    function mint(address to, uint256 ticketType, uint256 mintAmount) external;

    /**
     * @notice - Mint batch of RetirementCertificateNFTAssociatedTicket
     */
    function mintBatch(address to, uint256[] memory ticketTypes, uint256[] memory mintAmounts) external;

    /**
     * @notice - Save a metadata of RetirementCertificateNFTAssociatedTicket
     */ 
    function saveRetirementCertificateNFTAssociatedTicketMetadata(IRetirementCertificateNFT retirementCertificateNFT) external;

    /**
     * @notice - Get a metadata of RetirementCertificateNFTAssociatedTicket
     */ 
    function getRetirementCertificateNFTAssociatedTicketMetadata(IRetirementCertificateNFT retirementCertificateNFT) external view returns (DataTypes.RetirementCertificateNFTAssociatedTicketMetadata memory _retirementCertificateNFTAssociatedTicketMetadata);

    /**
     * @dev - Get the number of RetirementCertificateNFTAssociatedTickets in an account of walletAddress.
     * @return _numberOfRetirementCertificateNFTAssociatedTickets - Number of RetirementCertificateNFTAssociatedTickets that a wallet address has
     */
    function retirementCertificateNFTAssociatedTicketBalanceOf(address walletAddress, uint256 ticketType) external view returns (uint256 _numberOfRetirementCertificateNFTAssociatedTickets);

    /**
     * @dev - Get the number of RetirementCertificateNFTAssociatedTickets (In case of batch) in an account of walletAddress.
     * @return _numberOfEachRetirementCertificateNFTAssociatedTickets - Number of each RetirementCertificateNFTAssociatedTickets that wallet addresses has
     */
    function retirementCertificateNFTAssociatedTicketBalanceOfBatch(address[] memory walletAddresses, uint256[] memory ticketTypes) external view returns (uint256[] memory _numberOfEachRetirementCertificateNFTAssociatedTickets);

}