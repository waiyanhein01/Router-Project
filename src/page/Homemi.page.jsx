import React from 'react'
import useFetch from '../hook/useFetch'
import { GetBookData } from '../service/book.service'
import { BookListsComponent } from '../components'
const HomePage = () => {
    const {loading,data,error} = useFetch(GetBookData,"book")
  return (
    <div className=' flex flex-wrap gap-6 items-center'>
      {loading ? <h1>Loading</h1>: <>
        <>{data.map((d) => <BookListsComponent key={d.id} data={d}/> )}</> <h1>{error}</h1>
      </>}
    </div>
  )
}

export default HomePage

