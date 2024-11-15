import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/blogs/blogs";
import BookMarks from "./components/BookMarks/BookMarks";

function App() {
  const [readCount, setReadCount] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [bookMarkBlogs, setBookMarkBlogs] = useState([]);
  useEffect(()=> {
      fetch('blogs.json')
      .then(res=> res.json())
      .then(data => setBlogs(data))
  },[]);
  const countReadingTime = (time) => {
    setReadCount((prevCount) => prevCount + time);
  }
  const bookMarkBlogItems = () => {
    
  }
  return (
    <>
      <div className="container mx-auto md:w-[1100px]">
        <Header></Header>
        <div className="md:flex">
          <Blogs countReadingTime={countReadingTime} blogs={blogs}></Blogs>
          <BookMarks readCount={readCount}></BookMarks>
        </div>
      </div>
    </>
  );
}

export default App;
