'use strict';

import React from 'react';

export default class SignUp extends React.Component {
  constructor(){
    super();

    this.state = {
      signInClass: "credentials-button active",
      signUpClass: "",
      showSignIn: true,
      showSignUp: false
    }

    this.handleClassChange = this.handleClassChange.bind(this);
  }

  handleClassChange(event) {
    event.preventDefault();
    if (credentialState === "signInClass") {
      this.setState({
        signInClass: "credentials-button active",
        signUpClass: "",
      });
    } else {
      this.setState({
        signInClass: "",
        signUpClass: "credentials-button active",
      });
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <a className={this.state.signInClass} href="#" type="button" onClick={this.handleClassChange}>Sign-In</a>
            </div>
            <div className="col-xs-6">
                <a className={this.state.signUpClass} href="#" type="button" onClick={this.handleClassChange}>Register</a>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <form className="form-signin snippet-form">
                <h2 className="form-signin-heading">Sign-Up</h2>
                <input type="text" className="form-control" name="credentials[email]" placeholder="Email Address" required="" />
                <input type="password" className="form-control" name="credentials[password]" placeholder="Password" required="" />
                <button className="btn btn-sm btn-primary btn-block login-button" type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


// 'use strict';
//
// import React from 'react';
//
// export default class SignUp extends React.Component {
//   render() {
//     return (
//       <div className="wrapper">
//         <form className="form-signin snippet-form">
//           <h2 className="form-signin-heading">Sign-Up</h2>
//           <input type="text" className="form-control" name="credentials[email]" placeholder="Email Address" required="" />
//           <input type="password" className="form-control" name="credentials[password]" placeholder="Password" required="" />
//           <button className="btn btn-sm btn-primary btn-block login-button" type="submit">Login</button>
//         </form>
//       </div>
//     )
//   }
// }
