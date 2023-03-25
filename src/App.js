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
import EEGSection from "./pages/list/EEGSection";
import MRISection from "./pages/list/MRISection";
import CTScanSection from "./pages/list/CTScanSection";
import XrayRegistration from "./pages/new/XrayRegistration";
import EcgRegistration from "./pages/new/EcgRegistration";
import EEGRegistration from "./pages/new/EEGRegistration";
import MRIRegistration from "./pages/new/MRIRegistration";
import CTScanRegsitration from "./pages/new/CTScanRegsitration";
import DoctorDashboard from "./pages/doctor/Dashboard";

function App() {

  const { darkMode } = useContext(DarkModeContext);
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="app">
      {/* <Sidebar isSidebar={isSidebar} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {/* <Route index element={<Home />} /> */}
            <Route path="login" element={<Login />} />
            <Route path="lab">
              <Route index element={<Home />} />
              <Route path="x-ray">
                <Route index element={<XraySection />} />
                <Route path=":userId" element={<SinglePage />} />
                <Route path="new" element={<XrayRegistration title='Add New User' />} />
              </Route>
              <Route path="ecg">
                <Route index element={<EcgSection />} />
                <Route path=":userId" element={<SinglePage />} />
                <Route path="new" element={<EcgRegistration title='Add New User' />} />
              </Route>
              <Route path="eeg">
                <Route index element={<EEGSection />} />
                <Route path=":userId" element={<SinglePage />} />
                <Route path="new" element={<EEGRegistration title='Add New User' />} />
              </Route>
              <Route path="mri">
                <Route index element={<MRISection />} />
                <Route path=":userId" element={<SinglePage />} />
                <Route path="new" element={<MRIRegistration title='Add New User' />} />
              </Route>
              <Route path="ctscan">
                <Route index element={<CTScanSection />} />
                <Route path=":userId" element={<SinglePage />} />
                <Route path="new" element={<CTScanRegsitration inputs={productInputs} title='Add New Product' />} />
              </Route>
            </Route>
            <Route path="doctor">
              <Route index element={<DoctorDashboard/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
