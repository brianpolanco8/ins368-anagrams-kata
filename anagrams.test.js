const fs = require("fs");
const anagrams = require("./anagrams");

let array = [];

describe("first test", () => {
  test("should return 20683 anagrams", () => {
    array = fs.readFileSync("./wordlist.txt").toString().split("\n");
    expect(anagrams(array).count).toEqual(20683);
  });

  test("should return 3 anagrams", () => {
    array = fs.readFileSync("./words.txt").toString().split("\n");
    expect(anagrams(array).count).toEqual(3);
  });
});
