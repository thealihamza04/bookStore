import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Create a root element using createRoot()
const root = createRoot(document.getElementById('root'));

// Render the BrowserRouter component with the App component inside
root.render(
  <BrowserRouter>
    <div className='dark:bg-slate-900 dark:text-white'>
      <App />
    </div>
  </BrowserRouter>
);