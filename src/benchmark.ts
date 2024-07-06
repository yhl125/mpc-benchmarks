// import Benchmark from 'benchmark';

// // Function to be benchmarked
// const add = (a: number, b: number): number => a + b;

// // Another function to be benchmarked
// const multiply = (a: number, b: number): number => a * b;

// // Create a benchmark suite
// const suite = new Benchmark.Suite();

// // Add tests
// suite
//   .add('Addition', () => {
//     add(1, 2);
//   })
//   .add('Multiplication', () => {
//     multiply(1, 2);
//   })
//   .on('cycle', (event: Benchmark.Event) => {
//     console.log(String(event.target));
//   })
//   .on('complete', function (this: Benchmark.Suite) {
//     console.log('Fastest is ' + this.filter('fastest').map('name'));
//   })
//   // Run async
//   .run({ async: true });
