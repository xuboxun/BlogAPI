import { Sequelize } from 'sequelize-typescript';
import * as CONFIG from '../config.json';

export const sequelize = new Sequelize({
    dialect: 'mysql',
    operatorsAliases: Sequelize.Op as any,
    database: CONFIG.database.name,
    username: CONFIG.database.user,
    password: CONFIG.database.password,
    modelPaths: [__dirname + '/models']
});
