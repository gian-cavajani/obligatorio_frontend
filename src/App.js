import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

import Registro from './componentes/Registro';
import Notification from './componentes/Notification';
import Login from './componentes/Login';
import Dashboard from './componentes/Dashboard';
import Menu from './componentes/Menu';

function App() {
  const [message, setMessage] = useState({ code: null, message: null });
  const sendMessage = (p1, p2) => {
    if (p1 === 'ok') {
      setMessage({ code: 'ok', message: p2 });
    } else {
      setMessage({ code: 'error', message: p2 });
    }
    setTimeout(() => {
      setMessage({ code: null, message: null });
    }, 3000);
  };

  return (
    <div className="container">
      <Provider store={store}>
        <Notification message={message} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu />}>
              <Route path="/" element={<Login sendMessage={sendMessage} />} />
              <Route
                path="/registro"
                element={<Registro sendMessage={sendMessage} />}
              />
              <Route
                path="/dash"
                element={<Dashboard sendMessage={sendMessage} />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
