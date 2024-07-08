import { Account, KeyPair, connect, keyStores } from "near-api-js";
import { NearViemAccount, NearViemAccountFactory } from "near-viem";

const TESTNET_CONFIG = {
  networkId: "testnet",
  nodeUrl: "https://rpc.testnet.near.org",
};

interface NearConfig {
  networkId: string;
  nodeUrl: string;
}

const nearAccountFromEnv = async (
  network: NearConfig = TESTNET_CONFIG
): Promise<Account> => {
  const keyPair = KeyPair.fromString(
    "ed25519:21G5n2oCE2oS88m9XEPVtDWqC5y4trc5r66Djq4ZJTDxt8nf1f53SnUUokXFVWAHsYdc9cvK89eqSZmoWJtDT5vH"
  );
  return nearAccountFromKeyPair({
    keyPair,
    accountId: "nearviem.testnet",
    network,
  });
};

const nearAccountFromKeyPair = async (config: {
  keyPair: KeyPair;
  accountId: string;
  network?: NearConfig;
}): Promise<Account> => {
  const keyStore = new keyStores.InMemoryKeyStore();
  await keyStore.setKey("testnet", config.accountId, config.keyPair);
  const near = await connect({
    ...(config.network || TESTNET_CONFIG),
    keyStore,
  });
  const account = await near.account(config.accountId);
  return account;
};

export async function testNearWalletAndSignMessage(account: NearViemAccount) {
  const sig = await account.signMessage({ message: "Hello World" });
  return sig;
}

export async function createNearViemAccount() {
  const account = await nearAccountFromEnv();
  const viemAccount = await NearViemAccountFactory(account);
  return viemAccount;
}