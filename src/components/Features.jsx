import React from 'react'
import TextGradient from './TextGradient'
import Dropdown from './Dropdown'

const Features = () => {
  return (
    <div>
        <h1 className='flex items-center justify-center text-2xl font-black p-4'>Things your spreadsheet wishes it could do</h1>
        <div>
            <Dropdown />
        </div>
    </div>
  )
}

export default Features