#!/usr/bin/env node

"use strict";

const parseArgs = require("minimist");

const args = parseArgs(process.argv.slice(2), {
  boolean: ["help"]
});

if (args.help) {
  printHelp();
} else if (process.argv.length == 2) {
  flipCoins();
} else if (process.argv.length == 3 && typeof args._[0] === "number") {
  if (args._[0] === 1) {
    flipCoins(1);
  } else {
    flipCoins(args._[0]);
  }
} else {
  printError("Incorrect usage.", true);
}

function flipCoins(numOfTimes = 1) {
  const result = { heads: 0, tails: 0, outcomes: [] };

  for (let i = 0; i < numOfTimes; i++) {
    let rand = Math.random();
    if (rand < 0.5) {
      result.heads++;
      result.outcomes.push("Heads");
    } else {
      result.tails++;
      result.outcomes.push("Tails");
    }
  }

  if (numOfTimes == 1) console.log(result.outcomes[0]);
  else {
    console.log("Heads: ", result.heads);
    console.log("Tails: ", result.tails);
  }
}

function printError(msg, showHelp = false) {
  console.error(msg);
  if (showHelp) printHelp();
}

function printHelp() {
  console.log("");
  console.log("Coin Flipper Usage:");
  console.log("");
  console.log("./flip.js {NO_OF_TIMES}");
  console.log("--help                         print this help");
  console.log("");
}
