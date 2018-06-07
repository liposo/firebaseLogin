import React, { Component } from "react";
import { TextInput } from "react-native";
import { CardSection, Card, Button } from "./common";

class LoginForm extends Component {
  // Create state for the component
  state = {
    text: ""
  };

  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            underlineColorAndroid="transparent"
            style={{ flexGrow: 1, height: 40 }}
            onChangeText={text => this.setState({ text })}
          />
        </CardSection>
        <CardSection />
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
