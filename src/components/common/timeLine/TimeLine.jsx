import React from 'react';
import useFetch from '../../../hooks/useFetch';

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
      <div className='flex gap-16'>
        <span>wed 13 Novw</span>
        <div className='timeline w-full'>
          <div className='relative'>
            <div className='dot'></div>
            <div className='pl-10'>
              <div className='flex justify-between'>
                <div className='flex flex-col justify-between bg-white'>
                  <span className='bg-gray-500'>{data?.startTime ? data?.startTime : 'Loading...' }</span>
                  <h3 className='timeline-title'>{data?.eventName ? data?.eventName : 'Loading...'}</h3>
                  <span className='text-gray-500'></span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
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