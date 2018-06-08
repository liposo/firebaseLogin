import React, { Component } from "react";
import { View, Text } from "react-native";

import firebase from "firebase";
import config from "./config/firebaseAPIKey";

import { Header, Button, Card, CardSection } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = {
    loggedIn: false,
    user: null
  };

  componentWillMount() {
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(user => {
      user
        ? this.setState({ loggedIn: true, user: firebase.auth().currentUser })
        : this.setState({ loggedIn: false, user: null });
    });
  }

  onButtonPress() {
    console.log(this.state.user);
    firebase.auth().signOut();
  }

  renderContent() {
    return this.state.loggedIn ? (
      <Card>
        <CardSection>
          <Text style={{ fontSize: 20, alignSelf: "center" }}>
            Logged user: {this.state.user.displayName}
          </Text>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Logout</Button>
        </CardSection>
      </Card>
    ) : (
      <LoginForm />
    );
  }

  render() {
    return (
      <View style={{ justifyContent: "center" }}>
        <Header headerText="Firebase Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
