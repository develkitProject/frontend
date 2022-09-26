import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Landing from './pages/Landing';
import MyPage from './pages/MyPage';
// import SignUp from './pages/SignUp';
import WorkSpace from './pages/WorkSpace';
import Kakao from './pages/KaKao';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import PostEditor from './components/PostEditor';
import MyPage2 from './pages/MyPage2';
import Footer from './components/Footer';
import DocDetail from './detail/workspaces/document/DocDetail';
import FAQPage from './pages/faq';
import WorkspaceDetailPage from './detail';

function App() {
  const [path, setPath] = useState(1);

  // const cookie = getCookieToken();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      {/* <Routes></Routes> */}

      {location.pathname !== '/' ? (
        <Header setPath={setPath} path={path} />
      ) : null}
      <Routes>
        {/* <Route path='/signup' element={<SignUp />} /> */}
        <Route path='/' element={<Landing setPath={setPath} path={path} />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/mypage2' element={<MyPage2 />} />
        <Route path='/workspace' element={<WorkSpace />} />
        <Route path='/editor' element={<PostEditor />} />
        <Route path='/kakao' element={<Kakao />} />
        <Route path='/workspace/main/:id' element={<WorkspaceDetailPage />} />
        <Route path='/workspace/main/:id/docs/:docid' element={<DocDetail />} />
        <Route path='/faq' element={<FAQPage />} />
      </Routes>
      {location.pathname === '/' ? null : <Footer />}
    </>
  );
}

export default App;
