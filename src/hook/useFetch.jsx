import React, { useEffect, useState } from 'react'
import { GetBookData } from '../service/book.service';

const useFetch = (fetchFun, arg) => {
    const [fetch, setFetch] = useState({
        loading: true,
        data: null,
        error: null,
      });
      useEffect(() => {
        (async () => {
          try {
            const data = await fetchFun(arg);
          setFetch(
             (pre) => {
              return {
                loading:false,
                data: data,
                error: null,
              }
            }
          );
          } catch (error) {
            setFetch(
              (pre) => {
               return {
                 loading:false,
                 data: null,
                 error: error.message,
               }
             }
           );
          }
        })();
      }, []);
  return fetch;
}

export default useFetch
