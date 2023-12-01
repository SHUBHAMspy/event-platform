import React from 'react'
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const DatePicker = ({setDate,date,setOpenCalendar}) => {
  return (
    <div>
      <Calendar date={date} onChange={(item) => {setDate(item); setOpenCalendar(false)}}/>
    </div>
  )
}

export default DatePicker