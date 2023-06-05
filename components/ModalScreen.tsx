// ModalScreen.tsx
import React, { FC } from "react";
import { FlatList, Text, View, StyleSheet, Pressable, Modal } from "react-native";
import myArray from "../data/myArray";

interface ModalScreenProps {
  title: string;
  onPress:any;
}

interface Item {
  id: string;
  title: string;
}

const ModalScreen: FC<ModalScreenProps> = ({ title, onPress }) => {
  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );

  const closeModal = () => {
   onPress();
  };

  return (
    <View style={styles.container}>
      <View style={styles.modalHeader}>
        <Text style={styles.modalTitle}>{title}</Text>
        <Pressable onPress={closeModal} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close</Text>
        </Pressable>
      </View>
      <FlatList data={myArray} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  container: {
    flex: 1,
    marginTop: 30,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  closeButton: {
    backgroundColor: "#5151c4",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    textAlign: "center",
  },
});

export default ModalScreen;
