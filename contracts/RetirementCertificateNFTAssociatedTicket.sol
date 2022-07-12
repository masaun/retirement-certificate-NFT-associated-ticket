// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

//@dev - Interfaces
import { IRetirementCertificateNFTAssociatedTicket } from "./interfaces/IRetirementCertificateNFTAssociatedTicket.sol";
import { IRetirementCertificateNFTAssociatedTicketFactory } from "./interfaces/IRetirementCertificateNFTAssociatedTicketFactory.sol";

//@dev - RNG (Random Number Generated) via Chainlink VRF
import { IRandomNumberGeneratorV2 } from "./interfaces/IRandomNumberGeneratorV2.sol";

//@dev - Retirement NFT
import { IRetirementCertificateNFT } from "./interfaces/IRetirementCertificateNFT.sol";

//@dev - Chainlink VRF
import { VRFCoordinatorV2Mock } from "./chainlink-examples/test/VRFCoordinatorV2Mock.sol";

//@dev - OpenZeppelin
import { ERC1155 } from "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
//import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";

//@dev - Struct, Enum, etc
import { DataTypes } from "./libraries/DataTypes.sol";

//@dev - Debugging
import "hardhat/console.sol";


/**
 * @title - The Retirement NFT associated Ticket contract (ERC1155)
 */
