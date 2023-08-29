import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CurrentWeatherCard from "../components/CurrentWeatherCard";
import HourlyForecastHeaderText from "../components/HourlyForecastHeaderText";
import HourlyForecastItems from "../components/HourlyForecastItems";
import AdditionalInfoHeaderText from "../components/AdditionalInfoHeaderText";
import AdditionalInfoItems from "../components/AdditionalInfoItems";

const WeatherPage = ({
  weatherData,
  fetchWeatherByCurrentLocation,
  fetchWeatherBySearchedLocation,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header handleRefresh={fetchWeatherByCurrentLocation} />
        <SearchBar onSearch={fetchWeatherBySearchedLocation} />
        <CurrentWeatherCard weatherData={weatherData} />
        <HourlyForecastHeaderText />
        <HourlyForecastItems weatherData={weatherData} />
        <AdditionalInfoHeaderText />
        <AdditionalInfoItems weatherData={weatherData} />
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
