
const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);


module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'app-42c4a654-cde9-4905-8787-77b8c7f0b9eb-do-user-13845580-0.b.db.ondigitalocean.com'),
        port: env.int('DATABASE_PORT', 25060),
        database: env('DATABASE_NAME', 'db'),
        username: env('DATABASE_USERNAME', 'db'),
        password: env('DATABASE_PASSWORD', 'AVNS_VJIdCceS_hybYdsvRN3'),
        ssl: env.bool('DATABASE_SSL', true),
      },
      options: {}
    },
  }, debug: false,
        acquireConnectionTimeout: 600000,
    pool: {
      min: 0,
      max: 100,
      acquireTimeoutMillis: 300000,
      createTimeoutMillis: 300000,
      destroyTimeoutMillis: 50000,
      idleTimeoutMillis: 300000,
      reapIntervalMillis: 10000,
      createRetryIntervalMillis: 2000,
      propagateCreateError: false,
    },
});




    