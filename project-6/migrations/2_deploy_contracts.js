// migrating the appropriate contracts
var FarmerRole = artifacts.require("./FarmerRole.sol");
var DistributorRole = artifacts.require("./DistributorRole.sol");
var RetailerRole = artifacts.require("./RetailerRole.sol");
var ConsumerRole = artifacts.require("./ConsumerRole.sol");
var SupplyChain = artifacts.require("./SupplyChain.sol");

module.exports = function(deployer) {
 deployer.deploy(FarmerRole, {gas: 6721975, from: "0x4E56B59e02F8E4C0961f0E7D59175c29539b4BC4"});
 deployer.deploy(DistributorRole, {gas: 6721975, from: "0x4E56B59e02F8E4C0961f0E7D59175c29539b4BC4"});
 deployer.deploy(RetailerRole, {gas: 6721975, from: "0x4E56B59e02F8E4C0961f0E7D59175c29539b4BC4"});
 deployer.deploy(ConsumerRole, {gas: 6721975, from: "0x4E56B59e02F8E4C0961f0E7D59175c29539b4BC4"});
 deployer.deploy(SupplyChain, {gas: 6721975, from: "0x4E56B59e02F8E4C0961f0E7D59175c29539b4BC4"});
};

