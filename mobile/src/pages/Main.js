import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Project Boiler!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Main;
