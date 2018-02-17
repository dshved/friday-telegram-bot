const emojiRegex = require('emoji-regex');
const regex = emojiRegex();

function convertString(str) {
  let m;
  const arr = [];
  while ((m = regex.exec(str))) {
    const emoji = m[0];
    arr.push(emoji);
  }

  if (arr.length) {
    arr.forEach(item => {
      const re = new RegExp(item, 'g');
      str = str.replace(re, '');
    });
  }
  return { str, arr };
}

function replaceEmoji(str, arr) {
  let message;
  if (arr.length) {
    if (arr.length === 2) {
      message = str.text
        .replace(/:white_circle:/g, arr[0])
        .replace(/:black_circle:/g, arr[1]);
    } else {
      message = str.text
        .replace(/:white_circle:/g, '⬜️')
        .replace(/:black_circle:/g, arr[0]);
    }
  } else {
    message = str.text
      .replace(/:white_circle:/g, '⬜️')
      .replace(/:black_circle:/g, '⬛️');
  }
  return message;
}

module.exports = {
  convertString,
  replaceEmoji
};
