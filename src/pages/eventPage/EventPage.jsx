import React, { useContext } from 'react'
import Title from '../../sections/title/Title'
import EventInfo from '../../sections/eventInfo/EventInfo'
import Button from '../../components/common/Button'
import EventOptions from '../../sections/eventOptions/EventOptions'
import ThemeSelection from '../../components/themeSelection/ThemeSelection'
import ThumbnailCreator from '../../sections/thumbnailCreator/ThumbnailCreator'
import Timeline from '../../components/common/timeLine/TimeLine'
import { EventContext } from '../../context/eventContext/EventContext'
import { EditorContext } from '../../context/editorContext/EditorContext'

const EventPage = () => {
  const {state: {location,eventName,startDate,endDate,startTime,endTime,eventOptions}} = useContext(EventContext)
  const {state:{background,backgroundColor,backgroundImage,text}} = useContext(EditorContext)
  
  const createEvent = async() => {
    const postData = {
      "eventName":  eventName,
      "startDate": startDate,
      "endDate": endDate,
      "startTime": startTime,
      "endTime": endTime,
      "location": location,
      "text": "You are invited",
      "backgroundImage": backgroundImage,
      "background":background,
      "eventOptions": {
        "requireApproval": eventOptions.requireApproval,
        "tickets": eventOptions.tickets,
        "capacity": eventOptions.capacity,
        "visibility": eventOptions.visibility
      }
    }

    try {
      const response = await fetch('http://localhost:5000/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
    } catch(error){
      console.error(error);
      throw new Error(error)
    }  
  }
  return (
    <div className='container mx-auto bg-white w-full p-6 rounded-xl'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <Title/>
          <EventInfo/>
          <EventOptions/>
          <Button handleClick={createEvent}  buttonText={"Create Event"}  bgColor={{background: 'linear-gradient(90.32deg, #8F00FF 0.28%, rgba(143, 0, 255, 0) 99.72%), #764ABC'}}/>
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