import React, { useState } from 'react'
import DatePicker from '../../components/datePicker/DatePicker'
import { MapPinIcon,CalendarDaysIcon } from '@heroicons/react/24/outline'
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import TimeField from 'react-simple-timefield';

const EventInfo = () => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [openStartCalendar, setOpenStartCalendar] = useState(false)
  const [openEndCalendar, setOpenEndCalendar] = useState(false)
  const [openTimer, setOpenTimer] = useState()
  const [first, setfirst] = useState('')
  return (
    <section>
      <div className='flex gap-4'>
        <CalendarDaysIcon className='h-6 w-6'/>
        <div className='bg-slate-100 p-2 rounded-lg flex flex-col w-full'>
          <div className='flex items-center justify-between'>
            <span className='items-center w-6'>Start</span>
            <div className='flex flex-col sm:flex-row items-center '>
              <input  
                className='ml-1 mb-2 h-8 sm:w-1/2 bg-slate-200 outline-none relative' 
                placeholder='Date'
                onFocus={() => setOpenStartCalendar(true)}
                value={startDate}
              />
              {
                openStartCalendar 
                ? (
                  <div className='absolute top-10 z-50'>
                    <DatePicker setDate={setStartDate} date={startDate} setOpenCalendar={setOpenStartCalendar}/>
                  </div>
                )
                : null 
              }
              <input className='ml-1 mb-2 h-8 sm:w-1/2 bg-slate-200 outline-none' placeholder='Time'/>
            </div>
          </div>  
          <div className='flex items-center justify-between'>
            <span className='items-center w-6 '>End</span>
            <div className='flex flex-col sm:flex-row items-center'>
              <input  
                className='ml-1 mb-2 h-8 sm:mb-0 sm:w-1/2 bg-gray-200 outline-none rounded-sm relative' 
                placeholder='Date'
                onFocus={() => setOpenEndCalendar(true)}
                value={endDate}
              />
              {
                openEndCalendar 
                ? (
                  <div className='absolute top-16'>
                    <DatePicker setDate={setEndDate} date={endDate} setOpenCalendar={setOpenEndCalendar}/>
                  </div>
                )
                : null 
              }
              <TimeField
                input={<input className='ml-1 mb-2 h-8 sm:mb-0 sm:w-1/2 bg-gray-200 outline-none rounded-sm' placeholder='Time'/>}
              />
              
              {/* <input className='ml-1 mb-2 h-8 sm:mb-0 sm:w-1/2 bg-gray-200 outline-none rounded-sm' placeholder='Time'/> */}
            </div>
          </div>        
        </div>
      </div>

      
      <div className='flex gap-4 mt-8'>
        <MapPinIcon className='h-6 w-6'/>
        <div  className='bg-slate-100 p-2 rounded-lg flex flex-col w-full'>
          <input placeholder='Add Event Location'className='bg-slate-100 outline-none' />
          <span className='text-sm'>Offline location or virtual link</span>
        </div>
      </div>
    </section>
  )
}

export default EventInfo