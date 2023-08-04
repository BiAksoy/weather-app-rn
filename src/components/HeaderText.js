import { Text, StyleSheet } from "react-native";

const HeaderText = () => {
  return <Text style={styles.text}>Weather App</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 32,
  },
});

export default HeaderText;
