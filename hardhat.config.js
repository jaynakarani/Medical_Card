require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  networks: {
    development: {
      url: "http://localhost:8545",
      chainId: 1337
    },

    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/wVjkVcAd2AsY6lhoiujjs78ZjW29fnGS",
      accounts: [
        "049f94c02bfebb21d9d5bbe4338eca0e8c76889555d4f3f208a40f27fa26f04b",
      ],
    },
  },

  solidity: {
    version: "0.8.9"
  }
};
