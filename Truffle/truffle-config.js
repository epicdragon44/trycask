var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC =
  "mountain ginger session main whip inform monitor silent kidney dawn swim slim";

module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 7545,
      chainId: 1337,
      network_id: 1337,
    },
  },
  ropsten: {
    provider: function () {
      return new HDWalletProvider(
        MNEMONIC,
        "https://ropsten.infura.io/v3/f801c56dfa7e4daeb24eed8291e79129"
      );
    },
    network_id: 3,
    gas: 4000000, //make sure this gas allocation isn't over 4M, which is the max
  },
  rinkeby: {
    provider: function () {
      return new HDWalletProvider(
        `${process.env.MNEMONIC}`,
        `https://rinkeby.infura.io/v3/${process.env.INFURA_ID}`
      );
    },
    network_id: 4,
  },
  //
  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows:
  // $ truffle migrate --reset --compile-all
  //
  // db: {
  //   enabled: true,
  //   host: "127.0.0.1",
  //   adapter: {
  //     name: "sqlite",
  //     settings: {
  //       directory: ".db",
  //     },
  //   },
  // },
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: "1VDYNYWRKD7BUSNRETEZU8IKUS6TF3U4D6",
  },
};
