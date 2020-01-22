import NavBar from "./navbar";
import { connect } from "react-redux";
import { currentUser } from '../../reducers/selectors'
import * as SessionActions from "../../actions/session_actions";
import { openModal } from '../../actions/modal';

const mapStateToProps = state => {
  return {
    loggedIn: state.session.isAuthenticated,
    currentUser: state.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(SessionActions.logout()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);