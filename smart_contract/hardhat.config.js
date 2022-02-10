require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/Ol9TUD96PgGkHcsTCdwXPyespiEId8BC",
      accounts: [
        "f52e846ad42a0ac2603ee2b02a67dff48330c894384fccea516af903ed63ee4a",
      ],
    },
  },
};
