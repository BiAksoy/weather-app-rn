import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Search Location" />
      <TouchableOpacity style={styles.searchButton}>
        <Feather name="search" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderBottomWidth: 1,
    fontSize: 16,
  },
  searchButton: {
    alignSelf: "center",
  },
});

export default SearchBar;
