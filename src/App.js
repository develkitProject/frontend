import './App.css';
import { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Landing from './Landing';
import MyPage from './pages/MyPage';
import WorkSpace from './pages/WorkSpace';
import Kakao from './pages/KaKao';
import PostEditor from './components/PostEditor';
import MyPage2 from './pages/MyPage2';
import Footer from './components/Footer';
import DocDetail from './detail/workspaces/document/DocDetail';
import FAQPage from './pages/faq';
import WorkspaceDetailPage from './detail';
import Circle from './common/elements/Circle';
import EventPage from './pages/Event';

function App() {
  const [path, setPath] = useState(1);
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/' ? (
        <Header setPath={setPath} path={path} />
      ) : null}
      <Routes>
        <Route path="/" element={<Landing setPath={setPath} path={path} />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage2" element={<MyPage2 />} />
        <Route path="/workspace" element={<WorkSpace />} />
        <Route path="/editor" element={<PostEditor />} />
        <Route path="/kakao" element={<Kakao />} />
        <Route path="/workspace/main/:id" element={<WorkspaceDetailPage />} />
        {/* <Route path="/workspace/main/:id/docs/:docid" element={<DocDetail />} /> */}
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
      {location.pathname === '/' ? null : <Footer />}
    </>
  );
}

export default App;
