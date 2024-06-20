import React from 'react'

const BookListsComponent = ({data:{id,title,author,description,img}}) => {
  return (
    <div className=' w-auto h-auto overflow-hidden border group rounded-lg my-5'>
      <div className="">
        <img src={img} className=' group-hover:scale-105 bg-cover duration-300 h-[350px]' alt="" />
         {/* <div className="">
        <h1 className=" text-xl font-bold">{title}</h1>
        <h2 className=" text-neutral-500">{author}</h2>
        </div>
        <p className=" line-clamp-2">{description}</p> */}
      </div>
    </div>
  )
}

export default BookListsComponent
