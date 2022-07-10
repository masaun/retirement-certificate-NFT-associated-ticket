// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

//@dev - Interfaces
import { IRetirementNFT } from "./interfaces/IRetirementNFT.sol";

//@dev - NFT
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";


/**
 * @title The Retirement NFT contract
 */
contract RetirementNFT is IRetirementNFT, ERC721, AccessControl {

    constructor() ERC721("Retirement NFT", "RNFT") {
        //@dev - Grant admin role to caller (msg.sender)
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /**
     * @notice - Mint a new RetirementNFT with RNG via Chainlink VRF
     */ 
    function mintNewRetirementNFT(address to, uint256 tokenId) public override onlyRole(DEFAULT_ADMIN_ROLE) {
        //@dev - Mint a new RetirementNFT
        _safeMint(to, tokenId);
    }

    /**
     * @dev - Get the number of tokens in an account of walletAddress.
     */
    function retirementNFTBalanceOf(address walletAddress) public override view returns (uint256 _balance) {
        return balanceOf(walletAddress);
    }

    /**
     * @dev - Get the owner of the `tokenId` of Retirment NFT.
     */
    function retirementNFTOwnerOf(uint256 tokenId) public override view returns (address _owner) {
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