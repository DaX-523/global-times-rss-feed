import React from 'react';
import { LoadingProvider } from './context/LoadingContext';
import { useLoading } from './context/LoadingContext';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import { AppRoutes } from './routes';
import './App.css';

const AppContent = () => {
  const { isLoading } = useLoading();
  
  return (
    <>
      <ScrollToTop />
      <Preloader isLoading={isLoading} />
      <AppRoutes />
    </>
  );
};

const App = () => {
  return (
    <LoadingProvider>
      <AppContent />
    </LoadingProvider>
  );
};

export default App;
