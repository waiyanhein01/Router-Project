import React from 'react'

const BookListsComponent = ({data:{id,title,author,description,img}}) => {
  return (
    <div className=''>
      <div className=" w-auto h-auto overflow-x-hidden group border border-neutral-400 rounded-lg my-5">
        <img src={img} className=' group-hover:scale-105 duration-300 h-[350px]' alt="" />
        {/* <div className="">
        <h1 className=" text-xl font-bold">{title}</h1>
        <h2 className=" text-neutral-500">{author}</h2>
        </div>
        <p className=" line-clamp-2">{description}</p>
        <button className=' bg-neutral-900 rounded-lg text-neutral-50 px-2 py-1 mt-2'>See More</button> */}
      </div>
    </div>
  )
}

export default BookListsComponent
