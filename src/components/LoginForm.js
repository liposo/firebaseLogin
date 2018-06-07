import React, { Component } from "react";
import { View, Text } from "react-native";
import { CardSection, Card, Button } from "./common";

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection />
        <CardSection />
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
