import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import HeaderText from "../components/HeaderText";
import SearchBar from "../components/SearchBar";
import CurrentWeatherCard from "../components/CurrentWeatherCard";
import HourlyForecastHeaderText from "../components/HourlyForecastHeaderText";
import HourlyForecastItems from "../components/HourlyForecastItems";
import AdditionalInfoHeaderText from "../components/AdditionalInfoHeaderText";
import AdditionalInfoItems from "../components/AdditionalInfoItems";

const WeatherPage = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderText />
        <SearchBar />
        <CurrentWeatherCard />
        <HourlyForecastHeaderText />
        <HourlyForecastItems />
        <AdditionalInfoHeaderText />
        <AdditionalInfoItems />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WeatherPage;
