// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

//@dev - RNG (Random Number Generated) via Chainlink VRF
import { RandomNumberConsumerV2 } from "./chainlink-examples/RandomNumberConsumerV2.sol";

//@dev - Retirement NFT
import { RetirementNFT } from "./RetirementNFT.sol";

//@dev - NFT
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title The Retirement NFT bundled Ticket contract
 */
contract RetirementNFTBundledTicket is ERC721, Ownable {

    constructor() ERC721("Retirement NFT bundled Ticket", "RNFT_BUNDLED_TICKET") {
        //[TODO]: 
    }

    /**
     * @notice - Check whether a caller (msg.sender) has the RetirementNFT or not
     */ 
    modifier onlyRetirementNFTHolder(address caller) {
        // [TODO]: The method for checking whether a caller (msg.sender) has the RetirementNFT or not
        _;
    }

    function safeMint(address to, uint256 tokenId) public onlyOwner {
        _safeMint(to, tokenId);
    }

}