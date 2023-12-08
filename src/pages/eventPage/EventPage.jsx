import React from 'react'
import Title from '../../sections/title/Title'
import EventInfo from '../../sections/eventInfo/EventInfo'
import Button from '../../components/common/Button'
import EventOptions from '../../sections/eventOptions/EventOptions'
import ThemeSelection from '../../components/themeSelection/ThemeSelection'
import ThumbnailCreator from '../../sections/thumbnailCreator/ThumbnailCreator'
import Timeline from '../../components/common/timeLine/TimeLine'

const EventPage = () => {
  return (
    <div className='container mx-auto bg-white w-full p-6 rounded-xl'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <Title/>
          <EventInfo/>
          <EventOptions/>
          <Button buttonText={"Create Event"}  bgColor={{background: 'linear-gradient(90.32deg, #8F00FF 0.28%, rgba(143, 0, 255, 0) 99.72%), #764ABC'}}/>
        </div>
        <div>
          <ThumbnailCreator/>
        </div>
      </div>
      {/* <Timeline/> */}
    </div>
  )
}

export default EventPage