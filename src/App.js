import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Landing from './pages/Landing';
import MyPage from './pages/MyPage';
// import SignUp from './pages/SignUp';
import WorkSpace from './pages/WorkSpace';
import Kakao from './pages/KaKao';
import { Routes, Route, useNavigate } from 'react-router-dom';
import PostEditor from './components/PostEditor';
import MyPage2 from './pages/MyPage2';
import Footer from './components/Footer';
import ClaendarPage from './detail/workspaces/calendar/CalendarPage';
import DocDetail from './detail/workspaces/document/DocDetail';
import WorkspaceDetailPage from './detail';
import { getCookieToken } from './Cookie';
import useGetUser from './common/hooks/useGetUser';

function App() {
  const [path, setPath] = useState(1);
  const cookie = getCookieToken();
  const navigate = useNavigate();
  return (
    <>
      <Header setPath={setPath} path={path} />
      <Routes>
        <Route path='/' element={<Landing setPath={setPath} path={path} />} />
        {/* <Route path='/signup' element={<SignUp />} /> */}
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/mypage2' element={<MyPage2 />} />
        <Route path='/workspace' element={<WorkSpace />} />
        <Route path='/editor' element={<PostEditor />} />
        <Route path='/kakao' element={<Kakao />} />
        <Route
          path='/workspace/main/:id'
          element={cookie ? <WorkspaceDetailPage /> : <Landing />}
        />
        {/* <Route path='/workspace/main/:id' element={<WorkSpaceDetail />} /> */}
        {/* <Route path='/workspace/main/:id/address' element={<AddressPage />} /> */}
        <Route path='/workspace/main/:id/docs/:docid' element={<DocDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
