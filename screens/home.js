import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("ReviewDetails");
  }
  return(
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Hello from home</Text>
      <Button title="go to review dets" onPress={pressHandler} />
    </View>
  )
}

