import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSection from './components/MainSection';


function App() {
  const [count, setCount] = useState(0);

  function HomePage() {
    return <h2>Home Page</h2>;
  }
  
  function AboutPage() {
    return <h2>About Page</h2>;
  }
  
  function FeaturesPage() {
    return <h2>Features Page</h2>;
  }
  
  function ContactPage() {
    return <h2>Contact Page</h2>;
  }


  return (
    <Router> {/* Wrap everything inside Router */}
      <div 
        style={{
          backgroundImage: 'url(https://img.freepik.com/premium-photo/abstract-futuristic-technology-cyber-space-blue-wave-background-3d-rendering_75775-874.jpg?w=826)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh'
        }}
      >
        <MainSection/>
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
          {/* Add Footer component */}
      </div>
    </Router>
  );
}

export default App;
