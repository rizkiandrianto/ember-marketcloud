/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-marketcloud',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    site: {
      title: 'Lii Shop',
      api: 'http://api.marketcloud.it/',
      endpoint: 'v0/',
      currency: 'Rp. ',
      headers: {
        "Authorization": "1a6bd3f4-810e-4b32-84d6-c2b200e34b4a",
        'Content-Type': 'application/json',
      },
      rajaongkir_url: 'http://api.rajaongkir.com/',
      rajaongkir_endpoint: 'starter/',
      rajaongkir_api: '58d265972e930c7ab7e016d82d0a0741',
      rajaongkir_headers: {
        'key': '58d265972e930c7ab7e016d82d0a0741',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
