// module.exports = ({ env }) => ({
//   connection: {
//     client: 'mysql',
//     connection: {
//       host: env('DATABASE_HOST','139.59.102.235'),
//       port: env.int('DATABASE_PORT',3306),
//       database: env('DATABASE_NAME','strapi'),
//       user: env('DATABASE_USERNAME','myadmin2'),
//       password: env('DATABASE_PASSWORD','MySQL@dmin!12345'),
//       ssl: {
//         rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
//       },
//     },
//     debug: false,
//   },
// });

odule.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: env('DATABASE_FILENAME', '.tmp/data.db'),
    },
    useNullAsDefault: true,
    debug: false,
  },
});