const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3001,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/aucon',
  stripe_connect_test_client_id: 'ca_GOCwmGzXnJuXSC2o3XjRPs8hxaJEm6dA',
  stripe_test_secret_key: 'pk_test_trtKTfzHcBU3Wwh3HmWSYcol003V3nb4wF',
  stripe_test_api_key: 'sk_test_nvFyasCVrO6uUNIOtyCZyM0L00eqn9vlgM' 
}
export default config
