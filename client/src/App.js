import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';


function App() {
  return (
    <div className="App">
      <h1>Welcome to TechFolio</h1>
     <Routes>
      <Route path="/login" element={<SignIn/>}></Route>
      <Route path="/registration" element={<SignUp/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
