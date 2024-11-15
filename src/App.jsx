import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/blogs/blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Swal from "sweetalert2";

function App() {
  const [readCount, setReadCount] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [bookMarks, setBookMarks] = useState([]);
  useEffect(()=> {
      fetch('blogs.json')
      .then(res=> res.json())
      .then(data => setBlogs(data))
  },[]);
  const countReadingTime = (time) => {
    setReadCount((prevCount) => prevCount + time);
  }
  const handleAddToBookMark = (blog) => {
    const isAlreadyBookMarked = bookMarks.some((item) => item.id === blog.id)
    if (!isAlreadyBookMarked) {
      const newBookMarks = [...bookMarks, blog]
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Blog is Bookmarked successfully",
        showConfirmButton: false,
        timer: 1500
      });
      setBookMarks(newBookMarks);
    } else (
      Swal.fire({
        title: "This blog is already bookmarked",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__slower
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      })
    )
    
  }
  return (
    <>
      <div className="container mx-auto md:w-[1100px]">
        <Header></Header>
        <div className="md:flex">
          <Blogs countReadingTime={countReadingTime} blogs={blogs} handleAddToBookMark={handleAddToBookMark}></Blogs>
          <BookMarks readCount={readCount} bookMarks={bookMarks}></BookMarks>
        </div>
      </div>
    </>
  );
}

export default App;
