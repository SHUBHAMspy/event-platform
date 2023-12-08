import React, { useContext, useState } from 'react'
import DatePicker from '../../components/datePicker/DatePicker'
import { MapPinIcon,CalendarDaysIcon } from '@heroicons/react/24/outline'
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import TimeField from 'react-simple-timefield';
import { EventContext } from '../../context/eventContext/EventContext';
import { setEndDate, setEndTime, setStartDate, setStartTime } from '../../context/eventContext/actions';

const EventInfo = () => {
  const {state,dispatch} = useContext(EventContext)
  // const [startDate, setStartDate] = useState(state.startDate)
  // const [endDate, setEndDate] = useState(null)
  const [openStartCalendar, setOpenStartCalendar] = useState(false)
  const [openEndCalendar, setOpenEndCalendar] = useState(false)
  const [openTimer, setOpenTimer] = useState()
  const [first, setfirst] = useState('')
  console.log(state);

  const handleStartDate = (date) => {
    setStartDate(dispatch,date)
  }
  const handleEndDate = (date) => {
    setEndDate(dispatch,date)
  }

  const handleStartTime = (event,value) => {
    setStartTime(dispatch,value)
  }
  const handleEndTime = (event,value) => {
    setEndTime(dispatch,value)
  }



  return (
    <section>
      <div className='flex gap-4'>
        <CalendarDaysIcon className='h-6 w-6 text-gray-500'/>
        <div className='bg-slate-100 p-2 rounded-xl flex flex-col w-full'>
          <div className='flex items-center justify-between'>
            <span className='items-center w-6 text-gray-700'>Start</span>
            <div className='flex flex-col sm:flex-row items-center '>
              <input  
                className='ml-1 mb-2 h-8 sm:w-1/2 bg-slate-200 outline-none relative rounded-md' 
                placeholder='Date'
                onFocus={() => setOpenStartCalendar(true)}
                value={state.startDate}
              />
              {
                openStartCalendar 
                ? (
                  <div className='absolute top-10 z-50'>
                    <DatePicker setDate={handleStartDate} date={state.startDate} setOpenCalendar={setOpenStartCalendar}/>
                  </div>
                )
                : null 
              }
              <TimeField
                onChange={handleStartTime}
                input={<input className='ml-1 mb-2 h-8 sm:w-1/2 bg-slate-200 outline-none rounded-md' placeholder='Time'/>}
              />
              
            </div>
          </div>  
          <div className='flex items-center justify-between'>
            <span className='items-center w-6 text-gray-700'>End</span>
            <div className='flex flex-col sm:flex-row items-center'>
              <input  
                className='ml-1 mb-2 h-8 sm:mb-0 sm:w-1/2 bg-gray-200 outline-none rounded-md relative' 
                placeholder='Date'
                onFocus={() => setOpenEndCalendar(true)}
                value={state.endDate}
              />
              {
                openEndCalendar 
                ? (
                  <div className='absolute top-16'>
                    <DatePicker setDate={handleEndDate} date={state.endDate} setOpenCalendar={setOpenEndCalendar}/>
                  </div>
                )
                : null 
              }
              <TimeField
                onChange={handleEndTime}
                input={<input className='ml-1 mb-2 h-8 sm:mb-0 sm:w-1/2 bg-gray-200 outline-none rounded-md' placeholder='Time'/>}
              />
              
              {/* <input className='ml-1 mb-2 h-8 sm:mb-0 sm:w-1/2 bg-gray-200 outline-none rounded-sm' placeholder='Time'/> */}
            </div>
          </div>        
        </div>
      </div>

      
      <div className='flex gap-4 mt-8'>
        <MapPinIcon className='h-6 w-6 text-gray-500'/>
        <div  className='bg-slate-100 p-2 rounded-xl flex flex-col w-full'>
          <input placeholder='Add Event Location'className='bg-slate-100 outline-none' />
          <span className='text-sm text-gray-700'>Offline location or virtual link</span>
        </div>
      </div>
    </section>
  )
}

export default EventInfo