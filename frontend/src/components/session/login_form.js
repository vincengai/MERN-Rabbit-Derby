import React from "react";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return event => {
      this.setState({
        [field]: event.currentTarget.value
      });
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <div>
            <input
              type="text"
              value={ this.state.username }
              onChange={ this.update("username") }
              placeholder="Username" />
            <br />
            <input
              type="password"
              value={ this.state.password }
              onChange={ this.update("password") }
              placeholder="Password" />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
};

export default withRouter(LoginForm);