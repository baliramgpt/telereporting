import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import SinglePage from './pages/single/SinglePage';
import NewPage from "./pages/new/NewPage";
import { userInputs, productInputs } from './formSource';

import './styles/dark.scss';
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route path="new" element={<NewPage inputs={userInputs} title='Add New User' />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route path="new" element={<NewPage inputs={productInputs} title='Add New Product' />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
