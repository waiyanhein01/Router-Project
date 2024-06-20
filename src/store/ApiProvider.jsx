import React, { createContext } from "react";
import useFetch from "../hook/useFetch";
import { GetBookData } from "../service/book.service";

export const ApiContext = createContext({
  loading: false,
  data: null,
  error: null,
});

const ApiProvider = ({ children }) => {
  const { loading, data, error } = useFetch(GetBookData, 'book');
    
  return <ApiContext.Provider value={{loading,data,error}}>{children}</ApiContext.Provider>;
};

export default ApiProvider;
