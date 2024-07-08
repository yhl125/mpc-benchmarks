import Benchmark from "benchmark";
import { createNearViemAccount, testNearWalletAndSignMessage } from "./near";

// Create a benchmark suite
const suite = new Benchmark.Suite();

(async () => {
  try {
    const account = await createNearViemAccount();

    // Add tests
    suite
      .add("Sign test", {
        defer: true,
        fn: async (deferred: any) => {
          await testNearWalletAndSignMessage(account);
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
