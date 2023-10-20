import { ConfigProps } from './config.interface';

export default (): ConfigProps => ({
  database: {
    type: process.env.MAIN_TYPE_DATABASE || '',
    host: process.env.MYSQL_HOST || '',
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    username: process.env.MYSQL_USERNAME || '',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || '',
  },
});
