import React from "react";
import SignupFormContainer from "./SignupFormContainer";
import LoginFormContainer from "./LoginFormContainer";

class StartScreen extends React.Component {
  render() {
    return (
      <div>
        <h1>The Game</h1>
        <SignupFormContainer />
        <LoginFormContainer />
      </div>
    );
  }
}

export default StartScreen;
