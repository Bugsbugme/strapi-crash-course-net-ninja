module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a8cc980069fd89c9f56733ebe37cd5ea'),
  },
});
