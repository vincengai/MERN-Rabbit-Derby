import { connect } from "react-redux";
import * as SessionActions from "../../actions/session_actions";
import * as LoginForm from "./login_form";

const mapStateToProps = state => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(SessionActions.login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);