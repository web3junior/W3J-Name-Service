const main = async () => {
  const domainContractFactory = await hre.ethers.getContractFactory('Domains');
  const domainContract = await domainContractFactory.deploy("w3jr");
  await domainContract.deployed();

  console.log("Contract deployed to:", domainContract.address);

  let txn = await domainContract.register("starter",  {value: hre.ethers.utils.parseEther('0.0001')});
  await txn.wait();
  console.log("Minted domain starter.w3jr");

  txn = await domainContract.setRecord("starter", "Am I a starter or a w3jr??");
  await txn.wait();
  console.log("Set record for starter.w3jr");

  const address = await domainContract.getAddress("starter");
  console.log("Owner of domain starter:", address);

  const balance = await hre.ethers.provider.getBalance(domainContract.address);
  console.log("Contract balance:", hre.ethers.utils.formatEther(balance));

  //0x222BB6Ff8c15E4471B353BA0ac2AF5477c0CE4A4
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();