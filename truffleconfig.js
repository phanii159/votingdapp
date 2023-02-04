/**
reference  https://trufflesuite.com/docs/truffle/reference/configuration
 */

require('dotenv').config();
// const MNEMONIC = process.env.REACT_APP_MNEMONIC;
// const PROJECT_ID = process.env.REACT_APP_PROJECT_ID;

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  contracts_build_directory: "client/src/contracts",
  networks: {
    goerli: {
      provider: () => new HDWalletProvider(process.env.REACT_APP_MNEMONIC, `https://goerli.infura.io/v3/${process.env.REACT_APP_PROJECT_ID}`),
      network_id: 5,       // Goerli's id
      confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.17" // Fetch exact version from solc-bin (default: truffle's version)
    }
  }

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
  //   enabled: false,
  //   host: "127.0.0.1",
  //   adapter: {
  //     name: "indexeddb",
  //     settings: {
  //       directory: ".db"
  //     }
  //   }
  // }
};