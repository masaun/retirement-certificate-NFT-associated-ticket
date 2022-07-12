// SPDX-License-Identifier: MIT
// An example of a consumer contract that relies on a subscription for funding.
pragma solidity ^0.8.7;

//import { IRetirementCertificateNFTAssociatedTicket } from "../interfaces/IRetirementCertificateNFTAssociatedTicket.sol";
import { RetirementCertificateNFTAssociatedTicket } from "../RetirementCertificateNFTAssociatedTicket.sol";

import "hardhat/console.sol";


/**
 * @title - The MockRetirementCertificateNFTAssociatedTicketGatedService contract
 * @notice - This is a service smart contract that only only a Retirement NFT Associated Ticket holder can access.
 */
contract MockRetirementCertificateNFTAssociatedTicketGatedService {

    constructor() {
        //[TODO]: 
    }

    /**
     * @notice - Check whether a caller (msg.sender) has a RetirementCertificateNFTAssociatedTicket or not
     */ 
    modifier onlyRetirementCertificateNFTAssociatedTicketHolder(address caller, RetirementCertificateNFTAssociatedTicket _retirementCertificateNFTAssociatedTicket, uint256 ticketType) {
        RetirementCertificateNFTAssociatedTicket retirementCertificateNFTAssociatedTicket = _retirementCertificateNFTAssociatedTicket;
        uint numberOfTicket = retirementCertificateNFTAssociatedTicket.balanceOf(caller, ticketType);
        require(numberOfTicket > 0, "A caller should has more than 1 of the RetirementCertificateNFTAssociatedTicket");
        _;
    }

    /**
     * @notice - Access a special content that only only a Retirement NFT Associated Ticket holder can access.
     * @dev - If a caller (msg.sender) pass onlyRetirementCertificateNFTAssociatedTicketHolder() modifier, that caller can access special content
     */ 
    function accessSpecialContent(RetirementCertificateNFTAssociatedTicket retirementCertificateNFTAssociatedTicket, uint256 ticketType) public onlyRetirementCertificateNFTAssociatedTicketHolder(msg.sender, retirementCertificateNFTAssociatedTicket, ticketType) returns (bool) {
        console.log("%s is successful to access special content", msg.sender);
    }

}