import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://d49syb96q8.execute-api.eu-central-1.amazonaws.com/dev',
    order: 'https://d49syb96q8.execute-api.eu-central-1.amazonaws.com/dev',
    import: 'https://d49syb96q8.execute-api.eu-central-1.amazonaws.com/dev',
    bff: 'https://d49syb96q8.execute-api.eu-central-1.amazonaws.com/dev',
    cart: 'https://d49syb96q8.execute-api.eu-central-1.amazonaws.com/dev',
  },
  apiEndpointsEnabled: {
    product: true,
    order: true,
    import: true,
    bff: true,
    cart: true,
  },
};
