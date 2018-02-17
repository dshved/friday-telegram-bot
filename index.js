const TelegramBot = require('node-telegram-bot-api');
const token = require('./config').token;
const bot = new TelegramBot(token, { polling: true });
const { sayText } = require('./say');
const { replaceEmoji, convertString } = require('./utils');

bot.onText(/\/start/, (msg, match) => {
  const chatId = msg.chat.id;
  const message =
    'Hey. So far I have only two commands.\nWrite /say if you want to write the text from the emoji in the line and /speak in the column.';
  bot.sendMessage(chatId, message);
});

bot.onText(/\/say (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  let text = match[1];
  const { str, arr } = convertString(text);
  let message = sayText(str.trim(), true, 20);
  message = replaceEmoji(message, arr);
  bot.sendMessage(chatId, message);
});

bot.onText(/\/say/, (msg, match) => {
  const chatId = msg.chat.id;
  const message =
    'Send text to line as emoji.\nUse [emoji_text] [emoji_background] to select other emoji.\nExamples:\n/say hello\n/say 🌸 hello\n/say 🐱 🐶 hello';
  if (msg.text === '/say') bot.sendMessage(chatId, message);
});

bot.onText(/\/speak (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  let text = match[1];
  const { str, arr } = convertString(text);
  let message = sayText(str.trim(), false, 20);
  message = replaceEmoji(message, arr);
  bot.sendMessage(chatId, message);
});

bot.onText(/\/speak/, (msg, match) => {
  const chatId = msg.chat.id;
  const message =
    'Send text to column as emoji.\nUse [emoji_text] [emoji_background] to select other emoji.\nExamples:\n/speak hello\n/speak 🌸 hello\n/speak 🐱 🐶 hello';
  if (msg.text === '/speak') bot.sendMessage(chatId, message);
});
