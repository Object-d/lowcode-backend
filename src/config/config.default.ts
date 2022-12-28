import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1671438193181_8929',
  koa: {
    port: 7001,
    globalPrefix: '/api',
  },
  orm: {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'password', // 数据库密码
    database: 'lowcode', // 数据表
    synchronize: true,
    logging: false,
  },
  passport: {
    session: false,
  },
  jwt: {
    secret: '123456XXXM',
    expiresIn: 11111, //60 * 60 * 24 * 1,
  },
  redis: {
    client: {
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      //password: 'auth',
      db: 0,
    },
  },
  swagger: {
    auth: {
      authType: 'bearer',
    },
  },
} as MidwayConfig;
