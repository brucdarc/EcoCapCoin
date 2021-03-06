// invoke the deployment with "node deploy.js" from the ethereum directory

const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");

const compiledTrojanSecret = require("./build/TrojanSecret.json");
console.log(compiledTrojanSecret.interface);
console.log("Copy this ABI into the ABI json variable in file trojanSecret.js");


const provider = new HDWalletProvider(
  "disease bar dignity dog twice acid equal used car math thumb manage",
  "https://mainnet.infura.io/v3/4b124bff20b84cde8de44c12276ee5e9"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);

  console.log("attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledTrojanSecret.interface)
  )
    .deploy({ data: compiledTrojanSecret.bytecode })
    .send({ gas: "3000000", from: accounts[0] });

  console.log("Contract deployed to rinkeby at", result.options.address);
  console.log("Copy this contract address into the address variable in file trojanSecret.js");
};

deploy();


/*

attempting to deploy from account 0x4327D8b79AB0499F81dD801db4365CdC914d6f3f
Contract deployed to rinkeby at 0x9442086DacD07C54381D865cad2160ce921bf1A6

 */

/* Remix deployment from 0x432... deployed to Rinkeby at 0x0114a98807f33ef62c853ef55cc83acf288e54c8 */
