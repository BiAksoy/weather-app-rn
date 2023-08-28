import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const HourlyForecastItem = (props) => {
  const { time, icon, temp } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{time}</Text>
      <Feather style={styles.icon} name={icon} size={32} color="black" />
      <Text style={styles.temp}>{temp}°C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 16,
    marginHorizontal: 4,
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: "#f2f2f2",
  },
  time: {
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    marginTop: 10,
  },
  temp: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default HourlyForecastItem;
