import NavBar from "./navbar";
import { connect } from "react-redux";
import * as SessionActions from "../../actions/session_actions";

const mapStateToProps = state => {
  return {
    loggedIn: state.session.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(SessionActions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);