require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million puppy grace clock outer switch'; 
let testAccounts = [
"0xe09d1e70056949f7402e82827dd7e00c758db44c42c4f5dd1e027598411c165f",
"0x9fbfcd5c7a0ec240203257ca522814527363403bff06bd7ee547443dc441ec7c",
"0xb19f84524cbb4a4cca5de7e4d152ad1ac9cf683fe55bc5e0c21043c6e989dff0",
"0xa00615ff98a8c03b3967691cabad7120880fbd8f6a45bbd620e2702a8bd66ebd",
"0x59a0555fdebf4fcc44f749b4124215bbc3a3c9d10a06b194cd85ee139a6291ca",
"0xefa88b709739ca0b84a2eb116542ce1468188ae2a2651b50d6bb2142e88118f8",
"0x91240b00498f9c1ee632f416c58fc9aedf29726c0dfbd4d02083a2814eb2001f",
"0x1e85ed04417c640b8ec3e14c32d2e42c33c800c62a95b31ecba923745d972c05",
"0xa6e13bbfabffb72bf43c4444bfd2db54bc5e4e84b553eb21b4816fa0fa1eb0de",
"0x678ebcaca8b035dadac8d35e2f9f19f3a14f7cd903a6095dfdc661af77f82540"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


