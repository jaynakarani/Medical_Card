// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract MyContract {


    uint256 public myNumber;

    constructor(uint256 _myNumber) {
        myNumber = _myNumber;
    }

    uint temp_id=1;
    struct Card {
        uint Id;
        string Patient_Name;
    }

    mapping (uint256 => Card) public patient;

    function set_id_card(string memory Name) public {
        patient[temp_id].Id = temp_id;
        patient[temp_id].Patient_Name = Name;
        temp_id++;
    }

    function get_patient(uint256 user_id) external view returns (Card memory) {
        return patient[user_id];
    }
}