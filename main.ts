// Entry for make.fun's "One Line, One Laugh" bounty: a single joke
// line. This one is a small dark story about houseplants, good
// intentions, and the word "tomorrow" doing a lot of heavy lifting.
// Running the program prints the joke, and nothing else.

/** The joke: the promise, the streak, the funeral arrangements. */
function jokeLine(): string {
  const promise = "I told my plants I'd water them tomorrow";
  const streak = "for a week straight;";
  const funeral =
    "the funeral is Friday, everyone's invited, bring your own watering can.";
  return `${promise} ${streak} ${funeral}`;
}

console.log(jokeLine());
