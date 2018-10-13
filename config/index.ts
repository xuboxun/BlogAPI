import * as DEFAULT_CONFIG from './config.default.json';
import * as USER_CONFIG from './config.user.json';

const config = Object.assign(DEFAULT_CONFIG, USER_CONFIG);

export default config;
