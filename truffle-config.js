const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

const { INFURA_ID, MNEMONIC } = process.env;

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 5000000,
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(MNEMONIC, INFURA_ID);
      },
      network_id: 3,
    },
  },
  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200, // Default: 200
        },
      },
    },
  },
  plugins: ["truffle-plugin-verify"], //PLUGIN ADDED HERE
  api_keys: {
    etherscan: "1VDYNYWRKD7BUSNRETEZU8IKUS6TF3U4D6",
  },
};
