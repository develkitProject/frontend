import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './pages/Landing';
import Login from './login';
import MyPage from './pages/MyPage';
import SignUp from './pages/SignUp';
import WorkSpace from './pages/WorkSpace';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/workspace' element={<WorkSpace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
