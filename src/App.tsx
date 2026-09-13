import './index.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import { Suspense } from 'react';
import TechnologyGrid from './Components/TechnologyGrid';
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <TechnologyGrid />
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;