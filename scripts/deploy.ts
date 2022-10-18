// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const baseTokenURI = "https://gateway.pinata.cloud/ipfs/QmQPo4qQYNJJHtz6CZtu1ULMQt8EwSQtLpSyWB39sU5Xyf/"; 
  // Get contract that we want to deploy
  const contractFactory = await ethers.getContractFactory("PokeMonCollectible");
  // Deploy contract with the correct constructor arguments
  const contract = await contractFactory.deploy(baseTokenURI);

   // Wait for this transaction to be mined
   await contract.deployed();

  console.log("NFTCollectible deployed to:", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });