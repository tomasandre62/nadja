import { BrowserRouter, HashRouter } from 'react-router-dom';
import Footer from './footer';
import About from './About';
import App from './App';
import './App.css';
import './index.css';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './listaArte.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <About />
    <App />
    <Footer />
  </HashRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
