import React from 'react';
import { Component } from 'react';
var LOGIN_INFO = require('./Components/Server/login.json');

class Login extends Component{
    documentData;
    constructor(props) {
        super(props);
        let documentData = JSON.parse(localStorage.getItem('Auth'));
        this.state = {
            emailId: "",
            password: "",
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
      const { emailId, password } = this.state;

      if (emailId === LOGIN_INFO.userData.emailId  && password === LOGIN_INFO.userData.clientId ) {
          localStorage.setItem('Auth', JSON.stringify(LOGIN_INFO['jwtToken']));
          
          this.setState({
              loggedIn: true
          })
        
      }else {
          this.setState({
              emailId: '',
              password: ''
          })
          alert("incorrect email or password")
      
       }
  }
    render(){

        if (this.state.loggedIn) {
            window.location.href="/dashboard";
        }
        const { classes } = this.props;
        return (
        <div className="material-login">
        <div className="limiter">
  <div className="container-login100">
    <div className="wrap-login100">
      <div className="login100-form-title" style={{backgroundImage: 'url(assets/Login/bg-01.jpg)'}}>
        <span className="login100-form-title-1">
          Sign In
        </span>
      </div>
      <form className="login100-form validate-form">
        <div className="wrap-input100 validate-input m-b-26" data-validate="Username is required">
          <span className="label-input100">Email</span>
          <input className="input100" type="text" name="email" placeholder="Enter email" onChange={this.emailId} />
          <span className="focus-input100" />
        </div>
        <div className="wrap-input100 validate-input m-b-18" data-validate="Password is required">
          <span className="label-input100">Password</span>
          <input className="input100" type="password" name="pass" placeholder="Enter password" onChange={this.password} />
          <span className="focus-input100" />
        </div>
        <div className="flex-sb-m w-full p-b-30">
          <div className="contact100-form-checkbox">
            <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
            <label className="label-checkbox100" htmlFor="ckb1">
              Remember me
            </label>
          </div>
          <div className="forgot">
            <a href="/forgotpassword" className="txt1">
              Forgot Password?
            </a>
            <div className="register">
            <a href="/register" className="txt1">
              Register a new membership
            </a>
            </div>
          </div>
        </div>
        <div className="container-login100-form-btn">
          <button className="login100-form-btn" type="submit" onClick={this.login}>
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
)
}
}

export default Login;
