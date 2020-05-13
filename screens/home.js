import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

import Card from "../shared/card";

export default function Home({ navigation }) {
//  const pressHandler = () => {
//    navigation.navigate("ReviewDetails");
//  }
  
  const [ reviews, setReviews ] = useState([
    {title: "title one", rating: 5, body: "body of first title", key: "1"},
    {title: "title two", rating: 4, body: "body of second title", key: "2"},
    {title: "title third", rating: 1, body: "body of third title", key: "3"},
    {title: "title forth", rating: 3, body: "body of forth title", key: "4"},
    {title: "title fifth", rating: 2, body: "body of fifth title", key: "5"}
  ])

  return(
    <View style={globalStyles.container}>
      {/*<Text style={globalStyles.titleText}>Hello from home</Text>
      <Button title="go to review dets" onPress={pressHandler} />*/}
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate("ReviewDetails", item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

