import logo from './logo.svg';
import './App.css';
import IndexLayout from './layouts/index_layout';
import Callback from './pages/callback';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Policy from './uitls/policy';
import { Helmet } from 'react-helmet-async';

function App() {
  console.log("starting")
  return (
    <div className="App">
      <Helmet>
        <meta
          httpEquiv="Content-Security-Policy"
          content={`
                      frame-ancestors *;
                      default-src *;
                      script-src *;
                      img-src *;
                      media-src *;
                `}
        />
      </Helmet>
      <BrowserRouter>
        <Routes>
        <Route path='/' index element = {<Home/>}/>
        <Route path="/callback" element={<Callback />} />
            {/* <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
