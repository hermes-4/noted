import { useState } from "react";
import { TextInput,View,Text, StyleSheet } from "react-native";

export default function Create(){
    const [text, setText] = useState('')

    const changeText = ()=>{
        setText(text)
    }
    return(
        <View>
            <View>
                <Text>
                Top
                </Text>
            </View>
            <View>
                <View 
                // style={styles.input}
                >
                    <Text>Title</Text>
                    <TextInput 
                    multiline
                    value={text}
                    placeholder="Create a new note"
                    onChangeText={changeText}
                    />
                </View>
            </View>
        </View>
    );
}


// const styles = StyleSheet.create({
//  input: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });