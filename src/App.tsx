import './App.css'
import Homepage from './pages/Homepage'
import BlogList from './pages/Blog'
import CreateBlog from './pages/Blog/CreateBlog'
import BlogPostView from './pages/Blog/BlogPost'

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/new" element={<CreateBlog />} />
      <Route path="/blog/:id" element={<BlogPostView />} />
    </Routes>
  );
}

export default App
