// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

//@dev - Interfaces
import { IRetirementNFTAssociatedTicketFactory } from "./interfaces/IRetirementNFTAssociatedTicketFactory.sol";

//@dev - RNG (Random Number Generated) via Chainlink VRF
import { IRandomNumberGeneratorV2 } from "./interfaces/IRandomNumberGeneratorV2.sol";

//@dev - RetirementNFT-associated ticket
import { RetirementNFTAssociatedTicket } from "./RetirementNFTAssociatedTicket.sol";

//@dev - Retirement NFT
import { IRetirementNFT } from "./interfaces/IRetirementNFT.sol";

//@dev - NFT
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";

//@dev - Struct, Enum, etc
import { DataTypes } from "./libraries/DataTypes.sol";


/**
 * @title The factory contract of the Retirement NFT associated Ticket contract
 */
contract RetirementNFTAssociatedTicketFactory is IRetirementNFTAssociatedTicketFactory, ERC721, AccessControl {

    IRandomNumberGeneratorV2 public rngV2;

    //@dev - Storages
    mapping (address => DataTypes.RetirementNFTAssociatedTicketMetadata) retirementNFTAssociatedTicketMetadatas;

    constructor(IRandomNumberGeneratorV2 _rngV2) ERC721("Retirement NFT Bundled Ticket", "RNFT_BUNDLED_TICKET") {
        rngV2 = _rngV2;

        //@dev - Grant admin role to caller (msg.sender)
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /**
     * @notice - Mint a new RetirementNFTAssociatedTicket with RNG via Chainlink VRF
     */ 
    function mintNewRetirementNFTAssociatedTicket(address to, uint256 tokenId, IRetirementNFT retirementNFT) public override onlyRole(DEFAULT_ADMIN_ROLE) {
        //@dev - Generate Random Number via Chainlink VRF
        rngV2.requestRandomWords();
        
        //@dev - Get value of RNs (random nubmers) that is stored in s_randomWords by above
        uint256[] memory randomNumbers = rngV2.getSRandomWords();
        //uint256[] memory randomNumbers = rngV2.s_randomWords(0);  // [TODO]: Fix an error 

        //@dev - Create a new retirementNFTAssociatedTicket
        RetirementNFTAssociatedTicket retirementNFTAssociatedTicket = new RetirementNFTAssociatedTicket(rngV2);

        //@dev - Save a metadata of RetirementNFTAssociatedTicket
        retirementNFTAssociatedTicket.saveRetirementNFTAssociatedTicketMetadata(retirementNFT, randomNumbers);

        //@dev - Mint a new RetirementNFTAssociatedTicket
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