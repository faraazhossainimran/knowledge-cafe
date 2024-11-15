import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog';

const Blogs = ({countReadingTime, blogs}) => {

    return (
        <div className='w-2/3'>
            <div>
               {blogs.map((blog)=> (
                <Blog countReadingTime={countReadingTime} key={blog.id} blog={blog}></Blog>
               ))}
            </div>
        </div>
    )
}

export default Blogs