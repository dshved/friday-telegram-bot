const aParrots = require('./letters.js');

const replaceTextEmoji = str => {
  const regexpEmoji = /^(:[-\w]+:(.|):[-\w]+:)|(:[-\w]+:)/g;
  let matchEmoji = regexpEmoji.exec(str);
  let emoji = [];
  while (matchEmoji != null) {
    emoji.push(matchEmoji[0]);
    matchEmoji = regexpEmoji.exec(str);
  }
  const obj = {};
  if (emoji.length) {
    emoji = emoji[0].split(/(:\w+:)|(:[-\w]+:)/);
    emoji = emoji.filter(function(n) {
      return n !== undefined && n !== '' && n != ' ';
    });
    let string = emoji.join(' ');
    obj.isExec = true;
    obj.countEmoji = emoji.length;
    obj.emoji = emoji;
    const message = str.substr(string.length, str.length).trim();
    obj.message = message ? message : emoji[1];

    return obj;
  } else {
    obj.message = str;
    obj.countEmoji = 0;
    obj.isExec = false;

    return obj;
  }
};

const sayText = (text, split, maxW) => {
  if (!text) return;
  text = text.toUpperCase();
  let newLetterArray = [];
  let newArray = [];
  let sendMessage = '';
  let randomEmoji = false;
  text = text.substr(0, text.length);
  const newStr = replaceTextEmoji(text);
  let replaced = false;
  let replacedEmoji;
  let replacedBg;
  if (newStr.isExec) {
    replaced = true;
    replacedEmoji = newStr.emoji[0];
    text = newStr.message ? newStr.message : '';
    if (newStr.countEmoji === 2) {
      replacedBg = newStr.emoji[1];
    }
  }
  if (text.length > maxW) {
    return {
      text: 'can not be longer than 20 characters',
      response_type: 'ephemeral'
    };
  }
  if (text) {
    if (split) {
      text.match(/.{1,3}/g).forEach(w => {
        newLetterArray.push(w.split(''));
      });
    } else {
      text.match(/.{1}/g).forEach(w => {
        newLetterArray.push(w.split(''));
      });
    }
  }
  newLetterArray.forEach(item => {
    const newArray = [];
    item.forEach(itm => {
      function findLetter(alphabet) {
        return alphabet.letter === itm;
      }
      if (!!aParrots.find(findLetter)) {
        newArray.push(aParrots.find(findLetter).array);
      }
    });
    const lineCount = 6;

    for (let i = 0; i < lineCount; i++) {
      let line = '';
      if (replacedBg) {
        line += replacedBg;
      }
      if (randomEmoji) {
        line += ':sp:';
      }
      for (let j = 0; j < newArray.length; j++) {
        line += newArray[j][i];
      }
      if (i == 0) {
        let topLine = line.replace(/:\w\w:/g, ':sp:');
        line = topLine + '\n' + line + '\n';
      } else {
        line += '\n';
      }

      sendMessage += line;
    }
  });
  let newMessage = sendMessage;
  newMessage = newMessage.replace(/:sp:/g, ':white_circle:');
  newMessage = newMessage.replace(/:fp:/g, ':black_circle:');
  if (replaced) {
    newMessage = newMessage.replace(/:black_circle:/g, replacedEmoji);
    if (replacedBg) {
      newMessage = newMessage.replace(/:white_circle:/g, replacedBg);
    }
  }
  return { text: newMessage, response_type: 'in_channel' };
};

module.exports = { sayText, replaceTextEmoji };
