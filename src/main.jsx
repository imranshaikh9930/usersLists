import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { UserProvider } from './Context/userContext.jsx'; // Ensure correct import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider> {/* Use UserProvider instead of useContextProvider */}
      <App />
    </UserProvider>
  </StrictMode>,
);
