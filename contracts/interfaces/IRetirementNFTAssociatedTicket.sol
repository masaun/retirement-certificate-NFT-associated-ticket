// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import { DataTypes } from '../libraries/DataTypes.sol';

import { IRetirementNFT } from "./IRetirementNFT.sol";


interface IRetirementNFTAssociatedTicket {

    function saveRetirementNFTAssociatedTicketMetadata(IRetirementNFT retirementNFT, uint256[] memory randomNumbers) external;

    //function mintNewRetirementNFTAssociatedTicket(address to, uint256 tokenId, IRetirementNFT retirementNFT) external;

}