import React from 'react'
import list from '../../public/List.json'
import Card from './Card'
import { Link } from 'react-router-dom'

const Course = () => {
  console.log(list)
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-10 sm:px-4'>
      <div className='mt-36 text-center'>
        <h1 className='text-2xl md:text-4xl'>We'r delighted to have you <span className='text-pink-500'>here! :)</span></h1>
        <p className='mt-12 '>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio sit alias omnis. At error numquam cumque aliquid voluptatibus. Commodi cumque ullam accusantium pariatur reiciendis facere praesentium totam quo quod ipsa!
        </p>
        <Link to='/'>
          <button className='btn btn-secondary mt-6'>back</button>
        </Link>
        <div className='flex justify-center'>
          <div className='mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
            {
              list.map((item) => (
                <Card key={item.id} item={item} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course
