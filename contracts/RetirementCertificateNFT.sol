// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

//@dev - Interfaces
import { IRetirementCertificateNFT } from "./interfaces/IRetirementCertificateNFT.sol";

//@dev - NFT
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";


/**
 * @title - The Retirement Certificate NFT contract (based on ERC721)
 */
contract RetirementCertificateNFT is IRetirementCertificateNFT, ERC721, AccessControl {

    constructor() ERC721("Retirement NFT", "RNFT") {
        //@dev - Grant admin role to caller (msg.sender)
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /**
     * @notice - Mint a new RetirementCertificateNFT with RNG via Chainlink VRF
     */ 
    function mintNewRetirementCertificateNFT(address to, uint256 tokenId) public override onlyRole(DEFAULT_ADMIN_ROLE) {
        //@dev - Mint a new RetirementCertificateNFT
        _safeMint(to, tokenId);
    }

    /**
     * @dev - Get the number of tokens in an account of walletAddress.
     * @return _numberOfRetirementCertificateNFTs - Number of RetirementCertificateNFTs that a wallet address has
     */
    function retirementCertificateNFTBalanceOf(address walletAddress) public override view returns (uint256 _numberOfRetirementCertificateNFTs) {
        return balanceOf(walletAddress);
    }

    /**
     * @dev - Get the owner of the `tokenId` of a Retirement Certificate NFT.
     */
    function retirementCertificateNFTOwnerOf(uint256 tokenId) public override view returns (address _owner) {
        return ownerOf(tokenId);
    }


    /**
     * @notice - This method is required for Role-based access control of ERC721 by using OpenZeppelin's AccessControl.sol
     */ 
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

}