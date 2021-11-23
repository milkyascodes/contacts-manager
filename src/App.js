
import Home from './pages/Home'
import Header from './components/Header'
import AddContact from './pages/AddContact'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'


function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add' exact element={<AddContact/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
