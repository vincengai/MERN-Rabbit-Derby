import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    // this.logoutUser = this.logoutUser.bind(this);
    // this.getLinks = this.getLinks.bind(this);
  }



  // getLinks() {
  //   if (this.props.loggedIn) {
  //     return (
  //       <div>
  //         <button onClick={ this.logoutUser }>Logout</button>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <Link to="/signup">Sign Up</Link>
  //         <Link to="/login">Log In</Link>
  //       </div>
  //     );
  //   }
  // }

  render() {
    return (
      // <div>
      // currentUser = { this.props.currentUser } logout = {
      //   this.props.logout
      //   { this.getLinks() }
      // </div>
      <div>
        <div className="header">
      {
        this.props.loggedIn ? (
          <Dropdown />
        ) : (
            <div className='top-buttons'>
              <button className="btn login" onClick={() => this.props.openModal('login')}>Log in</button>
              <button className="btn signup" onClick={() => this.props.openModal('signup')}>Sign Up</button>
            </div>
          )
      }
      {/* <div className="temp"></div> */}
        </div>
        </div >

    );
  }
};

export default NavBar;