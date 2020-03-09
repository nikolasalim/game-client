import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SignupForm />
      </Provider>
    );
  }
}

export default App;
