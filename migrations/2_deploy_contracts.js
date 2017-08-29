var IanCoinBuyer = artifacts.require("./IanCoinBuyer.sol");
var ICOToken = artifacts.require("./ICOToken.sol");



module.exports = function(deployer) {
  deployer.deploy(IanCoinBuyer, {from: '0xc76c07785211a5d7742060fda6e1a5b6ec2f05d2'});
  deployer.deploy(ICOToken);
};
