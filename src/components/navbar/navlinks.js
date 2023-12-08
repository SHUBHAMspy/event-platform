import { GlobeAltIcon,TicketIcon,CalendarDaysIcon } from '@heroicons/react/24/solid'
const navLinks = [
  {
    name: 'Events',
    icon: <TicketIcon className='h-5 w-5 text-slate-800 mr-1'/>,
    link: '/events'
  },
  {
    name: 'Calendar',
    icon: <CalendarDaysIcon className='h-5 w-5 text-slate-800 mr-1'/>,
    link: '/calendar'
  },
  {
    name: 'Explore',
    icon: <GlobeAltIcon className='h-5 w-5 text-slate-800 mr-1'/>
  },
]

export default navLinks