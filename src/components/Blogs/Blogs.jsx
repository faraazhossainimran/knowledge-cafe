import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog';

const Blogs = ({countReadingTime, blogs, handleAddToBookMark}) => {

    return (
        <div className='md:w-2/3 m-4 md:m-0'>
            <div>
               {blogs.map((blog)=> (
                <Blog countReadingTime={countReadingTime} key={blog.id} blog={blog} handleAddToBookMark={handleAddToBookMark}></Blog>
               ))}
            </div>
        </div>
    )
}

export default Blogs