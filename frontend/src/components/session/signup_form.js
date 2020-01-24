import React from "react";
import { withRouter } from "react-router-dom";

class SignupForm extends React.Component {
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
    this.props.signup(this.state)
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
            <div className="float-container">
              <label className="float-text" htmlFor="createUsername">Username</label>            
              <input
              type="text"
              className="text-input"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
            />
            </div>
              <div className="float-container">
            <label className="float-text" htmlFor="createUsername">Password</label>
            <input
              type="password"
              className="text-input"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <button onClick={this.handleSubmit} className="submit-btn">Submit</button>
          </div>
          <div className="error">
            {this.renderErrors()}
            </div>
        </form>
      </div>
    );
  }
};

export default withRouter(SignupForm);