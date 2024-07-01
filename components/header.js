import { StyleSheet, Text, View } from "react-native";

export default function Header(){
    return (
            <View style={styles.container}>
                <Text style={styles.text}>NOTED</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
       height:40,
        backgroundColor:"#62F85F",
       
    },
    text:{
      margin:"auto",
        fontSize: 32,
        color:"#ffffff"
    }
})