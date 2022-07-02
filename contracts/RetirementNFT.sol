// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

//@dev - RNG (Random Number Generated) via Chainlink VRF
import { RandomNumberGeneratorV2 } from "./RandomNumberGeneratorV2.sol";

//@dev - NFT
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";


/**
 * @title The Retirement NFT contract
 */
contract RetirementNFT is ERC721, AccessControl {

    RandomNumberGeneratorV2 public rngV2;

    constructor(RandomNumberGeneratorV2 _rngV2) ERC721("Retirement NFT", "RNFT") {
        rngV2 = _rngV2;

        //@dev - Grant admin role to caller (msg.sender)
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /**
     * @notice - Mint a new RetirementNFT with RNG via Chainlink VRF
     */ 
    function mintNewRetirementNFT(address to, uint256 tokenId) public onlyRole(DEFAULT_ADMIN_ROLE) {
        //@dev - Generate Random Number via Chainlink VRF
        rngV2.requestRandomWords();

        //@dev - Mint a new RetirementNFT
        _safeMint(to, tokenId);
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