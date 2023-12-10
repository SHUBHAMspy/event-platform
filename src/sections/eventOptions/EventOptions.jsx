import React, { useContext } from 'react'
import options from './options'
import Dropdown from '../../components/common/dropDown/Dropdown'
import ToggleButton from '../../components/common/ToggleButton/ToggleButton'
import { setCapacity, setRequireApproval, setTicketsOption, setVisibility } from '../../context/eventContext/actions'
import { EventContext } from '../../context/eventContext/EventContext'


const EventOptions = () => {
 const {state: {eventOptions},dispatch} = useContext(EventContext)
 console.log(eventOptions);
  const handleSelect = (option,context) => {
    console.log(option,context);
    switch (context) {
      case "tickets" :
        setTicketsOption(dispatch,option)
        return;
    
      case "visibility" :
        setVisibility(dispatch,option)
        return;
    
      case "capacity" :
        setCapacity(dispatch,option)
        return;

      // case "toggleButton" :
      //   (option)
      //   return;
    
      default:
        break;
    }
  }
  return (
    <section className='mt-10'>
      <h6>Event Options</h6>
      <div className='bg-slate-100 p-2 mt-1 rounded-xl flex flex-col gap-2'>
        {
          options.map((option) => (
            <div className='flex items-center justify-between'>
              <div className='flex gap-2 items-center'>
                <span className='text-gray-500 font-medium' >{option.icon}</span>
                <span className='text-gray-700'>{option.option}</span>
              </div>
              <div >
                <div>
                  {
                    option.componentType === 'Dropdown' 
                    ? <Dropdown options={option.dropdownOptions} onSelect={handleSelect} context={option.context}/>
                    : <ToggleButton value={eventOptions.requireApproval} handleChange={(value) => setRequireApproval(dispatch,value)} />
                  
                  }
                </div>
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