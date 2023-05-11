    // strapi-api/config/database.js
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', 'app-42c4a654-cde9-4905-8787-77b8c7f0b9eb-do-user-13845580-0.b.db.ondigitalocean.com'),
          port: env.int('DATABASE_PORT', 25060),
          database: env('DATABASE_NAME', 'db'),
          user: env('DATABASE_USERNAME', 'db'),
          password: env('DATABASE_PASSWORD', 'AVNS_VJIdCceS_hybYdsvRN3'),
          schema: env('DATABASE_SCHEMA', 'public'), // Not required
          ssl: {
            rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
          },
        },
        debug: false,
      },
    });