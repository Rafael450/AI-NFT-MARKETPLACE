// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

interface GENAI {
    function balanceOf(address account) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}

contract MarketPlace is ChainlinkClient {
    using Chainlink for Chainlink.Request;

    GENAI public GenAI;
    
    constructor(address _tokenContract) {
        GenAI = GENAI(_tokenContract);
    }

    function SendPrompt(string memory _prompt) public {
        Chainlink.Request memory req = buildChainlinkRequest(
            jobIdMultipleNumbers,
            address(this),
            this.fulfillResults.selector
        );
        
    }


}