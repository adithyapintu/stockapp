import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from './Components/Login/LoginScreen';
import HomeScreen from './Components/Home/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/auth" element={<LoginScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
