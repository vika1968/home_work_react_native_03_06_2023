// Button.tsx
import React, { FC, useState } from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import ModalScreen from "./ModalScreen";

interface ButtonProps {
  title: string;
}

const Button: FC<ButtonProps> = ({ title }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonColor, setButtonColor] = useState("");

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const changeButtonColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setButtonColor(randomColor);
  };  

  return (
    <View style={styles.container}>
      <Pressable
        onPress={openModal}
        onLongPress={changeButtonColor}
        style={[styles.button, { backgroundColor: buttonColor }]}
      >
        <Text>{title}</Text>
      </Pressable>

      <Modal visible={modalVisible} animationType="slide">
        <ModalScreen title="Press me to close the list   ----->>>>" onPress={closeModal} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#b87c7c",
    color: "white",
    width: 200,
    textAlign: "center",
    justifyContent: "center",
  },
  button: {
    padding: 10,    
  }, 
});

export default Button;
