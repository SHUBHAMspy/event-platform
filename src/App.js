import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import EventPage from './pages/eventPage/EventPage';

function App() {
  return (
    <div className="bg-slate-100">
      <Navbar/>
      <EventPage/>
    </div>
  );
}

export default App;
