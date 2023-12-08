import EventPage from "./pages/eventPage/EventPage";
import Events from "./pages/events/Events";

const routes = [
  { path: '/', element: <EventPage /> },
  { path: '/events', element: <Events /> },

];

export default routes;