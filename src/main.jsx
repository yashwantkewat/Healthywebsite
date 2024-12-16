// src/main.jsx
import { createRoot } from 'react-dom/client';
import './index.css'; // Ensure this is pointing to the correct CSS file
import App from './App.jsx';
import { Provider } from 'react-redux';
import Store from './redux/store.jsx';
createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App />
  </Provider>
);
