import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const CurrentWeatherCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.locationText}>London</Text>
      <Text style={styles.temperatureText}>17°C</Text>
      <Feather
        style={styles.weatherIcon}
        name="cloud"
        size={64}
        color="black"
      />
      <Text style={styles.descriptionText}>few clouds</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    margin: 16,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#f2f2f2",
  },
  locationText: {
    fontSize: 20,
  },
  temperatureText: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 10,
  },
  weatherIcon: {
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 20,
    marginTop: 10,
  },
});

export default CurrentWeatherCard;
