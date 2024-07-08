import Benchmark from "benchmark";
import {  execSync } from 'child_process';

// Create a benchmark suite
const suite = new Benchmark.Suite();

(async () => {
  try {
    // key_1
    console.log(execSync('dfx canister call --network ic ecdsa_example_motoko1 sign "Hello world" | grep signature'));
    // test_key_1
    // console.log(execSync('dfx canister call --network ic ecdsa_example_motoko0 sign "Hello world" | grep signature'));

    // Add tests
    suite
      .add("icp test", {
        defer: true,
        fn: async (deferred: any) => {
          execSync('dfx canister call --network ic ecdsa_example_motoko1 sign "Hello world" | grep signature');
          deferred.resolve();
        },
      })
      .on("cycle", (event: Benchmark.Event) => {
        console.log(String(event.target));
      })
      .on("complete", function (this: Benchmark.Suite) {
        console.log("Fastest is " + this.filter("fastest").map("name"));
      })
      .run({ async: true });
  } catch (e) {
    console.error(e);
  }
})();
