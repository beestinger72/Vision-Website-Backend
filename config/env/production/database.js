module.exports = ({ env }) => ({
client: 'postgres',
  connection: {

        client: 'postgres',
        host: env('DATABASE_HOST', 'app-42c4a654-cde9-4905-8787-77b8c7f0b9eb-do-user-13845580-0.b.db.ondigitalocean.com'),
        port: env.int('DATABASE_PORT', 25060),
        database: env('DATABASE_NAME', 'db'),
        username: env('DATABASE_USERNAME', 'db'),
        password: env('DATABASE_PASSWORD', 'AVNS_VJIdCceS_hybYdsvRN3'),
        schema: env('DATABASE_SCHEMA', 'public'),
        ssl: env.bool('DATABASE_SSL', false),

},
acquireConnectionTimeout: 1000000,
pool: {
min: 0,
max: 5,
acquireTimeoutMillis: 300000,
createTimeoutMillis: 300000,
destroyTimeoutMillis: 300000,
idleTimeoutMillis: 30000,
reapIntervalMillis:1000,
createRetryIntervalMillis: 2000
},
debug: false,
});

