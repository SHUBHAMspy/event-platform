import React from 'react';
import useFetch from '../../../hooks/useFetch';
import { ThreeCircles } from 'react-loader-spinner';

const Timeline = () => {
  const url = `http://localhost:5000/events`
  const { data, loading, error } = useFetch(url);
  console.log(data);
  const events = [
    {
      title: 'Event 1',
      date: 'January 1, 2023',
      description: 'Description for Event 1',
    },
    {
      title: 'Event 2',
      date: 'February 15, 2023',
      description: 'Description for Event 2',
    },
    // Add more events as needed
  ];
  
  return (
    
    <section>
      <div className='sticky top-0 bg-white py-3 z-10 shadow-xl shadow-white'>
        <h2 className='group-date'>{new Date().toLocaleString('default',{month:'long'})}</h2>
      </div>
      {
        loading
        ? (
          <div className='flex justify-center items-center w-full mt-10 mb-10'>
            <ThreeCircles
              height="80"
              width="80"
              radius="9"
              color='#8F00FF'
              ariaLabel="loading"
              />
          </div>
        ) : (
          data.map((event) => (
            <div className='flex gap-16'>
              <span className='w-24'>{event.startDate}</span>
              <div className='timeline w-full'>
                <div className='relative'>
                  <div className='dot'></div>
                  <div className='pl-10'>
                    <div className='flex flex-col md:flex-row justify-between w-full bg-white p-4 rounded-xl'>
                      <div className='flex flex-col justify-between'>
                        <span className='text-gray-500'>{event?.startTime}</span>
                        <h3 className='timeline-title'>{event?.eventName}</h3>
                        <span className='text-gray-500'>{event.eventOptions.visibility}</span>
                      </div>
                      <div
                        className='h-16 w-16 rounded-xl'
                        style={{
                          background: event.backgroundImage,
                          // backgroundColor: (
                          //   startColor && endColor 
                          //   ? ''
                          //   : backgroundImage
                          //   ? ''
                          //   : backgroundColor
                          // ),
                          backgroundImage: `url(${event.backgroundImage})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      >

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )
      }
    </section>
    // <div className="flex flex-col space-y-8">
    //   {events.map((event, index) => (
    //     <div key={index} className="relative">
    //       <div className="border-r-2 border-gray-300 h-full absolute left-4"></div>
    //       <div className="flex items-center justify-between">
    //         <div className="bg-gray-800 w-10 h-10 text-white rounded-full p-2">
    //           {index + 1}
    //         </div>
    //         <div className="">
    //           <h2 className="font-bold text-xl">{event.title}</h2>
    //           <p className="text-gray-600">{event.date}</p>
    //           <p>{event.description}</p>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Timeline;