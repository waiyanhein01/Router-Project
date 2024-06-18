import React, { useEffect, useState } from "react";
import { GetBookData } from "./service/book.service";
import useFetch from "./hook/useFetch";
import { GetAuthorData } from "./service/author.service";

const App = () => {
  const { loading, data, error } = useFetch(GetAuthorData, "author");
  return (
    <div>
      {loading ? (
        <>Loading...</>
      ) : (
        <div>
          <>{JSON.stringify(data)}</> : <h1>{error}</h1>
        </div>
      )}
    </div>
  );
};
export default App;
