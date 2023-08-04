import { View, Text, StyleSheet } from "react-native";
import AdditionalInfoItem from "./AdditionalInfoItem";

const AdditionalInfoItems = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <AdditionalInfoItem icon="droplet" label="Humidity" value="71%" />
        <AdditionalInfoItem icon="wind" label="Wind Speed" value="17 km/h" />
        <AdditionalInfoItem icon="umbrella" label="Pressure" value="1008 hPa" />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <AdditionalInfoItem icon="sunrise" label="Sunrise" value="05:19" />
        <AdditionalInfoItem icon="sunset" label="Sunset" value="20:54" />
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
