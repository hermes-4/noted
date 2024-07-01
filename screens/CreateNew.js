import { TextInput, View, Text, StyleSheet } from "react-native";
import Header from "../components/header";
import New from "../components/newNote";

export default function Create() {
  
  return (
    <View>
      <View>
        <Header />
      </View>

      <View>
        <View>
          <Text style={styles.title}>Create A New Note</Text>
        </View>
      </View>
      <View>
        <New />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginVertical:'auto',
    marginHorizontal: "auto",
    marginTop: 20,
  },
});