contract RetirementCertificateNFTAssociatedTicket is IRetirementCertificateNFTAssociatedTicket, ERC1155, AccessControl {

    //@dev - Smart contract instances
    IRetirementCertificateNFT public retirementCertificateNFT;
    IRandomNumberGeneratorV2 public rngV2;
    VRFCoordinatorV2Mock public vrfCoordinatorV2;

    //@dev - Storages
    mapping (address => DataTypes.RetirementCertificateNFTAssociatedTicketMetadata) retirementCertificateNFTAssociatedTicketMetadatas; // [Key]: RetirementCertificateNFT's address -> RetirementCertificateNFTAssociatedTicketMetadata struct

    //@dev - Roles
    address public TICKET_CREATOR;
    bytes32 public constant URI_SETTER_ROLE = keccak256("URI_SETTER_ROLE");
    bytes32 public constant TICKET_MINTER_ROLE = keccak256("TICKET_MINTER_ROLE");


    /**
     * @notice - Constructor
     */ 
    constructor(IRetirementCertificateNFT _retirementCertificateNFT, address _ticketCreator, IRandomNumberGeneratorV2 _rngV2, string memory _uri, IRetirementCertificateNFTAssociatedTicketFactory _retirementCertificateNFTAssociatedTicketFactory, VRFCoordinatorV2Mock _vrfCoordinatorV2) ERC1155("") {
        //@dev - Assign a ticket creator's address
        TICKET_CREATOR = _ticketCreator;

        //@dev - Create smart contract instances
        retirementCertificateNFT = _retirementCertificateNFT;
        rngV2 = _rngV2;
        vrfCoordinatorV2 = _vrfCoordinatorV2;

        //@dev - Grant admin role to caller (msg.sender)
        _grantRole(DEFAULT_ADMIN_ROLE, address(_retirementCertificateNFTAssociatedTicketFactory));  // Factory contract address
        _grantRole(URI_SETTER_ROLE, address(_retirementCertificateNFTAssociatedTicketFactory));     // Factory contract address
        //_grantRole(TICKET_MINTER_ROLE, address(_retirementCertificateNFTAssociatedTicketFactory));       // Factory contract address
        _grantRole(TICKET_MINTER_ROLE, _ticketCreator);

        //@dev - Set a URI (image, etc) to the ERC1155 NFT
        //@dev - NOTE: This method is able to be called by the wallet address that has a "URI_SETTER_ROLE" role.
        setURI(_uri);
    }

    /**
     * @notice - Set a new URI (image, etc) for ERC1155 NFT
     */ 
    //function setURI(string memory newURI) public {
    function setURI(string memory newURI) internal onlyRole(URI_SETTER_ROLE) {
        _setURI(newURI);
    }

    /**
     * @notice - Mint a RetirementCertificateNFTAssociatedTicket
     */ 
    function mint(address to, uint256 ticketType, uint256 mintAmount)
        public 
        override
        onlyRole(TICKET_MINTER_ROLE)
    {
        require(retirementCertificateNFT.retirementCertificateNFTBalanceOf(to) > 0, '"to" address must has more than 1 Retirement NFT');
        bytes memory data = "";
        _mint(to, ticketType, mintAmount, data);
    }

    /**
     * @notice - Mint batch of RetirementCertificateNFTAssociatedTicket
     */
    function mintBatch(address to, uint256[] memory ticketTypes, uint256[] memory mintAmounts)
        public
        override
        onlyRole(TICKET_MINTER_ROLE)
    {
        require(retirementCertificateNFT.retirementCertificateNFTBalanceOf(to) > 0, '"to" address must has more than 1 Retirement NFT');
        bytes memory data = "";
        _mintBatch(to, ticketTypes, mintAmounts, data);
    }

    /**
     * @notice - Save a metadata of RetirementCertificateNFTAssociatedTicket
     */ 
    function saveRetirementCertificateNFTAssociatedTicketMetadata(IRetirementCertificateNFT retirementCertificateNFT) public override {
        //@dev - Generate Random Number via Chainlink VRF
        rngV2.requestRandomWords();

        //@dev - Get requestId
        uint256 requestId = rngV2.getSRequestId();
        console.log("-------------- requestId: %d --------------", requestId);  // [Result]:Success to retrieve value

        //@dev - Execute fulfillRandomWords() method to get callback
        vrfCoordinatorV2.fulfillRandomWords(requestId, address(rngV2));

        //@dev - Get value of RNs (random nubmers) that is stored in s_randomWords by above
        uint256 randomNumber = rngV2.getSRandomWord();
        console.log("-------------- randomNumber: %s --------------", randomNumber);  // [Result]: Success

        uint256[] memory randomNumbers = rngV2.getSRandomWords();

        //@dev - Bundle (Save) a RN retrieved with RetirementCertificateNFT Ticket
        address RETIREMENT_NFT = address(retirementCertificateNFT);
        console.log("-------------- RETIREMENT_NFT: %s --------------", RETIREMENT_NFT);  // [Result]: Success to retrieve value

        DataTypes.RetirementCertificateNFTAssociatedTicketMetadata storage retirementCertificateNFTAssociatedTicketMetadata = retirementCertificateNFTAssociatedTicketMetadatas[RETIREMENT_NFT];
        retirementCertificateNFTAssociatedTicketMetadata.ticketCreator = TICKET_CREATOR;
        //retirementCertificateNFTAssociatedTicketMetadata.ticketHolder = 0x0000000000000000000000000000000000000000; 
        //retirementCertificateNFTAssociatedTicketMetadata.ticketNumber = randomNumber;
        retirementCertificateNFTAssociatedTicketMetadata.ticketNumber = randomNumbers[0];
    }

    /**
     * @notice - Get a metadata of RetirementCertificateNFTAssociatedTicket
     */ 
    function getRetirementCertificateNFTAssociatedTicketMetadata(IRetirementCertificateNFT retirementCertificateNFT) public view override returns (DataTypes.RetirementCertificateNFTAssociatedTicketMetadata memory _retirementCertificateNFTAssociatedTicketMetadata) {
        address RETIREMENT_NFT = address(retirementCertificateNFT);
        DataTypes.RetirementCertificateNFTAssociatedTicketMetadata storage retirementCertificateNFTAssociatedTicketMetadata = retirementCertificateNFTAssociatedTicketMetadatas[RETIREMENT_NFT];
        return retirementCertificateNFTAssociatedTicketMetadata;
    }


    ///-----------------
    /// Getter methods
    ///-----------------

    /**
     * @dev - Get the number of RetirementCertificateNFTAssociatedTickets in an account of walletAddress.
     * @return _numberOfRetirementCertificateNFTAssociatedTickets - Number of RetirementCertificateNFTAssociatedTickets that a wallet address has
     */
    function retirementCertificateNFTAssociatedTicketBalanceOf(address walletAddress, uint256 ticketType) public override view returns (uint256 _numberOfRetirementCertificateNFTAssociatedTickets) {
        return balanceOf(walletAddress, ticketType);
    }

    /**
     * @dev - Get the number of RetirementCertificateNFTAssociatedTickets (In case of batch) in an account of walletAddress.
     * @return _numberOfRetirementCertificateNFTAssociatedTickets - Number of RetirementCertificateNFTAssociatedTickets that wallet addresses has
     */
    function retirementCertificateNFTAssociatedTicketBalanceOfBatch(address[] memory walletAddresses, uint256[] memory ticketTypes) public override view returns (uint256[] memory _numberOfRetirementCertificateNFTAssociatedTickets) {
        return balanceOfBatch(walletAddresses, ticketTypes);
    }



    /**
     * @dev - Get the owner of the `ticketType` of RetirementCertificateNFTAssociatedTickets.
     */
    // function RetirementCertificateNFTAssociatedTicketOwnerOf(uint256 ticketType) public override view returns (address _owner) {
    //     return ownerOf(tokenId);
    // }


    /**
     * @notice - This method is required for Role-based access control of ERC1155 by using OpenZeppelin's AccessControl.sol
     */ 
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC1155, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

}