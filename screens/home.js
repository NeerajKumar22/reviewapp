import React, { useState } from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  FlatList, 
  TouchableOpacity, 
  Modal, 
  TouchableWithoutFeedback, 
  Keyboard 
} from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";

import Card from "../shared/card";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
//  const pressHandler = () => {
//    navigation.navigate("ReviewDetails");
//  }
  const [ modalOpen, setModalOpen ] = useState(false);
  const [ reviews, setReviews ] = useState([
    {title: "title one", rating: 5, body: "body of first title", key: "1"},
    {title: "title two", rating: 4, body: "body of second title", key: "2"},
    {title: "title third", rating: 1, body: "body of third title", key: "3"},
    {title: "title forth", rating: 3, body: "body of forth title", key: "4"},
    {title: "title fifth", rating: 2, body: "body of fifth title", key: "5"}
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [ review, ...currentReviews ]
    });
    setModalOpen(false);
  };

  return(
    <View style={globalStyles.container}>
      {/*<Text style={globalStyles.titleText}>Hello from home</Text>
      <Button title="go to review dets" onPress={pressHandler} />*/}
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
          <View style={styles.modalContant}>
            <MaterialIcons 
              name="close"
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons 
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
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

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center"
  },
  modalClose: {
    marginTop: 30,
    marginBottom: 0,
  },
  modalContant: {
    flex: 1,
  }
})
