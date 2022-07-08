// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import { DataTypes } from '../libraries/DataTypes.sol';

import { IRetirementNFT } from "./IRetirementNFT.sol";


interface IRetirementNFTAssociatedTicket {

    /**
     * @notice - Mint a retirementNFTAssociatedTicket
     */ 
    function mint(address to, uint256 ticketType, uint256 mintAmount, bytes memory data) external;

    /**
     * @notice - Mint batch of retirementNFTAssociatedTicket
     */
    function mintBatch(address to, uint256[] memory ticketTypes, uint256[] memory mintAmounts, bytes memory data) external;

    /**
     * @notice - Save a metadata of RetirementNFTAssociatedTicket
     */ 
    function saveRetirementNFTAssociatedTicketMetadata(IRetirementNFT retirementNFT) external;

    /**
     * @notice - Get a metadata of RetirementNFTAssociatedTicket
     */ 
    function getRetirementNFTAssociatedTicketMetadata(IRetirementNFT retirementNFT) external view returns (DataTypes.RetirementNFTAssociatedTicketMetadata memory _retirementNFTAssociatedTicketMetadata);

}