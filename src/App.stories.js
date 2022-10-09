import React from "react";
import {
  GetOrgIdAndNameDocument,
  GetOrgIdSuborgDocument,
} from "../graphql/_generated";
import { App } from "./App";
export default {
  title: "App",
  component: App,
};

export const app = {
  parameters: {
    apolloClient: {
      mocks: [
        {
          request: {
            query: GetOrgIdAndNameDocument,
            operationName: "GetOrgIdAndName",
          },
          result: {
            data: {
              orgs: [
                {
                  id: 123,
                  name: "test 1",
                },
                {
                  id: 1234,
                  name: "test 2",
                },
              ],
            },
          },
        },
        {
          request: {
            query: GetOrgIdSuborgDocument,
            operationName: "GetOrgIdSuborg",
          },
          result: {
            data: {
              orgs: [
                {
                  id: 123,
                  subOrg: {
                    id: 1234,
                    name: "test 2",
                  },
                },
                {
                  id: 1234,
                  subOrg: {
                    id: 123,
                    name: "test 1",
                  },
                },
              ],
            },
          },
        },
      ],
    },
  },
};
