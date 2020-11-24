import {app} from './app'
import {AddressInfo} from 'net'
import chalk from 'chalk';
import logger from './utils/logger';
import moment from 'moment-timezone';

const PORT = 5000;
const HOST = "127.0.0.1";

process.on('unhandledRejection', (reason, promise) => {
  const msg = `
--------------------------------------------
UNHANDLED REJECTION AT: ${chalk.yellow(JSON.stringify(promise))}
REASON OBJECT: ${chalk.red(JSON.stringify(reason))}
REASON STRING: ${chalk.red(String(reason))}
--------------------------------------------\n`;

  logger.error(msg);
});


const server = app.listen(PORT, HOST, () => {
const now = moment().tz('America/Asuncion');

  const startedMsg = `${now.format('MMM D, YYYY')} at ${now.format('hh:mm:ss a')}`.toUpperCase();
  const routeMsg = `http://${HOST}:${PORT}`;
  const envMsg = app.get('env').toUpperCase();
  const msg = `
--------------------------------------------
STARTED: ${chalk.yellow(startedMsg)}
ENVIRONMENT: ${chalk.green(envMsg)}
--------------------------------------------
APPLICATION STARTED ON ${chalk.yellow(routeMsg)}
--------------------------------------------\n`;
  logger.info(msg);
});