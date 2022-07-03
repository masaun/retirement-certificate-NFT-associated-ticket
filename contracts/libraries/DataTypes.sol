// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

/**
 * @title DataTypes
 */
library DataTypes {

    /**
     * @notice - Data of Something
     */ 
    struct SomethingStruct {
        address something1; 
        uint something2;
        string contentHash;
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