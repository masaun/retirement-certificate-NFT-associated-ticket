// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

//@dev - RNG (Random Number Generated) via Chainlink VRF
import { RandomNumberGeneratorV2 } from "./RandomNumberGeneratorV2.sol";

//@dev - Retirement NFT
import { RetirementNFT } from "./RetirementNFT.sol";

//@dev - NFT
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * @title The Retirement NFT bundled Ticket contract
 */
contract RetirementNFTBundledTicket is ERC721, AccessControl {

    constructor() ERC721("Retirement NFT bundled Ticket", "RNFT_BUNDLED_TICKET") {
        //@dev - Grant admin role to caller (msg.sender)
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /**
     * @notice - Check whether a caller (msg.sender) has the RetirementNFT or not
     */ 
    modifier onlyRetirementNFTHolder(address caller) {
        // [TODO]: The method for checking whether a caller (msg.sender) has the RetirementNFT or not
        _;
    }

    /**
     * @notice - Mint a new RetirementNFTBundledTicket with RNG via Chainlink VRF
     */ 
    function mintNewRetirementNFTBundledTicket(address to, uint256 tokenId) public onlyRole(DEFAULT_ADMIN_ROLE) {
        //@dev - [TODO]: Generate Random Number via Chainlink VRF
        

        //@dev - Mint a new RetirementNFTBundledTicket
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