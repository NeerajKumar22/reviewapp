import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";

import { globalStyles } from "../styles/global.js";

export default function ReviewForm({ addReview }){
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput 
              style={globalStyles.input}
              placeholder="Review Title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
            />
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review Body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
            />
            <TextInput 
              style={globalStyles.input}
              placeholder="Review Rating (1-5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
            />
            <Button
              title="Submit"
              color="red"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  )
}
