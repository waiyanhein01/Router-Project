import React, { useContext, useEffect, useState } from "react";
import useFetch from "../../hook/useFetch";
import { GetBookData } from "../../service/book.service";
import { useNavigate, useParams } from "react-router-dom";
import ProviderStore from "../../store/Provider.store";
import { ApiContext } from "../../store/ApiProvider";

const DetailBookPage = () => {
  const nav = useNavigate();
  const { slug } = useParams();
  const {loading,data,error} = useContext(ApiContext)
  const [item,setItem] = useState(null)
  // const { loading, data, error } = useFetch(GetBookData, `book/${id}`);

  useEffect(() => {
    const slugItem = data?.find((d) => d.slug === slug )
    setItem(slugItem)
  },[data])

  const handleBackBtn = () => {
    nav(-1);
  };
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <>
            {error ? (
              <h1>Error...</h1>
            ) : (
              <>
                <div className=" lg:flex flex-row text-center lg:text-left lg:justify-center lg:gap-5 lg:items-center w-auto lg:h-[500px] ">
                  <div className="flex items-center justify-center w-auto">
                    <img src={item?.img} className=" " alt="" />
                  </div>
                  <div className=" pt-5 lg:pt-0">
                    <h1 className=" text-xl font-bold font-serif">
                      {item?.title}
                    </h1>
                    <h2 className=" text-neutral-500 pb-3 font-serif">
                      {item?.author}
                    </h2>
                    <p className=" lg:w-[400px] font-mono">
                      {item?.description}
                    </p>
                    <button
                      onClick={handleBackBtn}
                      className=" bg-neutral-900 rounded-lg text-neutral-50 px-2 py-1 mt-2 lg:mb-0 mb-5"
                    >
                      Back
                    </button>
                  </div>
                </div>
              </>
            )}
          </>
        </>
      )}
    </div>
  );
};

export default DetailBookPage;
