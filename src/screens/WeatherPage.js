import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import HeaderText from "../components/HeaderText";
import SearchBar from "../components/SearchBar";
import CurrentWeatherCard from "../components/CurrentWeatherCard";
import HourlyForecastHeaderText from "../components/HourlyForecastHeaderText";
import HourlyForecastItems from "../components/HourlyForecastItems";
import AdditionalInfoHeaderText from "../components/AdditionalInfoHeaderText";
import AdditionalInfoItems from "../components/AdditionalInfoItems";

const WeatherPage = ({ weatherData }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderText />
        <SearchBar />
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
