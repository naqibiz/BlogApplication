import React, { useContext, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);
  return (
    <View>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      {/* <Button
        title="Add Blog Post"
        onPress={() => addBlogPost(title, content)}
      /> */}
      <TouchableOpacity
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate("Index");
          });
        }}
        style={styles.addblogpostbtn}
      >
        <Text style={styles.addblogpostbtntext}>Add Blog Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 15,
    margin: 10,
    padding: 5,
    // textTransform: "capitalize",
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5,
  },
  addblogpostbtn: {
    width: 130,
    paddingVertical: 10,
    alignSelf: "center",
    backgroundColor: "#C0C0C0",
  },
  addblogpostbtntext: {
    alignSelf: "center",
  },
});

export default CreateScreen;
