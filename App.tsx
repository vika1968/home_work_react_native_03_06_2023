import React from 'react';
import { View, StyleSheet } from 'react-native';
// import ButtonWithModal from './components/ButtonWithModal';
import Button from './components/Button';


const App = () => {
  return (
    <View style={styles.container}>
      {/* <ButtonWithModal title="Open Modal Window" /> */}
      <Button title  = "Press me to view the list" />    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
