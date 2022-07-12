// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

//import { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import { DataTypes } from '../libraries/DataTypes.sol';


interface IRetirementCertificateNFT {

    function mintNewRetirementCertificateNFT(address to, uint256 tokenId) external;

    function retirementCertificateNFTBalanceOf(address walletAddress) external view returns (uint256 _numberOfRetirementNFTs);

    function retirementCertificateNFTOwnerOf(uint256 tokenId) external view returns (address _owner);

}