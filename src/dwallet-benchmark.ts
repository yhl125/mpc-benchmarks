import Benchmark from "benchmark";
import { createKeypair, dkgDWallet, sign } from "./dwallet";

// Create a benchmark suite
const suite = new Benchmark.Suite();

(async () => {
  try {
    const keypair = await createKeypair();
    const dkg = await dkgDWallet(keypair);
    // const res = await sign(keypair, dkg);
    // console.log(res);

    // Add tests
    suite
      .add("Dwallet test", {
        defer: true,
        fn: async (deferred: any) => {
          await sign(keypair, dkg);
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
