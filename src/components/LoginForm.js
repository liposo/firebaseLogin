import React, { Component } from "react";
import { Text } from "react-native";
import firebase from "firebase";
import { CardSection, Card, Button, Input, Spinner } from "./common";

class LoginForm extends Component {
  // Create state for the component
  state = {
    email: "",
    password: "",
    error: "",
    loading: false
  };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: "", loading: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  updateUserInfo() {
    let username = this.state.email.substring(0, this.state.email.indexOf("@"));
    let user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: username
      })
      .then(
        function() {
          let displayName = user.displayName;
        },
        function(error) {
          console.log(error);
        }
      );
  }

  onLoginFail() {
    this.setState({ error: "Authentication Failed.", loading: false });
  }

  onLoginSuccess() {
    this.updateUserInfo();
    this.setState({
      email: "",
      password: "",
      error: "",
      loading: false
    });
  }

  renderButtom() {
    return this.state.loading ? (
      <Spinner size="large" />
    ) : (
      <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@mail.com"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="**********"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            secureTextEntry
          />
        </CardSection>
        <Text style={styles.errorText}>{this.state.error}</Text>
        <CardSection>{this.renderButtom()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorText: {
    fontSize: 20,
    color: "red",
    alignSelf: "center"
  }
};

export default LoginForm;
