module.exports = ({ env }) => [
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            `${env("DO_SPACE_BUCKET")}`,
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            `${env("DO_SPACE_BUCKET")}`,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];