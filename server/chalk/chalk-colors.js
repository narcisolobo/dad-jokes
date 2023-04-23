import chalk from 'chalk';

function printCyan(message) {
  console.log(chalk.cyanBright(message));
}

function printYellow(message) {
  console.log(chalk.yellowBright(message));
}

function printMagenta(message) {
  console.log(chalk.magentaBright(message));
}

export { printCyan, printYellow, printMagenta };
