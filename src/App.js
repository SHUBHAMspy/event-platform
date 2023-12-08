import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import EventPage from './pages/eventPage/EventPage';
import routes from './routes';
import { useRoutes } from 'react-router-dom';

function App() {
  const element = useRoutes(routes);
  return (
    <div className="bg-slate-100">
      <Navbar/>
      {element}
    </div>
  );
}

export default App;
