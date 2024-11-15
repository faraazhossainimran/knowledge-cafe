import React from 'react'
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 mx-4 border-b-2'>
            <h1 className='md:text-3xl text-xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt=''/>
        </div>
    )
}

export default Header