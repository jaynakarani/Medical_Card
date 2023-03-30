// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
//pragma solidity ^0.8.0;

contract Lock {

    uint temp_id=1;
    struct Card {
        uint Id;
        string Patient_Name;
        uint Patient_dob;
        string Patient_bloodgroup;
        string Patient_address;
        string Patient_hash;
        uint Patient_number;
        string sex;
    }

    mapping (uint256 => Card) public patient;

    function set_id_card(string memory Name,uint Date_Of_Birth,string memory Blood_Group,string memory Address,string memory Hash,uint number,string memory sex1) public {
        patient[temp_id].Id = temp_id;
        patient[temp_id].Patient_Name = Name;
        patient[temp_id].Patient_dob = Date_Of_Birth;
        patient[temp_id].Patient_bloodgroup = Blood_Group;
        patient[temp_id].Patient_address = Address;
        patient[temp_id].Patient_hash = Hash;
        patient[temp_id].Patient_number = number;
        patient[temp_id].sex = sex1; 
        temp_id++;
    }

    function get_patient(uint256 user_id) external view returns (Card memory) {
        return patient[user_id];
    }
}