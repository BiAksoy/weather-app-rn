import { View, Text, StyleSheet } from "react-native";
import AdditionalInfoItem from "./AdditionalInfoItem";
import moment from "moment";

const AdditionalInfoItems = ({ weatherData }) => {
  const { main } = weatherData.list[0];
  const { humidity, pressure } = main;
  const { speed } = weatherData.list[0].wind;
  const { sunrise, sunset } = weatherData.city;

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <AdditionalInfoItem
          icon="droplet"
          label="Humidity"
          value={`${humidity}%`}
        />
        <AdditionalInfoItem
          icon="wind"
          label="Wind Speed"
          value={`${Math.round(speed)} km/h`}
        />
        <AdditionalInfoItem
          icon="umbrella"
          label="Pressure"
          value={`${pressure} hPa`}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <AdditionalInfoItem
          icon="sunrise"
          label="Sunrise"
          value={moment.unix(sunrise).format("HH:mm")}
        />
        <AdditionalInfoItem
          icon="sunset"
          label="Sunset"
          value={moment.unix(sunset).format("HH:mm")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop: 16,
  },
});

export default AdditionalInfoItems;
