// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@openzeppelin/contracts/utils/Strings.sol";


interface GENIA {
    function balanceOf(address account) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function burn(uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}

interface GENFT {
    function mint(address to, string memory tokenURI_) external view returns (uint256);
    function transfer(address to, uint256 _tokenId) external returns (bool);
    function getNum(address _target) external view returns(address);
}

contract MarketPlace is ChainlinkClient {
    using Chainlink for Chainlink.Request;
    using Strings for uint256;

    GENIA public GenIA;
    GENFT public GeNFT;

    uint256 public price;

    // Chainlink Variables
    address private oracleAddress;
    bytes32 private jobIdNumber;
    uint256 private fee;

    // Chainlink Events
    event PromptSent(bytes32 indexed requestId);
    event PromptRequestFulfilled(bytes32 indexed requestId, bool result);

    
    constructor(
        address _tokenContract,
        address _NFTContract,
        address _oracleAddress) {

        oracleAddress = _oracleAddress;
        GenIA = GENIA(_tokenContract);
        GeNFT = GENFT(_NFTContract);
        
    }

    function CreateURI() internal view returns(string memory) {
        return string(abi.encodePacked("www.link-exemplo.com/",abi.encodePacked(msg.sender), abi.encodePacked(GeNFT.getNum(msg.sender))));
    }

    function SendPrompt(string memory _prompt) public {
        Chainlink.Request memory req = buildChainlinkRequest(
            jobIdNumber,
            address(this),
            this.fulfillPrompt.selector
        );

        
        GeNFT.mint(msg.sender, CreateURI());
        GenIA.burn(price);

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