import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utils/weatherType";

const CurrentWeatherCard = ({ weatherData }) => {
  const { main, weather } = weatherData.list[0];
  const { temp } = main;
  const { description } = weather[0];
  const { name } = weatherData.city;

  return (
    <View style={styles.container}>
      <Text style={styles.locationText}>{name}</Text>
      <Text style={styles.temperatureText}>{Math.round(temp)}°C</Text>
      <Feather
        style={styles.weatherIcon}
        name={weatherType[weather[0].main].icon}
        size={64}
        color="black"
      />
      <Text style={styles.descriptionText}>{description}</Text>
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
