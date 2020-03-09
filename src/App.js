import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import MainContainer from "./components/MainContainer";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainContainer />
      </Provider>
    );
  }
}

export default App;
