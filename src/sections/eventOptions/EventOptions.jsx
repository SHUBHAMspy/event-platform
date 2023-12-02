import React from 'react'
import options from './options'
import Dropdown from '../../components/common/dropDown/Dropdown'

const EventOptions = () => {
  return (
    <section className='mt-10'>
      <h6>Event Options</h6>
      <div className='bg-slate-100 p-2 rounded-xl'>
        {
          options.map((option) => (
            <div className='flex items-center justify-between'>
              <div className='flex gap-2 items-center'>
                <span >{option.icon}</span>
                <span>{option.option}</span>
              </div>
              <div >
                <div>{option.component}</div>
              </div>
            </div>
            
          ))
        }
        <div></div>
      </div>
      
    </section>
  )
}

export default EventOptions