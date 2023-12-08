import React from 'react'
import Timeline from '../../components/common/timeLine/TimeLine'
import Tabs from '../../components/common/tabs/Tabs'

const Events = () => {
  return (
    <div className='container mx-auto bg-slate-100 w-full p-6 rounded-xl'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold'>Events</h1>
        <Tabs/>
      </div>
      <Timeline/>
    </div>
  )
}

export default Events