import log, { Logger } from 'loglevel';

const logging: Logger = log.noConflict();

logging.enableAll();

export default logging;
