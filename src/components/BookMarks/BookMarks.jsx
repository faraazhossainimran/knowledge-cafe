import React from 'react'

const BookMarks = ({readCount}) => {
    return (
        <div className='md:w-1/3 pl-6 pt-4'>
           <div>
            <div className='bg-blue-100 rounded-lg py-6 hover:border-2 border-blue-600 cursor-pointer'><p className='text-xl text-blue-600 font-bold text-center'>Spent Time on read: {readCount} min</p></div>
            <div className='mt-6 bg-gray-200'>
                <div className='p-6'>
                <p className='text-xl font-bold pb-4'>Bookmarked Blogs: 8</p>
                <div className='p-2 bg-white rounded-md mb-4'><p className='font-semibold'>Understanding the Basics of Quantum Physics</p> </div>
                <div className='p-2 bg-white rounded-md mb-4'><p className='font-semibold'>Understanding the Basics of Quantum Physics</p> </div>
                </div>
            </div>
           </div>

        </div>
    )
}

export default BookMarks