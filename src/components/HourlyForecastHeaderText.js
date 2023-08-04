import { Text, StyleSheet } from "react-native";

const HourlyForecastHeaderText = () => {
  return <Text style={styles.text}>Hourly Forecast</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 16,
  },
});

export default HourlyForecastHeaderText;
