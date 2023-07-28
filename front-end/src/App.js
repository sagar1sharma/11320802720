import './App.css';
import {Routes, Route} from 'react-router-dom';
import page1 from './pages/page1'
import page2 from './pages/page2';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<page />} />
        <Route path='/single' element = {page2} />
      </Routes>
    </div>
  );
}

export default App;
