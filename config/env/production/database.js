module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'strapi'),
    ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST'),
          port: env.int('DATABASE_PORT'),
          database: env('DATABASE_NAME'),
          user: env('DATABASE_USERNAME'),
          password: env('DATABASE_PASSWORD'),
          ssl: {
             ca: env('DATABASE_CA')
          },
        },
        debug: false,
      },
    },
    debug: false,
  }
},});
    

