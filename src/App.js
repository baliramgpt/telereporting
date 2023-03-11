import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import SinglePage from './pages/single/SinglePage';
import { userInputs, productInputs } from './formSource';
import Sidebar from "./components/sidebar/Sidebar";

import './styles/dark.scss';
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import NewRegistration from "./pages/new/NewRegistration";

function App() {

  const { darkMode } = useContext(DarkModeContext);
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="app">
      {/*<Sidebar isSidebar={isSidebar} />*/}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route path="new" element={<NewRegistration title='Add New User' />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route path="new" element={<NewRegistration inputs={productInputs} title='Add New Product' />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
