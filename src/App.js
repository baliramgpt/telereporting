import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import XraySection from './pages/list/XraySection';
import EcgSection from "./pages/list/EcgSection";
import SinglePage from './pages/single/SinglePage';
import { userInputs, productInputs } from './formSource';

import './styles/dark.scss';
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import NewRegistration from "./pages/new/XrayRegistration";

function App() {

  const { darkMode } = useContext(DarkModeContext);
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="app">
      {/* <Sidebar isSidebar={isSidebar} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="x-ray">
              <Route index element={<XraySection />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route path="new" element={<NewRegistration title='Add New User' />} />
            </Route>
            <Route path="ecg">
              <Route index element={<EcgSection />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route path="new" element={<NewRegistration title='Add New User' />} />
            </Route>
            <Route path="products">
              <Route index element={<XraySection />} />
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
