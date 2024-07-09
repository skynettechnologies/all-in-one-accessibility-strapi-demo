module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN
    },
  },
});
