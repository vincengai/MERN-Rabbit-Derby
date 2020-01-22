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
    // console.log("FUCK");
    setTimeout(() => {
      this.props.signup(this.state)
        .then(this.props.closeModal())
    }, 100);
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
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              value={ this.state.username }
              onChange={ this.update("username") }
              placeholder="Username"
            />
            <br />
            <input
              type="password"
              value={ this.state.password }
              onChange={ this.update("password") }
              placeholder="Password"
            />
            <br />
            <input type="submit" value="Submit" />
          </div>
          { this.renderErrors() }
        </form>
      </div>
    );
  }
};

export default withRouter(SignupForm);