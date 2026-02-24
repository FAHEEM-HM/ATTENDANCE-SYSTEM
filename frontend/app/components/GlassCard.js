import React from "react";
import { View, StyleSheet } from "react-native";

export default function GlassCard({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 20,
    padding: 24,
    width: "100%",
    maxWidth: 420,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
});
