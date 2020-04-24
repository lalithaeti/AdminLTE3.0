import React from 'react'
import { Input, InputGroup, Button } from 'reactstrap';
import './Login.css'
import {Redirect} from 'react-router-dom'
const LOGIN = require('../Server/loginadmin.json');
// console.log(LOGIN)

export default class Login extends React.Component {
    constructor(props) {
        let documentData = JSON.parse(localStorage.getItem('token'));
        super(props);
        this.state = {
            emailId: '',
            password: '',
            log:LOGIN["userData"],
            loggedIn: documentData ? true : false
        }
        this.emailId = this.emailId.bind(this);
        this.password = this.password.bind(this);
        this.login = this.login.bind(this);
    }
    emailId(event) {
        this.setState({ emailId: event.target.value })
    }
    password(event) {
        this.setState({ password: event.target.value })
    }
    login(event) {
        event.preventDefault();
        localStorage.setItem('login',JSON.stringify(this.state));
        const {emailId,password,log}=this.state;
        if(emailId===(log.emailId) && password==="password"){
            localStorage.setItem('token', JSON.stringify(LOGIN['jwtToken']));
            this.setState({
                loggedIn:true
            })
        }else{
            alert("Incorrect emailId (or) Password")
        }
    }
    render() {
        console.log(this.state.log)
        if (this.state.loggedIn) {
            return <Redirect to="/home" />
        }
        return (  
                <div className="center">
                    <div className="card elevation-3">
                        <div><img className="logo elevation-3" alt="DataFoundry Logo" src="/logodf.png" /></div>
                        <div className="card-header"> <h2>Login</h2></div>
                        <div className="box">
                            <div className="input-group">
                                <InputGroup className="mb-3">
                                    <Input type="email" onChange={this.emailId} placeholder="Enter EmailId" />
                                </InputGroup>
                            </div>
                            <div className="input-group">
                                <InputGroup className="mb-3">
                                    <Input type="password" onChange={this.password} placeholder="Enter Password" />
                                </InputGroup>
                            </div>
                            <Button className="btn btn-success" onClick={this.login}>Login</Button>
                        </div>
                    </div>
                </div>
        )
    }
}
