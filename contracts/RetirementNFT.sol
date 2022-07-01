// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";


/**
 * @title The Retirement NFT contract
 */
contract RetirementNFT is ERC721, Ownable {

    constructor() ERC721("Retirement NFT", "RNFT") {
        //[TODO]: 
    }

    function safeMint(address to, uint256 tokenId) public onlyOwner {
        _safeMint(to, tokenId);
    }

}