import React, { Component } from "react";
import { View } from "react-native";

import firebase from "firebase";

import { Header } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  initializeFirebase() {
    var config = require("./config/firebase");
    firebase.initializeApp(config);
  }

  componentWillMount() {
    this.initializeFirebase();
  }
  render() {
    return (
      <View style={{ justifyContent: "center" }}>
        <Header headerText="Firebase Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
