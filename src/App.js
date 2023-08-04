import {BrowserRouter} from 'react-router-dom'
import './App.css';
import RouteCompo from './components/RouteCompo';
import LinkCompo from './components/LinkCompo';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <LinkCompo/>
        <RouteCompo/>
      </BrowserRouter>
    </div>
  );
}

export default App;
