import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView } from 'react-native';
import Calender from './src/Calender.js'

export default function App() {
  return (
    <ScrollView >
      <Calender/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
