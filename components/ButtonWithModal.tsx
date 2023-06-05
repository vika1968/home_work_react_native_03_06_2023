import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Modal, FlatList } from 'react-native';
import myArray  from ".././data/myArray"

interface ButtonWithModalProps {
  title: string;
}

interface Item {
  id: string;
  title: string;
}

const ButtonWithModal = ({ title }: ButtonWithModalProps) => {

  console.log('ButtonWithModal')
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonColor, setButtonColor] = useState('#b87c7c');

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

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View>
      <Pressable onPress={openModal} onLongPress={changeButtonColor} style={[styles.button, { backgroundColor: buttonColor }]}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text>Modal Content</Text>

          <Pressable onPress={closeModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close Modal Window</Text>
          </Pressable>

          <FlatList
            data={myArray}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ButtonWithModal;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#b87c7c',
  },
  closeButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#dfb5e4',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
