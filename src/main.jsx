import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // ✅ Add this line
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>            {/* ✅ Wrap App in HashRouter */}
      <App />
    </HashRouter>
  </StrictMode>,
);
