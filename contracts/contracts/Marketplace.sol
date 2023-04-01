// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

interface GENAI {
    function balanceOf(address account) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function burn(uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}

contract MarketPlace is ChainlinkClient {
    using Chainlink for Chainlink.Request;

    GENAI public GenAI;

    // Chainlink Variables
    address private oracleAddress;
    bytes32 private jobIdNumber;
    uint256 private fee;

    // Chainlink Events
    event PromptSent(bytes32 indexed requestId);
    event PromptRequestFulfilled(bytes32 indexed requestId, bool result);

    
    constructor(
        address _tokenContract,
        address _oracleAddress) {

        oracleAddress = _oracleAddress;
        GenAI = GENAI(_tokenContract);
    }

    function SendPrompt(string memory _prompt) public {
        Chainlink.Request memory req = buildChainlinkRequest(
            jobIdNumber,
            address(this),
            this.fulfillPrompt.selector
        );

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