const ERC20Token = artifacts.require("StandardERC20");

module.exports = function(deployer) {
  deployer.deploy(ERC20Token,"GBC Token", "GBC",web3.utils.toBN(10000000000000000000));
};
