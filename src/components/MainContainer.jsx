import React from "react";
import StartScreen from "./StartScreen";
import Lobby from "./Lobby";

class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <StartScreen />
        <Lobby />
      </div>
    );
  }
}

export default MainContainer;
