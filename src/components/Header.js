import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const Header = ({ handleRefresh }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Weather App</Text>
      <TouchableOpacity onPress={handleRefresh}>
        <Feather
          style={{ alignSelf: "center" }}
          name="refresh-cw"
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 32,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
});

export default Header;
