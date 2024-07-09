module.exports = ({ env }) => ({
  url: env('STRAPI_URL', '/'),
  serveAdminPanel: env.bool('SERVE_ADMIN', true),
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    }
  }
});
