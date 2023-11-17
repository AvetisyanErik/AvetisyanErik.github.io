import './App.css';
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage';
import LostPwd from './pages/LostPwd.jsx'
import RegPage from './pages/RegPage.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/myPage' element={<MyPage/>}/>
        <Route path='/lostpwd'element={<LostPwd/>}/>
        <Route path='/regPage'element={<RegPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
