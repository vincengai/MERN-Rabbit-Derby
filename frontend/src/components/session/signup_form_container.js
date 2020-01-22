import { connect } from "react-redux";
import * as SessionActions from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mapStateToProps = state => {
  return {
    signedIn: state.session.isSignedIn,
    errors: Object.values(state.errors.session)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(SessionActions.signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);