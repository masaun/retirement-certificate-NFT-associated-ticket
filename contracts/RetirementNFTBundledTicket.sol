// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

//@dev - RNG (Random Number Generated) via Chainlink VRF
import { RandomNumberGeneratorV2 } from "./RandomNumberGeneratorV2.sol";

//@dev - Retirement NFT
import { RetirementNFT } from "./RetirementNFT.sol";

//@dev - NFT
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";

//@dev - Struct, Enum, etc
import { DataTypes } from "./libraries/DataTypes.sol";


/**
 * @title The Retirement NFT bundled Ticket contract
 */
contract RetirementNFTBundledTicket is ERC721, AccessControl {

    RandomNumberGeneratorV2 public rngV2;

    //@dev - Storages
    mapping (address => DataTypes.RetirementNFTBundledTicketMetadata) retirementNFTBundledTicketMetadatas;

    constructor(RandomNumberGeneratorV2 _rngV2) ERC721("Retirement NFT Bundled Ticket", "RNFT_BUNDLED_TICKET") {
        rngV2 = _rngV2;

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
    function mintNewRetirementNFTBundledTicket(address to, uint256 tokenId, RetirementNFT retirementNFT) public onlyRole(DEFAULT_ADMIN_ROLE) {
        //@dev - Generate Random Number via Chainlink VRF
        rngV2.requestRandomWords();
        
        //@dev - Get value of RNs (random nubmers) that is stored in s_randomWords by above
        uint256[] memory randomNumbers = rngV2.getSRandomWords();
        //uint256[] memory randomNumbers = rngV2.s_randomWords(0);  // [TODO]: Fix an error 

        //@dev - Bundle (Save) a RN retrieved with RetirementNFT Ticket
        address RETIREMENT_NFT = address(retirementNFT);
        DataTypes.RetirementNFTBundledTicketMetadata storage retirementNFTBundledTicketMetadata = retirementNFTBundledTicketMetadatas[RETIREMENT_NFT];
        retirementNFTBundledTicketMetadata.ticketHolder = address(0);  // [TODO]: Assign actual wallet address 
        retirementNFTBundledTicketMetadata.randomNumber = randomNumbers[0];

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