// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@openzeppelin/contracts/utils/Strings.sol";


contract MarketPlace is ChainlinkClient {
    using Chainlink for Chainlink.Request;
    using Strings for uint256;

    // Chainlink Variables
    address private oracleAddress;
    bytes32 private jobIdNumber;
    uint256 private fee;

    // Chainlink Events
    event PromptSent(bytes32 indexed requestId);
    event PromptRequestFulfilled(bytes32 indexed requestId, bool result);
    
    constructor(
        address _oracleAddress,
        bytes32 _jobIdNumber,
        uint256 _price) {

        oracleAddress = _oracleAddress;
        jobIdNumber = _jobIdNumber;
        
    }

    function CreateURI() internal view returns(string memory) {
        uint256 total = GeNFT.getTotalTokens();
        return string(abi.encodePacked("www.link-exemplo.com/", total.toString()));
    }

    function SendPrompt(string memory _prompt) public payable {
        Chainlink.Request memory req = buildChainlinkRequest(
            jobIdNumber,
            address(this),
            this.fulfillPrompt.selector
        );

        
        GeNFT.mint(msg.sender, CreateURI());
        GenIA.burn(msg.sender, price);

        req.add("get", _prompt);

        bytes32 request = sendOperatorRequest(req, fee);

        emit PromptSent(request);
    }

    function fulfillPrompt(
        bytes32 requestId,
        bool _result
    ) public recordChainlinkFulfillment(requestId) {
        emit PromptRequestFulfilled(requestId, _result);
    }


}