import React from 'react'
import useFetch from '../hook/useFetch'
import { GetBookData } from '../service/book.service'
import { BookListsComponent } from '../components'
import { Link } from 'react-router-dom'
const HomePage = () => {
    const {loading,data,error} = useFetch(GetBookData,"book")
  return (
    <div className=' flex flex-wrap justify-center gap-6 items-center'>
      {loading ? <h1>Loading</h1>: <>
        <>{data.map((d) => 
        <Link key={d.id} to={`/detail/${d.id}`}>
        <BookListsComponent data={d}/>
        </Link>
        )}</> <h1>{error}</h1>
      </>}
    </div>
  )
}

export default HomePage

