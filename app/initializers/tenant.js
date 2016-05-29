import ENV from 'front/config/environment';

export function initialize() {

  switch (window.location.hostname) {

    case 'www.babysittingbordeaux.dev':
      var tenantName = 'bordeaux';
      break;

    case 'babysittingbordeaux.dev':
      var tenantName = 'bordeaux';
      break;

    case 'www.babysittingparis.dev':
      var tenantName = 'paris';
      break;

    case 'babysittingparis.dev':
      var tenantName = 'paris';
      break;

    case 'babysittinglondon.co.uk.dev':
      var tenantName = 'london'
      break;

    case 'www.babysittinglondon.co.uk.dev':
      var tenantName = 'london';
      break;

    default:
      var tenantName = false;
      break;

  }

  ENV.APP.tenantName = tenantName;
}

export default {
  name: 'tenant',
  initialize: initialize
};
