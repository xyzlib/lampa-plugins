const config = {
  quoteProps: 'consistent', // "preserve", "consistent", "as-needed"
  // Использовать точку с запятой в конце выражений
  semi: true,

  // Использовать одинарные кавычки вместо двойных
  singleQuote: true,

  // Добавлять запятые везде, где это возможно (включая функции)
  trailingComma: 'all',

  // Ширина строки (80-100 — золотой стандарт)
  printWidth: 100,

  // Количество пробелов для табуляции
  tabWidth: 2,

  // Использовать пробелы вместо табуляции
  useTabs: false,

  // Пробелы внутри фигурных скобок { object }
  bracketSpacing: true,

  // Перенос закрывающей скобки HTML/JSX на новую строку
  bracketSameLine: false,

  // Всегда использовать скобки вокруг параметров стрелочных функций
  arrowParens: 'always',

  // Конец строки (lf для Linux/macOS, подходит для Git)
  endOfLine: 'lf',

  // overrides: [
  //   {
  //     files: ['tsconfig1.json', 'jsconfig.json'],
  //     options: {
  //       parser: 'jsonc',
  //     },
  //   },
  // ],
};

export default config;
