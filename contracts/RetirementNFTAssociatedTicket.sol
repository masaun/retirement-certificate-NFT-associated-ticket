// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

//@dev - Interfaces
import { IRetirementNFTAssociatedTicket } from "./interfaces/IRetirementNFTAssociatedTicket.sol";

//@dev - RNG (Random Number Generated) via Chainlink VRF
import { IRandomNumberGeneratorV2 } from "./interfaces/IRandomNumberGeneratorV2.sol";

//@dev - Retirement NFT
import { IRetirementNFT } from "./interfaces/IRetirementNFT.sol";

//@dev - NFT
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";

//@dev - Struct, Enum, etc
import { DataTypes } from "./libraries/DataTypes.sol";


/**
 * @title The Retirement NFT associated Ticket contract
 */
contract RetirementNFTAssociatedTicket is IRetirementNFTAssociatedTicket, ERC721, AccessControl {

    IRandomNumberGeneratorV2 public rngV2;

    //@dev - Storages
    mapping (address => DataTypes.RetirementNFTAssociatedTicketMetadata) retirementNFTAssociatedTicketMetadatas;

    constructor(IRandomNumberGeneratorV2 _rngV2) ERC721("Retirement NFT Bundled Ticket", "RNFT_BUNDLED_TICKET") {
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
     * @notice - Save a metadata of RetirementNFTAssociatedTicket
     */ 
    function saveRetirementNFTAssociatedTicketMetadata(IRetirementNFT retirementNFT, uint256[] memory randomNumbers) public override {
        //@dev - Bundle (Save) a RN retrieved with RetirementNFT Ticket
        address RETIREMENT_NFT = address(retirementNFT);
        DataTypes.RetirementNFTAssociatedTicketMetadata storage retirementNFTAssociatedTicketMetadata = retirementNFTAssociatedTicketMetadatas[RETIREMENT_NFT];
        retirementNFTAssociatedTicketMetadata.ticketHolder = address(0);  // [TODO]: Assign actual wallet address 
        retirementNFTAssociatedTicketMetadata.randomNumber = randomNumbers[0];
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