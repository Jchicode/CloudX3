require("@nomicfoundation/hardhat-toolbox");
require("./tasks");
require("dotenv").config();

const COMPILER_SETTINGS = {
  optimizer: {
    enabled: true,
    runs: 1000000
  },
  metadata: {
    bytecodeHash: "none"
  }
};

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const REPORT_GAS = process.env.REPORT_GAS || false;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.7",
        COMPILER_SETTINGS
      },
      {
        version: "0.6.6",
        COMPILER_SETTINGS
      },
      {
        version: "0.8.13",
        COMPILER_SETTINGS
      },
      {
        version: "0.7.6",
        COMPILER_SETTINGS
      }
    ]
  },
  defaultNetwork: "opbnb",
  networks: {
    opbnb: {
      url: "https://opbnb-testnet.nodereal.io/v1/6eedbe8fa35e4aaebdd93ad9587f2a03",
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 5611,
      gasPrice: 3500,
    }
  },
  gasReporter: {
    enabled: REPORT_GAS,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true
  },
  contractSizer: {
    runOnCompile: false,
    only: ["APIConsumer"]
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./build/cache",
    artifacts: "./build/artifacts"
  },
  mocha: {
    timeout: 300000 // 300 seconds max for running tests
  }
};
