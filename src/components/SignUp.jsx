import React from 'react';
import { Link } from 'react-router-dom';

export default class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordToggle = this.handlePasswordToggle.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPwd = document.getElementById('password__again');

    // error messages constant variables
    const firstnameErrMsg = document.getElementById('firstname__err');
    const lastnameErrMsg = document.getElementById('lastname__err');
    const emailErrMsg = document.getElementById('email__err');
    const pwdErrMsg = document.getElementById('password__err');
    const confirmPwdMsg = document.getElementById('confirmPwd__err');

    if (firstname.value === '') {
      firstnameErrMsg.innerText = 'firstname cannot be blank';
    }
    if (firstname.value.length <= 2) {
      firstnameErrMsg.innerText = 'Please provide a valid name';
    }
    if (lastname.value === '') {
      lastnameErrMsg.innerText = 'lastname cannot be blank';
    }
    if (lastname.value.length <= 2) {
      lastnameErrMsg.innerText = 'Please provide a valid lastname!';
    }
    if (email.value === '' || !email.value.includes('@')) {
      emailErrMsg.innerText = 'Please provide a valid email address!';
    }
    if (password.value === '') {
      pwdErrMsg.innerText = 'Please enter a password';
    }
    if (confirmPwd.value !== password.value) {
      confirmPwdMsg.innerText = 'Passwords do not match.';
    }
    if (password.value <= 6) {
      pwdErrMsg.innerText = 'Password should be greater than 6 characters.';
    }
    if (!password.value.includes('#', '$', '*', '%')) {
      pwdErrMsg.innerText = 'Password must contain at least one of these special characters #,$,*,%';
    }
    // alert('signup successful');
  }

  // this `method` enables the user to see their passwords
  handlePasswordToggle() {
    const pwdField = document.getElementById('password');

    if (pwdField.type === 'password') {
      pwdField.type = 'text';
    } else {
      pwdField.type = 'password';
    }
  }

  render() {
    const { firstname, lastname, email, password, confirmPassword } = this.state;

    return (
      <div className="base__signup flex__content__center">
        <div className="index"></div>
        <form action="" className="signup mt-4 ml" onSubmit={this.handleSubmit}>
          <h2 className="form__intro">Sign Up here</h2>
          <div className="form__group flex__content__center signup__flex">
            <div className="firstname">
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
                className="form__control"
                value={firstname}
                onChange={this.handleChange}
              />
              <p id="firstname__err"></p>
            </div>
            <div className="lastname">
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                className="form__control"
                value={lastname}
                onChange={this.handleChange}
              />
              <p id="lastname__err"></p>
            </div>
          </div>
          <div className="email form__group">
            <label>Email</label>
            <div className="email__field">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="please enter your email address"
                className="form__control"
                onChange={this.handleChange}
                value={email}
              />
              <p id="email__err"></p>
            </div>
          </div>
          <div className="password form__group">
            <label>Password</label>
            <div className="password__field">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="enter a password of your choice."
                className="form__control"
                onChange={this.handleChange}
                value={password}
              />
              <span id="password__toggle" toggle="#password" onClick={this.handlePasswordToggle}>
                <i className="fas fa-eye-slash"></i>
              </span>
            </div>
            <p id="password__err"></p>
          </div>
          <div className="password__again form__group">
            <label>Confrim Password</label>
            <div className="password__field">
              <input
                type="password"
                name="confirmPassword"
                id="password__again"
                placeholder="confirm your password"
                className="form__control"
                onChange={this.handleChange}
                value={confirmPassword}
              />
              <div id="confirmPwd__err"></div>
            </div>
          </div>
          <div className="btn__group">
            <button className="btn signup__btn btn__primary">Sign up</button>
          </div>
          <p className="mt login__text">
            Have an account already?{' '}
            <Link to="/login" className="link__text__primary">
              login
            </Link>
          </p>
        </form>
      </div>
    );
  }
}
