import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function About () {
  return (
    <View style={StyleSheet.container}>
      <Text>Hello from Text</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  }
});

