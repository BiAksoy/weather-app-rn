import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const AdditionalInfoItem = (props) => {
  const { icon, label, value } = props;
  return (
    <View style={styles.container}>
      <Feather name={icon} size={32} color="black" />
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 8,
  },
  label: {
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AdditionalInfoItem;
