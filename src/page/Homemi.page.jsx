import React, { useContext } from 'react'
import useFetch from '../hook/useFetch'
import { GetBookData } from '../service/book.service'
import { BookListsComponent } from '../components'
import { Link } from 'react-router-dom'
import { ApiContext } from '../store/ApiProvider'
const HomePage = () => {
  const {loading,error,data} = useContext(ApiContext)
  return (
    <div className=' flex flex-wrap justify-center gap-6 items-center'>
      {loading ? <h1>Loading</h1>: <>
        <>{data.map((d) => 
        <Link key={d.id} to={`/detail/${d.slug}`}>
        <BookListsComponent data={d}/>
        </Link>
        )}</> <h1>{error}</h1>
      </>}
    </div>
  )
}

export default HomePage

