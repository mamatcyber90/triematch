// @flow
'use strict'

const createBenchmark = require('./lib/createBenchmark')
const runBenchmarks = require('./lib/runBenchmarks')

const a = [
  createBenchmark({
    name: 'reset (0 items store)',
    test ({ store0: store }) {
      return () => {
        store.reset()
      }
    }
  }),
  createBenchmark({
    name: 'reset (100 items store)',
    test ({ store100: store }) {
      return () => {
        store.reset()
      }
    }
  }),
  createBenchmark({
    name: 'reset (1k items store)',
    test ({ store1k: store }) {
      return () => {
        store.reset()
      }
    }
  }),
  createBenchmark({
    name: 'reset (50k items store)',
    test ({ store50k: store }) {
      return () => {
        store.reset()
      }
    }
  }),
  createBenchmark({
    name: 'reset (200k items store)',
    test ({ store200k: store }) {
      return () => {
        store.reset()
      }
    }
  })
]

const benchmarks = [
  ...a
]

if (require.main === module) {
  runBenchmarks(benchmarks)
}

module.exports = benchmarks
