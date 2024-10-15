import { useState } from 'react';
// Import all necessary components
import styles from './App.module.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  // State variable to track the current page; default value is 'Home'
  const [selectedPage, setSelectedPage] = useState("Home");

  // Function to handle navigation and update the current page state
  function handleNavigation(pageName) {
    setSelectedPage(pageName);
  }

  // Function to render the appropriate component based on the selectedPage state
  function renderSelectedPage() {
    switch (selectedPage) {
      case 'Home':  // default case me home page hi select hoga
        return <Home />;
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      case 'Education':
        return <Education />;
      case 'Experience':
        return <Experience />;
      default:
        return <Skills />;
    }
  }

  return (
    <div className={styles.appContainer}>
      {/* Sidebar navigation with clickable links */}
      <nav className={styles.sidebar}>
        <p>Mo Shubhan</p>
        <ul>
          <li><a href="#" onClick={() => handleNavigation('Home')}>Home</a></li>
          <li><a href="#" onClick={() => handleNavigation('About')}>About</a></li>
          <li><a href="#" onClick={() => handleNavigation('Contact')}>Contact</a></li>
          <li><a href="#" onClick={() => handleNavigation('Education')}>Education</a></li>
          <li><a href="#" onClick={() => handleNavigation('Experience')}>Experience</a></li>
          <li><a href="#" onClick={() => handleNavigation('Skills')}>Skills</a></li>
        </ul>
      </nav>

      {/* Main content section where the selected page component will be displayed */}
      <main className={styles.mainContent}>
        <div className={styles.infoContainer}>
          {/* Render the appropriate page component */}
          {/*when we call the render fun then selected Page component will be render here because we return the components*/}
          {renderSelectedPage()} 
         
        </div>
      </main>
    </div>
  );
}

export default App;
