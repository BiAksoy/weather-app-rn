import { View, StyleSheet, FlatList } from "react-native";
import HourlyForecastItem from "./HourlyForecastItem";
import { weatherType } from "../utils/weatherType";
import moment from "moment/moment";

const HourlyForecastItems = ({ weatherData }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={weatherData.list.slice(0, 7)}
        keyExtractor={(item) => item.dt.toString()}
        renderItem={({ item }) => {
          return (
            <HourlyForecastItem
              time={moment
                .unix(item.dt)
                .utc()
                .add(weatherData.city.timezone, "s")
                .format("HH")}
              icon={weatherType[item.weather[0].main].icon}
              temp={Math.round(item.main.temp)}
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
