// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import { DataTypes } from '../libraries/DataTypes.sol';

import { IRetirementNFT } from "./IRetirementNFT.sol";


interface IRetirementNFTBundledTicket {

    function mintNewRetirementNFTBundledTicket(address to, uint256 tokenId, IRetirementNFT retirementNFT) external;

}