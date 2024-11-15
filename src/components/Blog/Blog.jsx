import React from "react";

const Blog = ({ blog, countReadingTime }) => {
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
    <div>
      <div className="rounded-lg">
        <img src={thumb_img} className="w-[800px] py-6 rounded-lg" />
      </div>
      <div className="md:flex justify-between">
        <div className="flex justify-center">
          <div>
            <img className="w-[50px]" src={author_img} />
          </div>
          <div className="pl-4">
            <h3 className="text-2xl font-bold">{author_name}</h3>
            <p>{publish_date}</p>
          </div>
        </div>
        <div className="flex">
          <div className="text-xl">{reading_time} min read </div>
          <div>
            <button onClick={()=> countReadingTime(reading_time)}>
            <img
              className="w-[20px] ml-3 mt-1 cursor-pointer"
              src="https://i.ibb.co.com/QkvN1gw/ribbon.png"
              alt="bookmark button"
            />
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-4xl font-semibold py-4">{blog_title}</h2>
      <p className="text-xl">{hashtags}</p>
      <button className="text-blue-500 underline py-2 text-xl" onClick={()=> countReadingTime(reading_time)}>
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
