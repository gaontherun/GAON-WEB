import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Filmography from './pages/Filmography';
import Media from './pages/Media';
import { ViewModeProvider } from './context/ViewModeContext';

function App() {
  return (
    <ViewModeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/filmography" element={<Filmography />} />
            <Route path="/media" element={<Media />} />
          </Routes>
        </Layout>
      </Router>
    </ViewModeProvider>
  );
}

export default App;
