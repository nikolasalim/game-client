import React from "react";

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Login:</h3>
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

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
