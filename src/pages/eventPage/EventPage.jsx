import React from 'react'
import Title from '../../sections/title/Title'
import EventInfo from '../../sections/eventInfo/EventInfo'
import Button from '../../components/common/Button'
import EventOptions from '../../sections/eventOptions/EventOptions'
import ThemeSelection from '../../components/themeSelection/ThemeSelection'
import ThumbnailCreator from '../../sections/thumbnailCreator/ThumbnailCreator'

const EventPage = () => {
  return (
    <div className='container mx-auto bg-white w-full p-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <Title/>
          <EventInfo/>
          <EventOptions/>
          <Button buttonText={"Create Event"}  bgColor={'bg-indigo-600'}/>
        </div>
        <div>
          <ThumbnailCreator/>
        </div>
      </div>
    </div>
  )
}

export default EventPage