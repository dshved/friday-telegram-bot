const letters = [
  {
    letter: 'А',
    array: [
      ':sp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::fp::fp::fp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':sp::fp::fp::fp::sp:\n:fp::sp::sp::sp::fp:\n:fp::fp::fp::fp::fp:\n:fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'Б',
    array: [
      ':fp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::sp::sp:',
      ':fp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::fp::fp::fp::sp:\n:fp::sp::sp::sp::sp:\n:fp::fp::fp::fp::sp:\n:fp::sp::sp::sp::fp:\n:fp::fp::fp::fp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'В',
    array: [
      ':fp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::fp::fp::fp::sp:\n:fp::sp::sp::sp::fp:\n:fp::fp::fp::fp::sp:\n:fp::sp::sp::sp::fp:\n:fp::fp::fp::fp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'Г',
    array: [
      ':fp::fp::fp::sp:',
      ':fp::sp::sp::sp:',
      ':fp::sp::sp::sp:',
      ':fp::sp::sp::sp:',
      ':fp::sp::sp::sp:',
      ':sp::sp::sp::sp:'
    ],
    text:
      ':fp::fp::fp::sp::sp:\n:fp::sp::sp::sp::sp:\n:fp::sp::sp::sp::sp:\n:fp::sp::sp::sp::sp:\n:fp::sp::sp::sp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'Д',
    array: [
      ':sp::sp::fp::fp::fp::sp::sp:',
      ':sp::fp::sp::sp::fp::sp::sp:',
      ':sp::fp::sp::sp::fp::sp::sp:',
      ':sp::fp::sp::sp::fp::sp::sp:',
      ':fp::fp::fp::fp::fp::fp::sp:',
      ':fp::sp::sp::sp::sp::fp::sp:'
    ],
    text:
      ':sp::sp::fp::fp::fp::sp:\n:sp::fp::sp::sp::fp::sp:\n:sp::fp::sp::sp::fp::sp:\n:sp::fp::sp::sp::fp::sp:\n:fp::fp::fp::fp::fp::fp:\n:fp::sp::sp::sp::sp::fp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'Е',
    array: [
      ':fp::fp::fp::fp::sp:',
      ':fp::sp::sp::sp::sp:',
      ':fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::sp:',
      ':fp::fp::fp::fp::sp:',
      ':sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::fp::fp::fp:\n:fp::sp::sp::sp:\n:fp::fp::fp::sp:\n:fp::sp::sp::sp:\n:fp::fp::fp::fp:\n:sp::sp::sp::sp:\n'
  },
  {
    letter: 'Ё',
    array: [
      ':fp::fp::fp::fp::sp:',
      ':fp::sp::sp::sp::sp:',
      ':fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::sp:',
      ':fp::fp::fp::fp::sp:',
      ':sp::sp::sp::sp::sp:'
    ],
    text:
      ':sp::fp::fp::sp:\n:fp::fp::fp::fp:\n:fp::sp::sp::sp:\n:fp::fp::fp::sp:\n:fp::sp::sp::sp:\n:fp::fp::fp::fp:\n:sp::sp::sp::sp:\n'
  },
  {
    letter: 'Ж',
    array: [
      ':fp::sp::sp::fp::sp::sp::fp::sp:',
      ':sp::fp::sp::fp::sp::fp::sp::sp:',
      ':sp::sp::fp::fp::fp::sp::sp::sp:',
      ':sp::fp::sp::fp::sp::fp::sp::sp:',
      ':fp::sp::sp::fp::sp::sp::fp::sp:',
      ':sp::sp::sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::sp::sp::fp::sp::sp::fp:\n:sp::fp::sp::fp::sp::fp::sp:\n:sp::sp::fp::fp::fp::sp::sp:\n:sp::fp::sp::fp::sp::fp::sp:\n:fp::sp::sp::fp::sp::sp::fp:\n:sp::sp::sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'З',
    array: [
      ':fp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::fp::sp:',
      ':fp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::fp::sp:',
      ':fp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::fp::fp::fp::sp:\n:sp::sp::sp::sp::fp:\n:fp::fp::fp::fp::sp:\n:sp::sp::sp::sp::fp:\n:fp::fp::fp::fp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'И',
    array: [
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::fp::fp::sp:',
      ':fp::sp::fp::sp::fp::sp:',
      ':fp::fp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::sp::sp::sp::fp:\n:fp::sp::sp::fp::fp:\n:fp::sp::fp::sp::fp:\n:fp::fp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'Й',
    array: [
      ':fp::sp::fp::sp::fp::sp:',
      ':fp::sp::sp::fp::fp::sp:',
      ':fp::sp::fp::sp::fp::sp:',
      ':fp::fp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::sp::fp::sp::fp:\n:fp::sp::sp::fp::fp:\n:fp::sp::fp::sp::fp:\n:fp::fp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'К',
    array: [
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::fp::sp::sp:',
      ':fp::fp::fp::sp::sp::sp:',
      ':fp::sp::sp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::sp::sp::sp::fp:\n:fp::sp::sp::fp::sp:\n:fp::fp::fp::sp::sp:\n:fp::sp::sp::fp::sp:\n:fp::sp::sp::sp::fp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'Л',
    array: [
      ':sp::sp::fp::sp::sp::sp:',
      ':sp::fp::sp::fp::sp::sp:',
      ':sp::fp::sp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':sp::sp::fp::sp::sp:\n:sp::fp::sp::fp::sp:\n:sp::fp::sp::fp::sp:\n:fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'М',
    array: [
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::fp::sp::fp::fp::sp:',
      ':fp::sp::fp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::sp::sp::sp::fp:\n:fp::fp::sp::fp::fp:\n:fp::sp::fp::sp::fp:\n:fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'Н',
    array: [
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::fp::fp::fp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:fp::fp::fp::fp::fp:\n:fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'О',
    array: [
      ':sp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':sp::fp::fp::fp::sp:\n:fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:sp::fp::fp::fp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'П',
    array: [
      ':fp::fp::fp::fp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::fp::fp::fp::fp:\n:fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'Р',
    array: [
      ':fp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::sp::sp:',
      ':fp::sp::sp::sp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::fp::fp::fp::sp:\n:fp::sp::sp::sp::fp:\n:fp::fp::fp::fp::sp:\n:fp::sp::sp::sp::sp:\n:fp::sp::sp::sp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'С',
    array: [
      ':sp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':sp::fp::fp::fp::sp:\n:fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::sp:\n:fp::sp::sp::sp::fp:\n:sp::fp::fp::fp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'Т',
    array: [
      ':fp::fp::fp::fp::fp::sp:',
      ':sp::sp::fp::sp::sp::sp:',
      ':sp::sp::fp::sp::sp::sp:',
      ':sp::sp::fp::sp::sp::sp:',
      ':sp::sp::fp::sp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::fp::fp::fp::fp:\n:sp::sp::fp::sp::sp:\n:sp::sp::fp::sp::sp:\n:sp::sp::fp::sp::sp:\n:sp::sp::fp::sp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'У',
    array: [
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::fp::fp::fp::fp::sp:',
      ':sp::sp::sp::sp::fp::sp:',
      ':sp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:sp::fp::fp::fp::fp:\n:sp::sp::sp::sp::fp:\n:sp::fp::fp::fp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'Ф',
    array: [
      ':sp::sp::sp::fp::sp::sp::sp::sp:',
      ':sp::fp::fp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::fp::sp::sp::fp::sp:',
      ':sp::fp::fp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::fp::sp::sp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':sp::sp::sp::fp::sp::sp::sp:\n:sp::fp::fp::fp::fp::fp::sp:\n:fp::sp::sp::fp::sp::sp::fp:\n:sp::fp::fp::fp::fp::fp::sp:\n:sp::sp::sp::fp::sp::sp::sp:\n:sp::sp::sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'Х',
    array: [
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::fp::sp::fp::sp::sp:',
      ':sp::sp::fp::sp::sp::sp:',
      ':sp::fp::sp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::sp::sp::sp::fp:\n:sp::fp::sp::fp::sp:\n:sp::sp::fp::sp::sp:\n:sp::fp::sp::fp::sp:\n:fp::sp::sp::sp::fp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'Ц',
    array: [
      ':fp::sp::sp::sp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp::sp:',
      ':fp::fp::fp::fp::fp::fp::sp:',
      ':sp::sp::sp::sp::sp::fp::sp:'
    ],
    text:
      ':fp::sp::sp::sp::fp::sp:\n:fp::sp::sp::sp::fp::sp:\n:fp::sp::sp::sp::fp::sp:\n:fp::sp::sp::sp::fp::sp:\n:fp::fp::fp::fp::fp::fp:\n:sp::sp::sp::sp::sp::fp:\n'
  },
  {
    letter: 'Ч',
    array: [
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::fp::fp::fp::fp::sp:',
      ':sp::sp::sp::sp::fp::sp:',
      ':sp::sp::sp::sp::fp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:sp::fp::fp::fp::fp:\n:sp::sp::sp::sp::fp:\n:sp::sp::sp::sp::fp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'Ш',
    array: [
      ':fp::sp::sp::fp::sp::sp::fp::sp:',
      ':fp::sp::sp::fp::sp::sp::fp::sp:',
      ':fp::sp::sp::fp::sp::sp::fp::sp:',
      ':fp::sp::sp::fp::sp::sp::fp::sp:',
      ':fp::fp::fp::fp::fp::fp::fp::sp:',
      ':sp::sp::sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::sp::sp::fp::sp::sp::fp:\n:fp::sp::sp::fp::sp::sp::fp:\n:fp::sp::sp::fp::sp::sp::fp:\n:fp::sp::sp::fp::sp::sp::fp:\n:fp::fp::fp::fp::fp::fp::fp:\n:sp::sp::sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'Щ',
    array: [
      ':fp::sp::sp::fp::sp::sp::fp::sp:',
      ':fp::sp::sp::fp::sp::sp::fp::sp:',
      ':fp::sp::sp::fp::sp::sp::fp::sp:',
      ':fp::sp::sp::fp::sp::sp::fp::sp:',
      ':fp::fp::fp::fp::fp::fp::fp::fp:',
      ':sp::sp::sp::sp::sp::sp::sp::fp:'
    ],
    text:
      ':fp::sp::sp::fp::sp::sp::fp::sp:\n:fp::sp::sp::fp::sp::sp::fp::sp:\n:fp::sp::sp::fp::sp::sp::fp::sp:\n:fp::sp::sp::fp::sp::sp::fp::sp:\n:fp::fp::fp::fp::fp::fp::fp::fp:\n:sp::sp::sp::sp::sp::sp::sp::fp:\n'
  },
  {
    letter: 'Ъ',
    array: [
      ':fp::fp::sp::sp::sp::sp:',
      ':sp::fp::sp::sp::sp::sp:',
      ':sp::fp::fp::fp::sp::sp:',
      ':sp::fp::sp::sp::fp::sp:',
      ':sp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::fp::sp::sp::sp::sp:\n:sp::fp::sp::sp::sp::sp:\n:sp::fp::fp::fp::sp::sp:\n:sp::fp::sp::sp::fp::sp:\n:sp::fp::fp::fp::sp::sp:\n:sp::sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'Ы',
    array: [
      ':fp::sp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::sp::fp::sp:',
      ':fp::fp::fp::sp::sp::fp::sp:',
      ':fp::sp::sp::fp::sp::fp::sp:',
      ':fp::fp::fp::sp::sp::fp::sp:',
      ':sp::sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::sp::sp::sp::sp::fp::sp:\n:fp::sp::sp::sp::sp::fp::sp:\n:fp::fp::fp::sp::sp::fp::sp:\n:fp::sp::sp::fp::sp::fp::sp:\n:fp::fp::fp::sp::sp::fp::sp:\n:sp::sp::sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'Ь',
    array: [
      ':fp::sp::sp::sp::sp:',
      ':fp::sp::sp::sp::sp:',
      ':fp::fp::fp::sp::sp:',
      ':fp::sp::sp::fp::sp:',
      ':fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::sp::sp::sp::sp:\n:fp::sp::sp::sp::sp:\n:fp::fp::fp::sp::sp:\n:fp::sp::sp::fp::sp:\n:fp::fp::fp::sp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'Э',
    array: [
      ':fp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::fp::sp:',
      ':sp::fp::fp::fp::fp::sp:',
      ':sp::sp::sp::sp::fp::sp:',
      ':fp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::fp::fp::fp::sp:\n:sp::sp::sp::sp::fp:\n:sp::fp::fp::fp::fp:\n:sp::sp::sp::sp::fp:\n:fp::fp::fp::fp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'Ю',
    array: [
      ':fp::sp::sp::fp::fp::fp::sp::sp:',
      ':fp::sp::fp::sp::sp::sp::fp::sp:',
      ':fp::fp::fp::sp::sp::sp::fp::sp:',
      ':fp::sp::fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::sp::sp::fp::fp::fp::sp:\n:fp::sp::fp::sp::sp::sp::fp:\n:fp::fp::fp::sp::sp::sp::fp:\n:fp::sp::fp::sp::sp::sp::fp:\n:fp::sp::sp::fp::fp::fp::sp:\n:sp::sp::sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'Я',
    array: [
      ':sp::fp::fp::fp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::fp::fp::fp::fp::sp:',
      ':sp::fp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':sp::fp::fp::fp::fp:\n:fp::sp::sp::sp::fp:\n:sp::fp::fp::fp::fp:\n:sp::fp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: ' ',
    array: [
      ':sp::sp:',
      ':sp::sp:',
      ':sp::sp:',
      ':sp::sp:',
      ':sp::sp:',
      ':sp::sp:'
    ],
    text: ':sp::sp::sp::sp::sp:\n:sp::sp::sp::sp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: '1',
    array: [
      ':sp::fp::fp::sp::sp:',
      ':sp::sp::fp::sp::sp:',
      ':sp::sp::fp::sp::sp:',
      ':sp::sp::fp::sp::sp:',
      ':sp::fp::fp::fp::sp:',
      ':sp::sp::sp::sp::sp:'
    ],
    text:
      ':sp::fp::fp::sp::sp:\n:sp::sp::fp::sp::sp:\n:sp::sp::fp::sp::sp:\n:sp::sp::fp::sp::sp:\n:sp::fp::fp::fp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: '2',
    array: [
      ':fp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::fp::sp:',
      ':sp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::sp::sp:',
      ':fp::fp::fp::fp::fp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::fp::fp::fp::sp:\n:sp::sp::sp::sp::fp:\n:sp::fp::fp::fp::sp:\n:fp::sp::sp::sp::sp:\n:fp::fp::fp::fp::fp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: '3',
    array: [
      ':fp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::fp::sp:',
      ':fp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::fp::sp:',
      ':fp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::fp::fp::fp::sp:\n:sp::sp::sp::sp::fp:\n:fp::fp::fp::fp::sp:\n:sp::sp::sp::sp::fp:\n:fp::fp::fp::fp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: '4',
    array: [
      ':sp::sp::fp::fp::sp::sp:',
      ':sp::fp::sp::fp::sp::sp:',
      ':fp::sp::sp::fp::sp::sp:',
      ':fp::fp::fp::fp::fp::sp:',
      ':sp::sp::sp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':sp::sp::fp::fp::sp:\n:sp::fp::sp::fp::sp:\n:fp::sp::sp::fp::sp:\n:fp::fp::fp::fp::fp:\n:sp::sp::sp::fp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: '5',
    array: [
      ':fp::fp::fp::fp::fp::sp:',
      ':fp::sp::sp::sp::sp::sp:',
      ':fp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::fp::sp:',
      ':fp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::fp::fp::fp::fp:\n:fp::sp::sp::sp::sp:\n:fp::fp::fp::fp::sp:\n:sp::sp::sp::sp::fp:\n:fp::fp::fp::fp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: '6',
    array: [
      ':sp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::sp::sp:',
      ':fp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':sp::fp::fp::fp::sp:\n:fp::sp::sp::sp::sp:\n:fp::fp::fp::fp::sp:\n:fp::sp::sp::sp::fp:\n:sp::fp::fp::fp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: '7',
    array: [
      ':fp::fp::fp::fp::sp:',
      ':sp::sp::sp::fp::sp:',
      ':sp::sp::fp::sp::sp:',
      ':sp::fp::sp::sp::sp:',
      ':sp::fp::sp::sp::sp:',
      ':sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::fp::fp::fp::sp:\n:sp::sp::sp::fp::sp:\n:sp::sp::fp::fp::sp:\n:sp::fp::sp::sp::sp:\n:sp::fp::sp::sp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: '8',
    array: [
      ':sp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':sp::fp::fp::fp::sp:\n:fp::sp::sp::sp::fp:\n:sp::fp::fp::fp::sp:\n:fp::sp::sp::sp::fp:\n:sp::fp::fp::fp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: '9',
    array: [
      ':sp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::fp::fp::fp::fp::sp:',
      ':sp::sp::sp::sp::fp::sp:',
      ':sp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':sp::fp::fp::fp::sp:\n:fp::sp::sp::sp::fp:\n:sp::fp::fp::fp::fp:\n:sp::sp::sp::sp::fp:\n:sp::fp::fp::fp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: '0',
    array: [
      ':sp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::fp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':sp::fp::fp::fp::sp:\n:fp::sp::sp::sp::fp:\n:fp::sp::fp::sp::fp:\n:fp::sp::sp::sp::fp:\n:sp::fp::fp::fp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: '/',
    array: [
      ':sp::sp::fp::sp:',
      ':sp::sp::fp::sp:',
      ':sp::fp::sp::sp:',
      ':fp::sp::sp::sp:',
      ':fp::sp::sp::sp:',
      ':sp::sp::sp::sp:'
    ],
    text: ''
  },
  {
    letter: '\\',
    array: [
      ':fp::sp::sp::sp:',
      ':fp::sp::sp::sp:',
      ':sp::fp::sp::sp:',
      ':sp::sp::fp::sp:',
      ':sp::sp::fp::sp:',
      ':sp::sp::sp::sp:'
    ],
    text: ''
  },
  {
    letter: '-',
    array: [
      ':sp::sp::sp:',
      ':sp::sp::sp:',
      ':fp::fp::fp:',
      ':sp::sp::sp:',
      ':sp::sp::sp:',
      ':sp::sp::sp:'
    ],
    text: ''
  },
  {
    letter: '.',
    array: [
      ':sp::sp::sp:',
      ':sp::sp::sp:',
      ':sp::sp::sp:',
      ':sp::sp::sp:',
      ':fp::sp::sp:',
      ':sp::sp::sp:'
    ],
    text: ':fp::sp::sp::sp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: '@',
    array: [
      ':sp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::fp::sp::fp::sp:',
      ':fp::sp::fp::sp::fp::sp:',
      ':sp::fp::fp::sp::fp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':sp::fp::fp::fp::sp::sp:\n:fp::sp::sp::sp::fp::sp:\n:fp::sp::fp::sp::fp::sp:\n:fp::sp::fp::sp::fp::sp:\n:sp::fp::fp::sp::fp::sp:\n:sp::sp::sp::sp::sp::sp:\n'
  },
  {
    letter: '#',
    array: [
      ':sp::fp::sp::fp::sp::sp:',
      ':fp::fp::fp::fp::fp::sp:',
      ':sp::fp::sp::fp::sp::sp:',
      ':fp::fp::fp::fp::fp::sp:',
      ':sp::fp::sp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':sp::fp::sp::fp::sp::sp:\n:fp::fp::fp::fp::fp::sp:\n:sp::fp::sp::fp::sp::sp:\n:fp::fp::fp::fp::fp::sp:\n:sp::fp::sp::fp::sp::sp:\n:sp::sp::sp::sp::sp::sp:\n'
  },
  {
    letter: ':',
    array: [
      ':sp::sp::sp:',
      ':sp::fp::sp:',
      ':sp::sp::sp:',
      ':sp::fp::sp:',
      ':sp::sp::sp:',
      ':sp::sp::sp:'
    ],
    text: ''
  },
  {
    letter: '*',
    array: [
      ':sp::sp::fp::sp::sp::sp:',
      ':fp::sp::fp::sp::fp::sp:',
      ':sp::fp::fp::fp::sp::sp:',
      ':fp::sp::fp::sp::fp::sp:',
      ':sp::sp::fp::sp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text: ''
  },
  {
    letter: '!',
    array: [
      ':sp::fp::sp:',
      ':sp::fp::sp:',
      ':sp::fp::sp:',
      ':sp::sp::sp:',
      ':sp::fp::sp:',
      ':sp::sp::sp:'
    ],
    text: ''
  },
  {
    letter: '=',
    array: [
      ':sp::sp::sp::sp::sp:',
      ':fp::fp::fp::fp::sp:',
      ':sp::sp::sp::sp::sp:',
      ':fp::fp::fp::fp::sp:',
      ':sp::sp::sp::sp::sp:',
      ':sp::sp::sp::sp::sp:'
    ],
    text: ''
  },
  {
    letter: '"',
    array: [
      ':sp::fp::sp::fp::sp:',
      ':sp::fp::sp::fp::sp:',
      ':sp::fp::sp::fp::sp:',
      ':sp::sp::sp::sp::sp:',
      ':sp::sp::sp::sp::sp:',
      ':sp::sp::sp::sp::sp:'
    ],
    text: ''
  },
  {
    letter: '"',
    array: [
      ':sp::fp::sp::fp::sp:',
      ':sp::fp::sp::fp::sp:',
      ':sp::fp::sp::fp::sp:',
      ':sp::sp::sp::sp::sp:',
      ':sp::sp::sp::sp::sp:',
      ':sp::sp::sp::sp::sp:'
    ],
    text: ''
  },
  {
    letter: '№',
    array: [
      ':sp::fp::sp::fp::sp::sp:',
      ':fp::fp::fp::fp::fp::sp:',
      ':sp::fp::sp::fp::sp::sp:',
      ':fp::fp::fp::fp::fp::sp:',
      ':sp::fp::sp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text: ''
  },
  {
    letter: ',',
    array: [
      ':sp::sp::sp:',
      ':sp::sp::sp:',
      ':sp::sp::sp:',
      ':sp::sp::sp:',
      ':sp::fp::sp:',
      ':fp::sp::sp:'
    ],
    text: ':sp::fp::sp::sp::sp:\n:fp::sp::sp::sp::sp:\n'
  },
  {
    letter: '?',
    array: [
      ':fp::fp::fp::sp::sp:',
      ':sp::sp::sp::fp::sp:',
      ':sp::fp::fp::sp::sp:',
      ':sp::fp::sp::sp::sp:',
      ':sp::sp::sp::sp::sp:',
      ':sp::fp::sp::sp::sp:',
      ':sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::fp::fp::sp:\n:sp::sp::sp::fp:\n:sp::fp::fp::sp:\n:sp::fp::sp::sp:\n:sp::sp::sp::sp:\n:sp::fp::sp::sp:\n:sp::sp::sp::sp:\n'
  },
  {
    letter: 'A',
    array: [
      ':sp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::fp::fp::fp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':sp::fp::fp::fp::sp:\n:fp::sp::sp::sp::fp:\n:fp::fp::fp::fp::fp:\n:fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'B',
    array: [
      ':fp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::fp::fp::fp::sp:\n:fp::sp::sp::sp::fp:\n:fp::fp::fp::fp::sp:\n:fp::sp::sp::sp::fp:\n:fp::fp::fp::fp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'C',
    array: [
      ':sp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':sp::fp::fp::fp::sp:\n:fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::sp:\n:fp::sp::sp::sp::fp:\n:sp::fp::fp::fp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'D',
    array: [
      ':fp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::fp::fp::fp::sp:\n:fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:fp::fp::fp::fp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'E',
    array: [
      ':fp::fp::fp::fp::sp:',
      ':fp::sp::sp::sp::sp:',
      ':fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::sp:',
      ':fp::fp::fp::fp::sp:',
      ':sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::fp::fp::fp:\n:fp::sp::sp::sp:\n:fp::fp::fp::sp:\n:fp::sp::sp::sp:\n:fp::fp::fp::fp:\n:sp::sp::sp::sp:\n'
  },
  {
    letter: 'F',
    array: [
      ':fp::fp::fp::fp::sp:',
      ':fp::sp::sp::sp::sp:',
      ':fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::sp:',
      ':fp::sp::sp::sp::sp:',
      ':sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::fp::fp::fp:\n:fp::sp::sp::sp:\n:fp::fp::fp::sp:\n:fp::sp::sp::sp:\n:fp::sp::sp::sp:\n:sp::sp::sp::sp:\n'
  },
  {
    letter: 'G',
    array: [
      ':sp::fp::fp::fp::fp::sp:',
      ':fp::sp::sp::sp::sp::sp:',
      ':fp::sp::sp::fp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':sp::fp::fp::fp::fp:\n:fp::sp::sp::sp::sp:\n:fp::sp::sp::fp::fp:\n:fp::sp::sp::sp::fp:\n:sp::fp::fp::fp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'H',
    array: [
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::fp::fp::fp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:fp::fp::fp::fp::fp:\n:fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'I',
    array: [
      ':sp::fp::fp::fp::sp::sp:',
      ':sp::sp::fp::sp::sp::sp:',
      ':sp::sp::fp::sp::sp::sp:',
      ':sp::sp::fp::sp::sp::sp:',
      ':sp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':sp::fp::fp::fp::sp:\n:sp::sp::fp::sp::sp:\n:sp::sp::fp::sp::sp:\n:sp::sp::fp::sp::sp:\n:sp::fp::fp::fp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'J',
    array: [
      ':sp::sp::sp::sp::fp::sp:',
      ':sp::sp::sp::sp::fp::sp:',
      ':sp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':sp::sp::sp::sp::fp:\n:sp::sp::sp::sp::fp:\n:sp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:sp::fp::fp::fp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'K',
    array: [
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::fp::sp::sp:',
      ':fp::fp::fp::sp::sp::sp:',
      ':fp::sp::sp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::sp::sp::sp::fp:\n:fp::sp::sp::fp::sp:\n:fp::fp::fp::sp::sp:\n:fp::sp::sp::fp::sp:\n:fp::sp::sp::sp::fp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'L',
    array: [
      ':fp::sp::sp::sp::sp:',
      ':fp::sp::sp::sp::sp:',
      ':fp::sp::sp::sp::sp:',
      ':fp::sp::sp::sp::sp:',
      ':fp::fp::fp::fp::sp:',
      ':sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::sp::sp::sp::sp:\n:fp::sp::sp::sp::sp:\n:fp::sp::sp::sp::sp:\n:fp::sp::sp::sp::sp:\n:fp::fp::fp::fp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'M',
    array: [
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::fp::sp::fp::fp::sp:',
      ':fp::sp::fp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::sp::sp::sp::fp:\n:fp::fp::sp::fp::fp:\n:fp::sp::fp::sp::fp:\n:fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'N',
    array: [
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::fp::sp::sp::fp::sp:',
      ':fp::sp::fp::sp::fp::sp:',
      ':fp::sp::sp::fp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::sp::sp::sp::fp:\n:fp::fp::sp::sp::fp:\n:fp::sp::fp::sp::fp:\n:fp::sp::sp::fp::fp:\n:fp::sp::sp::sp::fp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'O',
    array: [
      ':sp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':sp::fp::fp::fp::sp:\n:fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:sp::fp::fp::fp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'P',
    array: [
      ':fp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::sp::sp:',
      ':fp::sp::sp::sp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::fp::fp::fp::sp:\n:fp::sp::sp::sp::fp:\n:fp::fp::fp::fp::sp:\n:fp::sp::sp::sp::sp:\n:fp::sp::sp::sp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'Q',
    array: [
      ':sp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::fp::sp::fp::sp:',
      ':sp::fp::fp::fp::sp::sp:',
      ':sp::sp::fp::sp::sp::sp:',
      ':sp::sp::sp::fp::sp::sp:'
    ],
    text:
      ':sp::fp::fp::fp::sp:\n:fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:fp::sp::fp::sp::fp:\n:sp::fp::fp::fp::sp:\n:sp::sp::fp::sp::sp:\n:sp::sp::sp::fp::sp:\n'
  },
  {
    letter: 'R',
    array: [
      ':fp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::fp::fp::fp::sp::sp:',
      ':fp::sp::sp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::fp::fp::fp::sp:\n:fp::sp::sp::sp::fp:\n:fp::fp::fp::fp::sp:\n:fp::sp::sp::fp::sp:\n:fp::sp::sp::sp::fp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'S',
    array: [
      ':sp::fp::fp::fp::fp::sp:',
      ':fp::sp::sp::sp::sp::sp:',
      ':sp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::fp::sp:',
      ':fp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':sp::fp::fp::fp::fp:\n:fp::sp::sp::sp::sp:\n:sp::fp::fp::fp::sp:\n:sp::sp::sp::sp::fp:\n:fp::fp::fp::fp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'T',
    array: [
      ':fp::fp::fp::fp::fp::sp:',
      ':sp::sp::fp::sp::sp::sp:',
      ':sp::sp::fp::sp::sp::sp:',
      ':sp::sp::fp::sp::sp::sp:',
      ':sp::sp::fp::sp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::fp::fp::fp::fp:\n:sp::sp::fp::sp::sp:\n:sp::sp::fp::sp::sp:\n:sp::sp::fp::sp::sp:\n:sp::sp::fp::sp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'U',
    array: [
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::fp::fp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:sp::fp::fp::fp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'V',
    array: [
      ':fp::sp::sp::sp::fp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::fp::sp::fp::sp::sp:',
      ':sp::fp::sp::fp::sp::sp:',
      ':sp::sp::fp::sp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::sp::sp::sp::fp:\n:fp::sp::sp::sp::fp:\n:sp::fp::sp::fp::sp:\n:sp::fp::sp::fp::sp:\n:sp::sp::fp::sp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'W',
    array: [
      ':fp::sp::sp::fp::sp::sp::fp::sp:',
      ':fp::sp::sp::fp::sp::sp::fp::sp:',
      ':fp::sp::sp::fp::sp::sp::fp::sp:',
      ':fp::sp::fp::sp::fp::sp::fp::sp:',
      ':sp::fp::sp::sp::sp::fp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::sp::sp::fp::sp::sp::fp:\n:fp::sp::sp::fp::sp::sp::fp:\n:fp::sp::sp::fp::sp::sp::fp:\n:fp::sp::fp::sp::fp::sp::fp:\n:sp::fp::sp::sp::sp::fp::sp:\n:sp::sp::sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'X',
    array: [
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::fp::sp::fp::sp::sp:',
      ':sp::sp::fp::sp::sp::sp:',
      ':sp::fp::sp::fp::sp::sp:',
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::sp::sp::sp::fp:\n:sp::fp::sp::fp::sp:\n:sp::sp::fp::sp::sp:\n:sp::fp::sp::fp::sp:\n:fp::sp::sp::sp::fp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'Y',
    array: [
      ':fp::sp::sp::sp::fp::sp:',
      ':sp::fp::sp::fp::sp::sp:',
      ':sp::sp::fp::sp::sp::sp:',
      ':sp::sp::fp::sp::sp::sp:',
      ':sp::sp::fp::sp::sp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::sp::sp::sp::fp:\n:sp::fp::sp::fp::sp:\n:sp::sp::fp::sp::sp:\n:sp::sp::fp::sp::sp:\n:sp::sp::fp::sp::sp:\n:sp::sp::sp::sp::sp:\n'
  },
  {
    letter: 'Z',
    array: [
      ':fp::fp::fp::fp::fp::sp:',
      ':sp::sp::sp::fp::sp::sp:',
      ':sp::sp::fp::sp::sp::sp:',
      ':sp::fp::sp::sp::sp::sp:',
      ':fp::fp::fp::fp::fp::sp:',
      ':sp::sp::sp::sp::sp::sp:'
    ],
    text:
      ':fp::fp::fp::fp::fp:\n:sp::sp::sp::fp::sp:\n:sp::sp::fp::sp::sp:\n:sp::fp::sp::sp::sp:\n:fp::fp::fp::fp::fp:\n:sp::sp::sp::sp::sp:\n'
  }
];

module.exports = letters;
