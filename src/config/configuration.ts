// src/config/configuration.ts

export default () => ({
  port: parseInt(process.env.PORT || '3000', 10),
  database: {
    host: process.env.DB_HOST || 'localhost',
    // port: parseInt(process.env.DB_PORT || '5432', 10),
    port: 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'admin123',
    name: process.env.DB_NAME || 'tasksdb',
  },
});
