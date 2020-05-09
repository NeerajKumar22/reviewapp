import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return(
    <View style={StyleSheet.container}>
      <Text>Hello from home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  }
})

