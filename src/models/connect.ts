import { Sequelize } from 'sequelize-typescript';
import config from '../../config/index';

const connect = async () => {
    const sequelize = await new Sequelize({
        dialect: 'mysql',
        operatorsAliases: Sequelize.Op as any,
        host: config.db.host,
        port: config.db.port,
        database: config.db.database,
        username: config.db.username,
        password: config.db.password,
        modelPaths: [__dirname + '/table']
    });

    sequelize
        .authenticate()
        .then((/* err */) => {
            console.log('----------------------------------------');
            console.log('DATABASE √');
            console.log('    HOST     %s', config.db.host);
            console.log('    PORT     %s', config.db.port);
            console.log('    DATABASE %s', config.db.database);
            console.log('----------------------------------------');
        })
        .catch(err => {
            console.log('Unable to connect to the database:', err);
        });
};


export default connect;
