// 'use strict';
//
// import React from 'react';
//
// export default class SignIn extends React.Component {
//
// }
// //   render() {
// //     return (
// //       <div>
// //         <div className="container">
// //           <div className="row">
// //             <div className="col-md-6 col-md-offset-3">
// //               <div className="panel panel-login">
// // 					<div className="panel-heading">
// // 						<div className="row">
// // 							<div className="col-xs-6">
// // 								<a href="#" className="active" id="login-form-link">Login</a>
// // 							</div>
// // 							<div className="col-xs-6">
// // 								<a href="#" id="register-form-link">Register</a>
// // 							</div>
// // 						</div>
// // 						<hr />
// // 					</div>
// // 					<div className="panel-body">
// // 						<div className="row">
// // 							<div className="col-lg-12">
// // 								<form id="login-form" action="http://phpoll.com/login/process" method="post" role="form">
// // 									<div className="form-group">
// // 										<input type="text" name="username" id="username" tabIndex="1" className="form-control" placeholder="Username" value="" />
// // 									</div>
// // 									<div className="form-group">
// // 										<input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password" />
// // 									</div>
// // 									<div className="form-group text-center">
// // 										<input type="checkbox" tabIndex="3" className="" name="remember" id="remember" />
// // 										<label> Remember Me</label>
// // 									</div>
// // 									<div className="form-group">
// // 										<div className="row">
// // 											<div className="col-sm-6 col-sm-offset-3">
// // 												<input type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" value="Log In" />
// // 											</div>
// // 										</div>
// // 									</div>
// // 									<div className="form-group">
// // 										<div className="row">
// // 											<div className="col-lg-12">
// // 												<div className="text-center">
// // 													<a href="http://phpoll.com/recover" tabIndex="5" className="forgot-password">Forgot Password?</a>
// // 												</div>
// // 											</div>
// // 										</div>
// // 									</div>
// // 								</form>
// // 								<form id="register-form" action="http://phpoll.com/register/process" method="post" role="form">
// // 									<div className="form-group">
// // 										<input type="text" name="username" id="username" tabIndex="1" className="form-control" placeholder="Username" value="" />
// // 									</div>
// // 									<div className="form-group">
// // 										<input type="email" name="email" id="email" tabIndex="1" className="form-control" placeholder="Email Address" value="" />
// // 									</div>
// // 									<div className="form-group">
// // 										<input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password" />
// // 									</div>
// // 									<div className="form-group">
// // 										<input type="password" name="confirm-password" id="confirm-password" tabIndex="2" className="form-control" placeholder="Confirm Password" />
// // 									</div>
// // 									<div className="form-group">
// // 										<div className="row">
// // 											<div className="col-sm-6 col-sm-offset-3">
// // 												<input type="submit" name="register-submit" id="register-submit" tabIndex="4" className="form-control btn btn-register" value="Register Now" />
// // 											</div>
// // 										</div>
// // 									</div>
// // 								</form>
// // 							</div>
// // 						</div>
// // 					</div>
// // 				</div>
// // 			</div>
// // 		</div>
// //   </div>
// // </div>
// //     )
// //   }
// // }
//
//
//
// //
// // import React from 'react';
// // import 'whatwg-fetch';
// //
// // export default class SignIn extends React.Component {
// //   constructor() {
// //     super();
// //     this.handleSubmit = this.handleSubmit.bind(this);
// //   }
// //
// //   signIn(data) {
// //     fetch('/api/sign-in', {
// //       method: "POST",
// //       body: JSON.stringify(data),
// //       headers: {
// //         "Content-Type": "application/json"
// //       },
// //     }).then(function(response) {
// //       response.status
// //       response.statusText
// //       response.headers
// //       response.url
// //       return response.text()
// //     }, function(error) {
// //       error.message
// //     })
// //   }
// //
// //   handleSubmit(event) {
// //     event.preventDefault();
// //     const form = document.forms.signIn;
// //     const email = form.email.value;
// //     const password = form.password.value;
// //
// //     this.signIn({
// //       credentials: {
// //         email: email,
// //         password: password
// //       }
// //     });
// //   }
// //
// //   render() {
// //     return (
// //       <div className="wrapper">
// //         <form className="form-signin snippet-form" name="signIn" onSubmit={this.handleSubmit}>
// //           <h2 className="form-signin-heading">Sign-In</h2>
// //           <input type="text" className="form-control" name="email" placeholder="Email Address" />
// //           <input type="password" className="form-control" name="password" placeholder="Password"  />
// //           <button className="btn btn-sm btn-primary btn-block login-button " type="submit">Login</button>
// //         </form>
// //       </div>
// //     )
// //   }
// // }
