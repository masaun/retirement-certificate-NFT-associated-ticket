// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

/**
 * @title DataTypes
 */
library DataTypes {

    /**
     * @notice - Data of RetirementNFT's Metadata
     */ 
    struct RetirementNFTBundledTicketMetadata {
        address ticketHolder; 
        uint256 randomNumber;
    }

    /**
     * @notice - Enum of Something
     */ 
    enum SomethingEnum {
        SOMETHING_1,
        SOMETHING_2,
        SOMETHING_3
    }

}