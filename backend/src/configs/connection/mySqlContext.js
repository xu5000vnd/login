import knex from 'knex';
import mysqlConnection from "./database";
import { NODE_ENV } from '../../configs/constant'

const env = NODE_ENV || 'development';
const connect = mysqlConnection[env];
const mySqlContext = knex(connect);

export default mySqlContext;
