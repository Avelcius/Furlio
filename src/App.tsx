import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Library from './pages/Library';
import Search from './pages/Search';
import Detail from './pages/Detail';
import Reader from './pages/Reader';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<Layout><Outlet /></Layout>}>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/search" element={<Search />} />
            <Route path="/comic/:id" element={<Detail />} />
          </Route>
          <Route path="/read/:id" element={<Reader />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
