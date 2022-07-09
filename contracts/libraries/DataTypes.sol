// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

/**
 * @title DataTypes
 */
library DataTypes {

    /**
     * @notice - Data of RetirementNFT's Metadata
     */ 
    struct RetirementNFTAssociatedTicketMetadata {
        address ticketHolder; 
        uint256 ticketNumber;
    }

    /**
     * @notice - Enum of TicketType (for ERC1155-based ticket)
     */ 
    enum TicketType {
        TICKET_TYPE_1,
        TICKET_TYPE_2,
        TICKET_TYPE_3
    }

}