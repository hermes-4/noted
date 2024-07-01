import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function New() {
  const [text, setText] = useState(``);
  // const [focus, setFocus] = useState(false)
  const handleNewText = ({ value }) => {
    setText(`${value}`);
    console.log(text)
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.titleView}>
        {/* <Text style={styles.titleText}>Title</Text> */}
        {/* <TextInput
          placeholder="Enter the title of your text"
          /> */}
        {/* </View>
        <View style={styles.noteView}> */}
        <TextInput
          // style={styles.textInput}
          //value={text}
          onChangeText={(input)=>handleNewText(input)}
          // style={{ fontSize: 48 }}
          //onFocus={()=>setFocus(true)}
          multiline
          placeholder="Enter your note here..."
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: "#f4f3f3",
    width: "80%",
    height: 400,
    marginHorizontal: "auto",
    marginTop: 35,
  },
  titleView: {
    marginTop: 20,
    marginHorizontal: 15,
    borderRadius: 3,
  },
  titleText: {
    marginHorizontal: 10,
    paddingTop: 5,
  },
  noteView: {
    backgroundColor: "d3d3d3",
    marginHorizontal: 5,
    marginVertical: 15,
    height: 70,
    width: 100,
  },
  textInput: {
    marginTop: 30,
    marginLeft: 20,
    height: 85,
    width: 100,
    fontStyle: "italic",
    border: 2,
  },
});
