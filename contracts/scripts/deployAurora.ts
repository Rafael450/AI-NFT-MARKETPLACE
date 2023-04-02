import { ethers } from "hardhat";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = ethers.utils.parseEther("1");

  const GENFT = await ethers.getContractFactory("GenIA_NFT");
  const genft = await GENFT.deploy();
  
  await genft.deployed();
  console.log("Contract address:", genft.address);

  const Token = await ethers.getContractFactory("GenIA_Token");
  const token = await Token.deploy(ethers.utils.parseEther("1"));

  await token.deployed();
  console.log("Contract address:", token.address);

  
  const Market = await ethers.getContractFactory("MarketPlace");
  const market = await Market.deploy(token.address, genft.address, ethers.utils.parseEther("0.00001"));

  await market.deployed();
  console.log("Contract address:", market.address);




}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
