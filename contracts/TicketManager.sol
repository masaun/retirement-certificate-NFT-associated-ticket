// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

//@dev - Interfaces
import { ITicketManager } from "./interfaces/ITicketManager.sol";
import { IRetirementCertificateNFT } from "./interfaces/IRetirementCertificateNFT.sol";
import { IRetirementCertificateNFTAssociatedTicket } from "./interfaces/IRetirementCertificateNFTAssociatedTicket.sol";

//@dev - OpenZeppeling
import { ERC1155Holder } from "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import { ERC1155Receiver } from "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Receiver.sol";
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";


/**
 * @title - The Ticket Manager contract
 * @dev - [NOTE]: Implementation of Access Control (Role Management) is still in progress
 */
contract TicketManager is ITicketManager, ERC1155Holder, AccessControl {
//contract TicketManager is ITicketManager, ERC1155Receiver, AccessControl {

    IRetirementCertificateNFTAssociatedTicket public retirementCertificateNFTAssociatedTicket;

    constructor(IRetirementCertificateNFTAssociatedTicket _retirementCertificateNFTAssociatedTicket) {
        //@dev - Grant admin role to caller (msg.sender)
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);

        retirementCertificateNFTAssociatedTicket = _retirementCertificateNFTAssociatedTicket;
    }

    /**
     * @notice - Claim single type of RetirementCertificateNFTAssociatedTicket
     * @dev - Only a RetirementCertificateNFT holder can claim by using this method
     */ 
    function claimRetirementCertificateNFTAssociatedTicket(IRetirementCertificateNFT retirementCertificateNFT, uint256 tokenIdOfRetirementCertificateNFT, uint256 ticketType) public override returns (bool) {
        require(retirementCertificateNFT.retirementCertificateNFTBalanceOf(msg.sender) > 0, "A claimer (msg.sender) must has more than 1 Retirement NFT");
        _redeemWithRetirementCertificateNFTAssociatedTicket(ticketType);
    }

    /**
     * @notice - Claim multi-type of RetirementCertificateNFTAssociatedTicket
     * @dev - Only a RetirementCertificateNFT holder can claim by using this method
     */ 
    function claimBatchRetirementCertificateNFTAssociatedTicket(IRetirementCertificateNFT retirementCertificateNFT, uint256[] memory tokenIdOfRetirementCertificateNFTs, uint256[] memory ticketTypes, uint256[] memory numberOfTickets) public override returns (bool) {
        require(retirementCertificateNFT.retirementCertificateNFTBalanceOf(msg.sender) > 0, "A claimer (msg.sender) must has more than 1 Retirement NFT");
        _redeemWithBatchRetirementCertificateNFTAssociatedTicket(ticketTypes, numberOfTickets);
    }

    /**
     * @notice - Redeem a RetirementCertificateNFT with single type of RetirementCertificateNFTAssociatedTicket.
     * @dev - The redemption rate of ticket is 1 RetirementCertificateNFT per 1 RetirementCertificateNFTAssociatedTicket.
     * @param ticketType - Prefer RetirementCertificateNFTAssociatedTicket type that a claimer choose.
     */
    function _redeemWithRetirementCertificateNFTAssociatedTicket(uint256 ticketType) internal returns (bool) {
        address from = address(this);
        address to = msg.sender; // [NOTE]: Need to check whether msg.sender has a RetirementCertificateNFT and has not been redeemed yet
        uint256 ticketType;  // Prefer ticket type that a claimer choose
        uint256 numberOfTicket = 1;  // [NOTE]: Number of ticket to be redeemed. The redemption rate of ticket is 1 RetirementCertificateNFT per 1 RetirementCertificateNFTAssociatedTicket
        bytes memory data = "";
        retirementCertificateNFTAssociatedTicket.transferRetirementCertificateNFTAssociatedTicket(from, to, ticketType, numberOfTicket, data);
    }

    /**
     * @notice - Redeem RetirementCertificateNFTs with multi-type of RetirementCertificateNFTAssociatedTicket.
     * @dev - The redemption rate of ticket is 1 RetirementCertificateNFT per 1 RetirementCertificateNFTAssociatedTicket.
     * @param ticketTypes - Prefer RetirementCertificateNFTAssociatedTicket type that a claimer choose.
     */
    function _redeemWithBatchRetirementCertificateNFTAssociatedTicket(uint256[] memory ticketTypes, uint256[] memory numberOfTickets) internal returns (bool) {
        address from = address(this);
        address to = msg.sender; // [NOTE]: Need to check whether msg.sender has a RetirementCertificateNFT and has not been redeemed yet
        bytes memory data = "";
        retirementCertificateNFTAssociatedTicket.transferBatchRetirementCertificateNFTAssociatedTicket(from, to, ticketTypes, numberOfTickets, data);
    }


    /**
     * @notice - Check whether a RetirementCertificateNFTAssociatedTicket has already been redeemed or not
     */
    function checkWhetherRetirementCertificateNFTAssociatedTicketHasAlreadyBeenRedeemedOrNot(IRetirementCertificateNFT retirementCertificateNFT, uint256 tokenIdOfRetirementCertificateNFT) public override view returns (bool) {
        //[TODO]: 
        //return something;
    }

    /**
     * @notice - This method is required for Role-based access control of ERC1155 by using OpenZeppelin's AccessControl.sol
     */ 
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC1155Receiver, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

}