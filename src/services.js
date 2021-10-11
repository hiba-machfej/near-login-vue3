import { keyStores, Near, WalletConnection } from 'near-api-js';

export const CONTRACT_ID = "guest-book.testnet";

export const near = new Near({
  networkId: 'testnet',
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org'
});

export const wallet = new WalletConnection(near, 'guest-book');