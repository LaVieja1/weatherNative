import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Se siente como 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>Alta: 8</Text>
          <Text style={styles.highLow}>Baja: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Esta soleado</Text>
        <Text style={styles.message}>Perfecto para una remera</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 20,
  },
});

export default CurrentWeather;