import logo from './logo.svg';
import './App.css';
import HeadingsAndParagraphs from './headingsandpara';
import Lists from './lists';
import Forms from './forms';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">

          <Navbar />

          {/* Presentation 2 */}
          {/* <HeadingsAndParagraphs /> */}

          {/* Presentation 3 */}
          {/* <Lists /> */}

          {/* Presentation 4 */}
          {/* <Forms /> */}

          <Routes>
            <Route path="/" element={<h1> Use the navbar to view different components. </h1>}/>
            <Route path="/headingsandpara" element={<HeadingsAndParagraphs />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/forms" element={<Forms />} />
          </Routes>


        </header>
      </div>
    </HashRouter>
  );
}

export default App;
