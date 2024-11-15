import React from 'react'

const Blog = ({blog}) => {
    const {blog_title, thumb_img} = blog;
    return (
        <div>
           <img src={thumb_img} className='w-[800px] py-6'/>
           <h2 className='text-3xl font-semibold'>{blog_title}</h2>
        </div>
    )
}

export default Blog