import React from 'react';
import { GetOrgIdAndNameDocument, GetOrgIdSuborgDocument } from '../graphql/_generated';
import { App } from './App';
export default {
    title: 'App',
};

export const app = () => <App />;

app.parameters = {
  apolloClient: {
      mocks: [
          {
              request: {
                  query: GetOrgIdAndNameDocument,
              },
              result: {
                  data: {
                    orgs: [{
                      id: 123,
                      name: 'test 1',
                    },
                    {
                      id: 1234,
                      name: 'test 2',
                    }]
                  },
              },
          },
          {
            request: {
                query: GetOrgIdSuborgDocument,
            },
            result: {
                data: {
                  orgs: [{
                        id: 123,
                        subOrg: {
                          id: 1234,
                          name: 'test 2'
                        }
                    },{
                      id: 1234,
                      subOrg: {
                        id: 123,
                        name: 'test 1'
                      }
                  }]
                },
            },
        },
      ],
  },
};
