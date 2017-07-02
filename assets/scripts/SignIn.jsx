// 'use strict';
//
// import React from 'react';
// import 'whatwg-fetch';
//
// export default class SignIn extends React.Component {
//   constructor() {
//     super();
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   signIn(data) {
//     fetch('/api/sign-in', {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json"
//       },
//     }).then(function(response) {
//       response.status
//       response.statusText
//       response.headers
//       response.url
//       return response.text()
//     }, function(error) {
//       error.message
//     })
//   }
//
//   handleSubmit(event) {
//     event.preventDefault();
//     const form = document.forms.signIn;
//     const email = form.email.value;
//     const password = form.password.value;
//
//     this.signIn({
//       credentials: {
//         email: email,
//         password: password
//       }
//     });
//   }
//
//   render() {
//     return (
//       <div className="wrapper">
//         <form className="form-signin snippet-form" name="signIn" onSubmit={this.handleSubmit}>
//           <h2 className="form-signin-heading">Sign-In</h2>
//           <input type="text" className="form-control" name="email" placeholder="Email Address" />
//           <input type="password" className="form-control" name="password" placeholder="Password"  />
//           <button className="btn btn-sm btn-primary btn-block login-button " type="submit">Login</button>
//         </form>
//       </div>
//     )
//   }
// }
