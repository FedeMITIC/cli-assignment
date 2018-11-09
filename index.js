// eslint-disable-next-line
'use strict'

/* Commander is for advanced users only */
const programArgs = require('./src/commands');
/* Import colors to pretty print stuff */
const colors = require('colors');

process.stdout.write('\x1Bc');
/* Initializes the available commands */
programArgs.initializeCommands();

