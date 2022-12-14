import { MockedProvider } from '@apollo/client/testing'; 
import { InMemoryCache } from '@apollo/client';

export const parameters = {
   apolloClient: {
    MockedProvider,
    cache: new InMemoryCache({
      typePolicies: {
        Organisation: {
            keyFields: ["id"]
        },
    }
    })
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}