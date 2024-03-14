export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  skipSSLCert: process.env.SKIP_SSL_CERT || true,
});
