const natural = require("natural");
const stopword = require("stopword");

const tokenizer = new natural.WordTokenizer();

function generateTags(text) {
  // Tokenize the input text
  let tokens = tokenizer.tokenize(text.toLowerCase());

  // Remove stopwords
  tokens = stopword.removeStopwords(tokens);

  // Frequency analysis
  const frequency = {};
  tokens.forEach((token) => {
    if (!frequency[token]) {
      frequency[token] = 1;
    } else {
      frequency[token]++;
    }
  });

  // Convert the frequency object to an array and sort by frequency
  const sortedTokens = Object.keys(frequency).sort(
    (a, b) => frequency[b] - frequency[a]
  );

  // Select the top 5 tokens as tags
  return sortedTokens.slice(0, 5);
}

module.exports = generateTags;
