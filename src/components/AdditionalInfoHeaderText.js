import { Text, StyleSheet } from "react-native";

const AdditionalInfoHeaderText = () => {
  return <Text style={styles.text}>Additional Information</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 16,
  },
});

export default AdditionalInfoHeaderText;
