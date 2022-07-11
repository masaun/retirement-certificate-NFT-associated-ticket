// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import { DataTypes } from '../libraries/DataTypes.sol';

import { IRetirementNFT } from "./IRetirementNFT.sol";




interface IRetirementNFTAssociatedTicket {

    /**
     * @notice - Mint a retirementNFTAssociatedTicket
     */ 
    function mint(address to, uint256 ticketType, uint256 mintAmount) external;

    /**
     * @notice - Mint batch of retirementNFTAssociatedTicket
     */
    function mintBatch(address to, uint256[] memory ticketTypes, uint256[] memory mintAmounts) external;

    /**
     * @notice - Save a metadata of RetirementNFTAssociatedTicket
     */ 
    function saveRetirementNFTAssociatedTicketMetadata(IRetirementNFT retirementNFT) external;

    /**
     * @notice - Get a metadata of RetirementNFTAssociatedTicket
     */ 
    function getRetirementNFTAssociatedTicketMetadata(IRetirementNFT retirementNFT) external view returns (DataTypes.RetirementNFTAssociatedTicketMetadata memory _retirementNFTAssociatedTicketMetadata);

    /**
     * @dev - Get the number of RetirementNFTAssociatedTickets in an account of walletAddress.
     * @return _numberOfRetirementNFTAssociatedTickets - Number of RetirementNFTAssociatedTickets that a wallet address has
     */
    function retirementNFTAssociatedTicketBalanceOf(address walletAddress, uint256 ticketType) external view returns (uint256 _numberOfRetirementNFTAssociatedTickets);

    /**
     * @dev - Get the number of RetirementNFTAssociatedTickets (In case of batch) in an account of walletAddress.
     * @return _numberOfRetirementNFTAssociatedTickets - Number of RetirementNFTAssociatedTickets that wallet addresses has
     */
    function retirementNFTAssociatedTicketBalanceOfBatch(address[] memory walletAddresses, uint256[] memory ticketTypes) external view returns (uint256[] memory _numberOfRetirementNFTAssociatedTickets);

}