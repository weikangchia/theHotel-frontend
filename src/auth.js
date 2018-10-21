import auth0 from 'auth0-js';
import Vue from 'vue';

const webAuth = new auth0.WebAuth({
  domain: process.env.VUE_APP_AUTH0_DOMAIN,
  clientID: process.env.VUE_APP_AUTH0_CLIENT_ID,
  redirectUri: `${process.env.VUE_APP_ROOT_API}callback`,
  audience: `https://${process.env.VUE_APP_AUTH0_DOMAIN}/userinfo`,
  responseType: 'token id_token',
  scope: 'openid email profile',
});

const auth = new Vue({
  computed: {
    token: {
      get: () => localStorage.getItem('id_token'),
      set: (idToken) => {
        localStorage.setItem('id_token', idToken);
      },
    },
    accessToken: {
      get: () => localStorage.getItem('access_token'),
      set: (accessToken) => {
        localStorage.setItem('access_token', accessToken);
      },
    },
    expiresAt: {
      get: () => localStorage.getItem('expires_at'),
      set: (expiresIn) => {
        const expiresAt = JSON.stringify((expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('expires_at', expiresAt);
      },
    },
    user: {
      get: () => JSON.parse(localStorage.getItem('user')),
      set: (user) => {
        localStorage.setItem('user', JSON.stringify(user));
      },
    },
  },
  methods: {
    login() {
      webAuth.authorize();
    },
    logout() {
      return new Promise((resolve, reject) => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('user');
        webAuth.logout({
          returnTo: `${process.env.VUE_APP_ROOT_API}login`,
          clientID: process.env.VUE_APP_AUTH0_CLIENT_ID,
        });
      });
    },
    isAuthenticated() {
      return new Date().getTime() < this.expiresAt;
    },
    handleAuthentication() {
      return new Promise((resolve, reject) => {
        webAuth.parseHash((err, authResult) => {
          if (authResult && authResult.accessToken && authResult.idToken) {
            this.expiresAt = authResult.expiresIn;
            this.accessToken = authResult.accessToken;
            this.token = authResult.idToken;
            this.user = authResult.idTokenPayload;
            resolve();
          } else if (err) {
            this.logout();
            reject(err);
          }
        });
      });
    },
  },
});

export default {
  install: (Vue) => {
    Vue.prototype.$auth = auth;
  },
};
