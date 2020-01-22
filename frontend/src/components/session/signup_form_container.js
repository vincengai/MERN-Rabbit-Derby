import { connect } from "react-redux";
import * as SessionActions from "../../actions/session_actions";
import SignupForm from "./signup_form";
import { closeModal } from '../../actions/modal';

const mapStateToProps = state => {
  return {
    signedIn: state.session.isSignedIn,
    errors: Object.values(state.errors.session)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(SessionActions.signup(user)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);