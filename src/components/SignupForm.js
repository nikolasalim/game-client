import React from "react";

class SignupForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Sign up:</h3>
        <form onSubmit={this.props.onSubmit}>
          <input
            name="name"
            value={this.props.values.name}
            onChange={this.props.onChange}
            placeholder="name:"
          ></input>
          <input
            value={this.props.values.password}
            name="password"
            onChange={this.props.onChange}
            placeholder="password:"
          ></input>

          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}

export default SignupForm;

// <form onSubmit={this.props.onSubmit}>
//         <input
//           name="name"
//           value={this.props.values.name}
//           onChange={this.props.onChange}
//           placeholder="name:"
//         ></input>
//         <input
//           value={this.props.values.password}
//           name="password"
//           onChange={this.props.onChange}
//           placeholder="password:"
//         ></input>

//         <button type="submit">Sign up</button>
//       </form>
