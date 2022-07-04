// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import { DataTypes } from '../libraries/DataTypes.sol';

import { IRetirementNFT } from "./IRetirementNFT.sol";


interface IRetirementNFTAssociatedTicketFactory {

    function mintRetirementNFTAssociatedTicket(address to, uint ticketType, uint mintAmount, IRetirementNFT retirementNFT, string memory uri) external;

    function mintBatchRetirementNFTAssociatedTicket(address to, uint256[] memory ticketTypes, uint256[] memory mintAmounts, IRetirementNFT retirementNFT, string memory uri) external;

}