import logo from './logo.svg';
import './App.css';
import HeadingsAndParagraphs from './headingsandpara';
import Lists from './lists';
import Forms from './forms';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Table from './tables';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">

        <a href="https://main--cs5610-landingpage-shreyansmulkutkar.netlify.app/" className="back-button">
          Back to Landing Page
        </a>
        <div></div>
        <a href="https://main--kanbas-webapp-sm.netlify.app/" className="kanbas-button">
          Go to Kanbas
        </a>

        <h1>Shreyans Mulkutkar</h1>
          
        <h2>Lab 1</h2>

          <Navbar />

          {/* Presentation 2 */}
          {/* <HeadingsAndParagraphs /> */}

          {/* Presentation 3 */}
          {/* <Lists /> */}

          {/* Presentation 4 */}
          {/* <Forms /> */}

          <Routes>
            <Route path="/" element={<h3> Use the above navbar to view different components. </h3>}/>
            <Route path="/headingsandpara" element={<HeadingsAndParagraphs />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/tables" element={<Table />} />
            <Route path="/forms" element={<Forms />} />
          </Routes>


        </header>
      </div>
    </HashRouter>
  );
}

export default App;
