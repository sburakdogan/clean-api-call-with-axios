import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Posts } from './pages/Posts';
import { SinglePost } from './pages/SinglePost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path='/posts/:postId' element={<SinglePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
