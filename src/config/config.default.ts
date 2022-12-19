import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1671438193181_8929',
  koa: {
    port: 7001,
    globalPrefix: '/api/v1',
  },
  orm: {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '', // 数据库密码
    database: 'midway', // 数据表
    synchronize: true,
    logging: false,
  },
} as MidwayConfig;
