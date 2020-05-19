import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordToggle = this.handlePasswordToggle.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('email');
    const pwd = document.getElementById('password');

    // these constants would hold the error messages when the data entered in any of the input fields are not valid.
    const emailErrMsg = document.getElementById('email__err');
    const pwdErrMsg = document.getElementById('password__err');

    if (email.value === '') {
      emailErrMsg.innerText = 'email cannot be blank!';
    }
    if (!email.value.includes('@')) {
      emailErrMsg.innerHTML = 'Please provide a valid email!';
    }
    if (pwd.value.length <= 6) {
      pwdErrMsg.innerText = 'password should be greater than six characters';
    }
    if (pwd.value === '') {
      pwdErrMsg.innerText = 'password cannot be blank';
    }
    if (!pwd.value.includes('#', '$', '*', '%')) {
      pwdErrMsg.innerText = 'password must include one of these special characters, #,$,*,%';
    }
    // alert('Login successful!');
  }

  // this method toggles th password's state.
  handlePasswordToggle() {
    const pwdField = document.getElementById('password');

    if (pwdField.type === 'password') {
        pwdField.type = 'text'
    } else {
        pwdField.type = 'password'
    }
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="base__login mt-6 ml-5">
        <h2 className="form__intro">Login</h2>
        <form action="" className="login" onSubmit={this.handleSubmit}>
          <div className="username form__group">
            <label>Email</label>
            <div className="email__field">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={this.handleChange}
                placeholder="enter your email address"
                className="form__control"
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
                value={password}
                onChange={this.handleChange}
                placeholder="enter your password please"
                className="form__control"
              />
               <span id="password__toggle" toggle="#password" onClick={this.handlePasswordToggle}>
                <i className="fas fa-eye-slash"></i>
              </span>
              <p id="password__err"></p>
            </div>
          </div>
          <div className="btn__group">
            <button className="btn login__btn btn__primary">login</button>
          </div>
          <p className="mt signup__text">
            Don't have an account?{' '}
            <Link to="/signup" className="link__text__primary">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    );
  }
}
