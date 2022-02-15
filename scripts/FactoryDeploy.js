const hre = require("hardhat");

async function main() {
    // We get the contract to deploy
    const factory = await hre.ethers.getContractFactory("[Contract Name]");
    const Factory = await factory.deploy();
  
    console.log("Factory deployed to:", Factory.address);
}
  
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});