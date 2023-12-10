import React, { useContext } from 'react'
import { EventContext } from '../../context/eventContext/EventContext'
import { setEventName } from '../../context/eventContext/actions'

const Title = () => {
  const {state,dispatch} = useContext(EventContext)

  const handleTitleChange = (e) => {
    setEventName(dispatch,e.target.value)
  }
  return (
    <section>
      <input
        className='h-12 w-80 outline-none placeholder:text-2xl' 
        placeholder='Event Name'
        onChange={handleTitleChange}
        value={state.eventName}
      />
    </section>
  )
}

export default Title