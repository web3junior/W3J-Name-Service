require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: `${process.env.QUICKNODE_MUMBAI_URL}`,
      accounts: [`${process.env.MUMBAI_PRIVATE_KEY}`],
    }
  }
};
