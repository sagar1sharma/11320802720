import './App.css';
import {Routes, Route} from 'react-router-dom';
import Page1 from './pages/page1'
import Page2 from './pages/page2';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Page1 />} />
        <Route path='/single' element = {<Page2 />} />
      </Routes>
    </div>
  );
}

export default App;
