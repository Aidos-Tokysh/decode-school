//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Main from './pages/Main';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Login from './pages/Login';
import NewBlog from './pages/NewBlog';
import EditBlog from './pages/EditBlog';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path ='/' element={<Main/>}/>
      <Route path ='/register' element={<Register/>}/>
      <Route path ='/login' element={<Login/>}/>
      <Route path ='/profile/:userId' element={<Profile/>}/>
      <Route path ='/NewBlog' element={<NewBlog/>}/>
      <Route path ='/editblog/:blogId' element={<EditBlog/>}/>
      

    </Routes>
   </BrowserRouter>
    
  );
}

export default App;
