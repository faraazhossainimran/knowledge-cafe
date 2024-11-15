import React from "react";

const BookMarks = ({ readCount, bookMarks }) => {
  return (
    <div className="md:w-1/3 md:pl-6 md:pt-4 m-4 md:m-0">
      <div>
        <div className="bg-blue-100 rounded-lg py-6 hover:border-2 border-blue-600 cursor-pointer">
          <p className="text-xl text-blue-600 font-bold text-center">
            Spent Time on read: {readCount} min
          </p>
        </div>
        <div className="mt-6 bg-gray-200">
          <div className="p-6">
            <p className="text-xl font-bold pb-4">
              Bookmarked Blogs: {bookMarks.length}
            </p>
            {/* <div className='p-2 bg-white rounded-md mb-4'><p className='font-semibold'>{bookMark}</p> </div> */}
            {bookMarks.length === 0 ? <p>No BookMarks added</p> : (
                bookMarks.map((bookMark, index)=> (
                    <div key={index} className='p-2 bg-white rounded-md mb-4'><p className='font-semibold'>{bookMark.blog_title}</p> </div>
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMarks;
