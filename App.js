import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Create from './screens/CreateNew';

export default function App() {
  return (
    <SafeAreaView 
    // style={styles.container}
    >
      <Create/>
      <StatusBar style="auto" />
      </SafeAreaView> 
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
