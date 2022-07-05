// SPDX-License-Identifier: MIT
// An example of a consumer contract that relies on a subscription for funding.
pragma solidity ^0.8.7;

//import { IRetirementNFTAssociatedTicket } from "../interfaces/IRetirementNFTAssociatedTicket.sol";
import { RetirementNFTAssociatedTicket } from "../RetirementNFTAssociatedTicket.sol";

import "hardhat/console.sol";


/**
 * @title - The MockRetirementNFTAssociatedTicketGatedService contract
 * @notice - This is a service smart contract that only only a Retirement NFT Associated Ticket holder can access.
 */
contract MockRetirementNFTAssociatedTicketGatedService {

    constructor() {
        //[TODO]: 
    }

    /**
     * @notice - Check whether a caller (msg.sender) has a RetirementNFTAssociatedTicket or not
     */ 
    modifier onlyRetirementNFTAssociatedTicketHolder(address caller, RetirementNFTAssociatedTicket _retirementNFTAssociatedTicket, uint256 ticketType) {
        RetirementNFTAssociatedTicket retirementNFTAssociatedTicket = _retirementNFTAssociatedTicket;
        uint numberOfTicket = retirementNFTAssociatedTicket.balanceOf(caller, ticketType);
        require(numberOfTicket > 0, "A caller should has more than 1 of the RetirementNFTAssociatedTicket");
        _;
    }

    /**
     * @notice - Verify a caller (msg.sender) if the caller has a RetirementNFTAssociatedTicket
     */
    function verifyRetirementNFTAssociatedTicket() public returns (bool) {
        // [TODO]: 
    }

    /**
     * @notice - Access a special content that only only a Retirement NFT Associated Ticket holder can access.
     * @dev - If a caller (msg.sender) pass onlyRetirementNFTAssociatedTicketHolder() modifier, that caller can access special content
     */ 
    function accessSpecialContent(RetirementNFTAssociatedTicket retirementNFTAssociatedTicket, uint256 ticketType) public onlyRetirementNFTAssociatedTicketHolder(msg.sender, retirementNFTAssociatedTicket, ticketType) returns (bool) {
        console.log("%s is successful to access special content", msg.sender);
    }

}