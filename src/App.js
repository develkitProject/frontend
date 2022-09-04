import './App.css';

import Header from './components/Header';
import Landing from './pages/Landing';
import MyPage from './pages/MyPage';
// import SignUp from './pages/SignUp';
import WorkSpace from './pages/WorkSpace';
import Kakao from './pages/KaKao';
import { Routes, Route } from 'react-router-dom';
import Editor from './components/Editor';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        {/* <Route path='/signup' element={<SignUp />} /> */}
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/workspace' element={<WorkSpace />} />
        <Route path='/editor' element={<Editor />} />
        <Route path='/kakao' element={<Kakao />} />
      </Routes>
    </>
  );
}

export default App;
