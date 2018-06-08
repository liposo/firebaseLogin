import React, { Component } from "react";
import { View } from "react-native";

import firebase from "firebase";

import { Header } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  initializeFirebase() {
    var config = {
      apiKey: "AIzaSyDi4fHL-i5apQs8FWesu64KZkB-ApFrioU",
      authDomain: "login-819e4.firebaseapp.com",
      databaseURL: "https://login-819e4.firebaseio.com",
      projectId: "login-819e4",
      storageBucket: "login-819e4.appspot.com",
      messagingSenderId: "1064614059262"
    };
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
