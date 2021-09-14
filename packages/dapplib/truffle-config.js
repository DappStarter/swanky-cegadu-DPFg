require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name random night umbrella good praise army genre'; 
let testAccounts = [
"0xaa0fcdb61aa57de3a4c6934f807c2d86464c773545dfb02bf76febacd7efd268",
"0xf087b74084bd22f8f8ddef38a166c00c0aaa424ab5f065b06d9097b43ae80697",
"0x60cdf2ac3ebfb89ce7df80accc3560fb9939844371379a9447d14c013f73f19a",
"0x1866edb40b82c71bfcb3815a632ca76128b36968a9f7f20e2f9db77d5ab9c52c",
"0x17ff6beabb25370f8279d19a3a2131278bdd492aaa6cdb56663da530d78858d7",
"0xbdb7f7acbe6292afe5cf9d7ba691ab594e80666ad85dfd12b551258fb7295807",
"0xf1787b37d788f7fe9bc4aaa696209c1a7b013e519f144eecf8982f0e1fc2581d",
"0xc3504ba7152fce942c7cda7376deec32a69113085e7908e2530b0c6f3b2b69d0",
"0xbaf742df6e4a350baaf9531afe1f29f2c78fae46beb2229c718282b860385e89",
"0x05d2b181666646043ead331a17a94fa9f3a4cf1f3a74de1da55bc708381bf607"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

