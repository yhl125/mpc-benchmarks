# result

||95% confidence ops/sec|
|---|---|
|entropy|0.51 ± 6.38% (7 runs sampled)||
|lit|0.914 ±18.59% (10 runs sampled)||
|near|0.10 ±11.70% (5 runs sampled)||
|passport testnet|1.27 ±6.64% (11 runs sampled)||
|passport mainnet|1.49 ±5.77% (12 runs sampled)||
|dwallet|0.04 ±2.42% (5 runs sampled)||
|icp|0.08 ±5.02% (5 runs sampled)|

# entropy
```
cd entropy-cli
yarn
yarn start
? Select Action Sign
? What would you like to do? Sign benchmark
```

# lit
https://github.com/yhl125/js-sdk/tree/benchmark
```
DEBUG=false NETWORK=manzano yarn test:lit --filter=testPkpEthersWithEoaSessionSigsToSignMessage
```

# near
```
yarn test:near
```

# passport
## testnet
https://github.com/yhl125/passport-quickstart/tree/benchmark
```
pnpm install
pnpm run build
pnpm run start
```
## mainnet
https://github.com/yhl125/passport-quickstart/tree/benchmark-mainnet
```
pnpm install
pnpm run build
pnpm run start
```

# dwallet
```
yarn test:dwallet
```

# icp
```
yarn
yarn test
```
dfx_test_key1: Only available on the local replica started by dfx.

test_key_1: Test key available on the ICP mainnet.

key_1: Production key available on the ICP mainnet.

key_1
ecdsa_example_motoko1: https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=yqzf4-zyaaa-aaaag-qkahq-cai

test_key_1
ecdsa_example_motoko0: https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=yxydi-uaaaa-aaaag-qkaha-cai

