import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-deploy";
import "@nomicfoundation/hardhat-ignition-ethers";
import dotenv from 'dotenv';

dotenv.config();


/** @type import('hardhat/config').HardhatUserConfig */
const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      }
    ],
  },
  paths: {
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      forking: {
        url: 'https://api.test.wemix.com',
      }
    },
    localhost: {
      url: 'http://127.0.0.1:8545'
    },
    wemixTest: {
      url: 'https://api.test.wemix.com',
      accounts: [process.env.PRIVATE_KEY!],
      chainId: 1112,
      gasPrice: 222000000000,
    },
    metaTest: {
      url: 'https://api.metadium.com/dev',
      accounts: [process.env.PRIVATE_KEY!],
      chainId: 12,
      gasPrice: 111000000000,
    },
    sepolia: {
      url: 'https://sepolia.infura.io/v3/6c315e68c0ae4344a12be2048f8e85dd',
      accounts: [process.env.PRIVATE_KEY!],
      gasPrice: 111000000000,
    }
  },
  namedAccounts: {
    deployer: {
      default: 0,
    }
  }
};

export default config;
