import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
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
      <TouchableOpacity
        onPress={() => onSubmit(title, content)}
        style={styles.addblogpostbtn}
      >
        <Text style={styles.addblogpostbtntext}>Add Blog Post</Text>
      </TouchableOpacity>
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
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

export default BlogPostForm;
