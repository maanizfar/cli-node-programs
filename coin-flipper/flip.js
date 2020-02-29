#!/usr/bin/env node

"use strict";

const parseArgs = require("minimist");

const args = parseArgs(process.argv.slice(2), {
  boolean: ["help"]
});

if (args.help) {
  printHelp();
} else if (process.argv.length == 2) {
  console.log(flipCoin());
} else if (process.argv.length == 3 && typeof args._[0] === "number") {
  if (args._[0] === 1) {
    console.log(flipCoin());
  } else {
    flipnCoins(args._[0]);
  }
} else {
  printError("Incorrect usage.", true);
}

function flipCoin() {
  let rand = Math.random();
  let output = "";
  if (rand < 0.5) {
    output = "Head";
  } else {
    output = "Tails";
  }
  return output;
}

function flipnCoins(n) {
  let heads = 0;
  let tails = 0;
  for (let i = 0; i < n; i++) {
    if (flipCoin() === "Head") heads++;
    else tails++;
  }
  console.log("Heads: ", heads);
  console.log("Tails: ", tails);
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
