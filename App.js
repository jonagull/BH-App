import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useFetchSaunaData } from "./useFetchSaunaData";
import { Theme } from "./theme";

export default function App() {
  const saunaData = useFetchSaunaData();

  return (
    <View style={styles.container}>
      <View>
        <Image source={require("./assets/owl.png")} style={styles.owlIcon} />
      </View>
      <View style={styles.widgetContainer}>
        <Text style={styles.textApply}>
          Temperature: {saunaData[0] && saunaData[0].temperature}
        </Text>
        <Text style={styles.textApply}>
          Humidity: {saunaData[0] && saunaData[0].humidity}
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primarycolor.$backgroundColor,
    color: Theme.primarycolor.$primaryFillColor,
    alignItems: "center",
    justifyContent: "center",
  },

  owlIcon: {
    height: 120,
    width: 100,
    marginBottom: 10,
  },

  widgetContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 300,
    borderRadius: 20,
    backgroundColor: Theme.primarycolor.$widgetColor,
    textAlign: "left",
  },

  textApply: {
    color: Theme.primarycolor.$primaryFillColor,
    fontWeight: "bold",
    fontSize: 0,
    textAlign: "left",
    marginBottom: 10,
  },
});
