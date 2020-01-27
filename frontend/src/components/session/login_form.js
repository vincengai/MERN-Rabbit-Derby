import React from "react";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return event => {
      this.setState({
        [field]: event.currentTarget.value
      });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
        this.props.login(this.state)
  }

  renderErrors() {
    return (
      <ul>
        {
          this.props.errors.map((error, idx) => {
            return (
              <li key={ `error-${ idx }` }>{ error }</li>
            );
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="session-form">
          <h2 className="title">Sign in</h2>
          <div className="float-container">
            <label className="float-text" htmlFor="loginUsername">Username</label>
            <input
              id="loginUsername"
              type="text"
              className="text-input"
              value={ this.state.username }
              onChange={ this.update("username") }
              placeholder="Username" />
              </div>
          <div className="float-container">
            <label className="float-text" htmlFor="loginPassword">Password</label>
            <input
              type="password"
              value={ this.state.password }
              className="text-input"
              onChange={ this.update("password") }
              placeholder="Password" />
          </div>
            <button onClick={this.handleSubmit} className="submit-btn">Sign In </button>
          <div className="error">
            { this.renderErrors() }
          </div>
        </form>
      </div>
    );
  }
};

export default withRouter(LoginForm);