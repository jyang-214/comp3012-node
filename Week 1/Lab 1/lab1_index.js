function wordPosition(words) {
  const positions = {};
  words.forEach((word, index) => {
    if (positions[word]) {
      positions[word].push(index);
    } else {
      positions[word] = [index];
    }
  });

  return positions;
}

var input = [
  "buy",
  "it",
  "use",
  "it",
  "break",
  "it",
  "fix",
  "it",
  "trash",
  "it",
  "change",
  "it",
  "mail",
  "upgrade",
  "it",
];

var output = wordPosition(input);
console.log(output);
