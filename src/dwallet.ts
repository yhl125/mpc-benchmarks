import { DWalletClient } from "@dwallet-network/dwallet.js/client";
import { Ed25519Keypair } from "@dwallet-network/dwallet.js/keypairs/ed25519";
import { requestSuiFromFaucetV0 as requestDwltFromFaucetV0 } from "@dwallet-network/dwallet.js/faucet";
import { ethers } from "ethers";
var elliptic = require("elliptic");

import {
  createDWallet,
  createSignMessages,
  approveAndSign,
  submitDWalletCreationProof,
  submitTxStateProof,
  recoveryIdKeccak256,
} from "@dwallet-network/dwallet.js/signature-mpc";

// get the dWallet object
const client = new DWalletClient({
  url: "https://fullnode.alpha.testnet.dwallet.cloud",
});
export async function createKeypair() {
  const keypair = new Ed25519Keypair();
  console.log(keypair);
  const response = await requestDwltFromFaucetV0({
    // connect to Testnet faucet
    host: "http://faucet.alpha.testnet.dwallet.cloud/gas",
    recipient: `${keypair.toSuiAddress()}`,
  });
  console.log(response);
  return keypair;
}

export async function dkgDWallet(keypair: Ed25519Keypair) {
  const dkg = await createDWallet(keypair, client);
  return dkg;
}

export async function sign(
  keypair: Ed25519Keypair,
  dkg: {
    dwalletId: string;
    dkgOutput: any;
    dwalletCapId: string;
  }
) {
  const bytes: Uint8Array = new TextEncoder().encode("Hello world");
  const signMessagesIdKECCAK256 = await createSignMessages(
    dkg?.dwalletId!,
    dkg?.dkgOutput,
    [bytes],
    "KECCAK256",
    keypair,
    client
  );
  const sigKECCAK256 = await approveAndSign(
    dkg?.dwalletCapId!,
    signMessagesIdKECCAK256!,
    [bytes],
    keypair,
    client
  );
  return sigKECCAK256;
}
