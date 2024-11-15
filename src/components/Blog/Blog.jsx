import React from "react";

const Blog = ({ blog, countReadingTime, handleAddToBookMark }) => {
  const {
    blog_title,
    thumb_img,
    author_name,
    publish_date,
    reading_time,
    hashtags,
    author_img,
  } = blog;
  return (
    <div className="">
      <div className="bg-gray-200 my-4">
      <div className="rounded-lg">
        <img src={thumb_img} className="md:w-[800px] md:pb-2 rounded-lg" />
      </div>
      <div className="p-2 md:p-4">
      <div className="flex justify-between">
        <div className="flex justify-center">
          <div>
            <img className="md:w-[50px] w-[30px] mr-2 mt-2 md:mr-0" src={author_img} />
          </div>
          <div className="md:pl-4">
            <h3 className="md:text-2xl font-bold">{author_name}</h3>
            <p className="text-sm md:text-md">{publish_date}</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="md:text-xl mt-3 md:mt-0">{reading_time} min read </div>
          <div>
            <button onClick={()=> handleAddToBookMark(blog)}>
            <img
              className="w-[20px] ml-1 mt-4 md:mt-1 cursor-pointer"
              src="https://i.ibb.co.com/QkvN1gw/ribbon.png"
              alt="bookmark button"
            />
            </button>
          </div>
        </div>
      </div>
      <h2 className="md:text-4xl font-semibold py-4">{blog_title}</h2>
      <p className="md:text-xl">{hashtags}</p>
      <button className="text-blue-500 underline py-2 md:text-xl" onClick={()=> countReadingTime(reading_time)}>
        Mark as read
      </button>
      </div>
      </div>
    </div>
  );
};

export default Blog;
