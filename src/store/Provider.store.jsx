import React from "react";
import ApiProvider from "./ApiProvider";

const ProviderStore = ({ children }) => {
  return <ApiProvider>{children}</ApiProvider>;
};

export default ProviderStore;
