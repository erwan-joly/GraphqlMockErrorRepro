import React from "react";
import { useGetOrgIdAndNameQuery, useGetOrgIdSuborgQuery } from "../graphql/_generated";

export function App() {
  const {data, loading, error} = useGetOrgIdAndNameQuery();
  const {data:suborgData, loading:subOrgLoading, error:subOrgError} = useGetOrgIdSuborgQuery();
  if(loading || subOrgLoading) {
    return "loading";
  }
  if(error) {
    return error.toString();
  }
  if(subOrgError) {
    return subOrgError.toString();
  }
  
  return (
      <div className="App">
          {data.orgs.map((o,i)=><div key={i}>orgid: {o.id}</div>)}
          {suborgData.orgs.map((o,i) => <div key={i}>orgid: {o.id} sublevel: {data.orgs.map(o=>o.subOrg?.name)}</div>)}
      </div>
  );
}