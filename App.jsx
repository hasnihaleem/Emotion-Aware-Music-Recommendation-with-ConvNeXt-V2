import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DetectPage from './pages/DetectPage';
import ResultsPage from './pages/ResultsPage';
import { Box, Container } from '@mui/material';
import backgroundImage from './assets/background.jpg';

import { getAccessToken } from './api/spotify';

function App() {
  useEffect(() => {
    getAccessToken();
  }, []);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(18, 18, 18, 0.7)',
        zIndex: -1,
      }
    }}>
      <Navbar />
      <Container component="main" maxWidth="xl" sx={{ flexGrow: 1, py: 3, position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detect" element={<DetectPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;