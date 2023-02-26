import React from "react";
import { Input, FormGroup, InputGroup, InputGroupText, Button } from "reactstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PersonIcon from '@mui/icons-material/Person';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PeopleIcon from '@mui/icons-material/People';

import './Login.scss';

const Login = () => {
    return(
    <div className="login">
        {/* <div className="form">
            <h3 className="title">Login</h3>
            <input type="button" value="" />
        </div> */}
        <FormGroup className="form">
            <h3 className="title">LOGIN</h3>

            <InputGroup className="input">
                <InputGroupText className="icon">
                    <PeopleIcon/>
                </InputGroupText>
                <Input
                    type="select"
                    // value="role"
                    placeholder="Select Your Role"
                    onChange={()=>{}}
                    className="input-type role"
                >
                    <option value="lab">Lab</option>
                    <option value="doctor">Doctor</option>
                    <option value="admin">Admin</option>
                </Input>
            </InputGroup>

            <InputGroup className="input">
                <InputGroupText className="icon">
                    {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
                    <PersonIcon/>
                </InputGroupText>
                <Input
                    type="text"
                    // value="username"
                    placeholder="Enter Your Username"
                    onChange={()=>{}}
                    className="input-type"
                >
                    {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
                    Username
                </Input>
            </InputGroup>

            <InputGroup className="input">
                <InputGroupText className="icon">
                    <VpnKeyIcon/>
                </InputGroupText>
                <Input
                    type="password"
                    // value="password"
                    placeholder="Enter Your Password"
                    onChange={()=>{}}
                    className="input-type"
                >
                    Password
                </Input>
            </InputGroup>

            <Button className="btn">
                LOGIN
            </Button>
        </FormGroup>
    </div>
    )
}

export default Login;