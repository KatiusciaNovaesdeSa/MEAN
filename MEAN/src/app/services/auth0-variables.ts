interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '1cxB1mQh0uk6ced03jMcxec5p9xLiiQO',
  domain: 'dev-1j014x2o.auth0.com',
  callbackURL: 'http://localhost:3000/callback'

};
