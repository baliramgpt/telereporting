import React from "react";
import {
  Input,
  FormGroup,
  InputGroup,
  InputGroupText,
  Button,
} from "reactstrap";
import PersonIcon from "@mui/icons-material/Person";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import PeopleIcon from "@mui/icons-material/People";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../api/api";

import "./Login.scss";

const Login = () => {
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [role, setRole] = React.useState("lab");
  const [error, setError] = React.useState();

  const usenavigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // }
    if (true) {
      const payload = {
        email: username,
        password,
        role,
      };

      // Perform further actions with the payload (e.g., send it to an API endpoint)
      console.log("payload", payload);
      // addOrEdit(payload, resetForm);

      try {
        await axios
          .post(`${API_URL}/users/login`, payload)
          .then((res) => {
            if(res.data.role === "lab"){
                usenavigate('/lab');
            }
            else if(res.data.role === "doctor"){
                usenavigate('/doctor');
            }
            else if(res.data.role === "admin"){
                usenavigate('/admin')
            }
            else{
                window.alert("Invalid credentials")
            }
          });
      } catch (error) {
        console.log("An error occurred:", error);
      }
    }
  };

  return (
    <div className="login">
      <FormGroup className="form">
        <h3 className="title">LOGIN</h3>

        <InputGroup className="input">
          <InputGroupText className="icon">
            <PeopleIcon />
          </InputGroupText>
          <Input
            type="select"
            value={role}
            placeholder="Select Your Role"
            onChange={(e) => {
              setRole(e.target.value);
            }}
            className="input-type role"
          >
            <option value="lab">Lab</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
          </Input>
        </InputGroup>

        <InputGroup className="input">
          <InputGroupText className="icon">
            <PersonIcon />
          </InputGroupText>
          <Input
            type="text"
            value={username}
            placeholder="Enter Your Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="input-type"
          >
            Username
          </Input>
        </InputGroup>

        <InputGroup className="input">
          <InputGroupText className="icon">
            <VpnKeyIcon />
          </InputGroupText>
          <Input
            type="password"
            value={password}
            placeholder="Enter Your Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="input-type"
          >
            Password
          </Input>
        </InputGroup>
        <Button className="btn" onClick={handleSubmit}>
            LOGIN
        </Button>
      </FormGroup>
    </div>
  );
};

export default Login;
