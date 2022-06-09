// watch-for-mints.js

// npm install @alch/alchemy-web3
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

// TODO: Replace this with your key.
const alchemyApiKey = "eT95vGvOpL_uFbm_GwQHHc2rj4_UWzDB";

// NFT mints emit Transfer events with "from" set to 0x0.

// This is the "transfer event" topic we want to watch.
const mintTopic = "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";
// This is the "from address" we want to watch.
const zeroTopic = "0x0000000000000000000000000000000000000000000000000000000000000000";
// This is the NFT contract we want to watch.
const nftContractAddress = "0xbd34d145fcfd3992a0def1057891d51339a90128";

// Initialize alchemy-web3 object.
// Docs: https://docs.alchemy.com/alchemy/documentation/subscription-api-websockets
const web3 = createAlchemyWeb3(
    `wss://eth-rinkeby.ws.alchemyapi.io/ws/${alchemyApiKey}`
);

// Create the log options object.
const hackrDaoMintEvents = {
    address: nftContractAddress,
    topics: [mintTopic, zeroTopic]
}

// TODO: Add whatever logic you want to run upon mint events.
console.log("we are checking");
const doSomethingWithTxn = (txn) => console.log(txn);

// Open the websocket and listen for events!
web3.eth.subscribe("logs", hackrDaoMintEvents).on("data", doSomethingWithTxn);