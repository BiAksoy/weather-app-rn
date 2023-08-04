import { View, StyleSheet, FlatList } from "react-native";
import HourlyForecastItem from "./HourlyForecastItem";

const HourlyForecastItems = () => {
  const data = [
    {
      time: "00",
      icon: "cloud",
      temp: "17°C",
    },
    {
      time: "03",
      icon: "cloud",
      temp: "17°C",
    },
    {
      time: "06",
      icon: "cloud",
      temp: "17°C",
    },
    {
      time: "09",
      icon: "cloud",
      temp: "17°C",
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.time}
        renderItem={({ item }) => {
          return (
            <HourlyForecastItem
              time={item.time}
              icon={item.icon}
              temp={item.temp}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    marginHorizontal: 8,
  },
});

export default HourlyForecastItems;
