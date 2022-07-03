// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import { DataTypes } from '../libraries/DataTypes.sol';


interface IRetirementNFT {

    function mintNewRetirementNFT(address to, uint256 tokenId) external;

}