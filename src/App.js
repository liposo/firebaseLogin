import React, { Component } from "react";
import { View, Text } from "react-native";

import firebase from "firebase";
import config from "./config/firebaseAPIKey";

import {
  Header,
  Button,
  Card,
  CardSection,
  Spinner
} from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = {
    loggedIn: null,
    user: null
  };

  componentWillMount() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      user
        ? this.setState({ loggedIn: true, user: firebase.auth().currentUser })
        : this.setState({ loggedIn: false, user: null });
    });
  }

  onButtonPress() {
    firebase.auth().signOut();
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
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
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <Card>
            <CardSection>
              <Spinner size="large" />
            </CardSection>
          </Card>
        );
    }
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
