import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetails ({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  }
  return (
    <View style={globalStyles.container}>
      <Card>
        {/*<Button title="back to home screen" onPress={pressHandler} /> */}
        <Text>{ navigation.getParam("title") }</Text>
        <Text>{ navigation.getParam("body") }</Text>
        <Text>{ navigation.getParam("rating") }</Text>
      </Card>
    </View>
  )
}

