import WeatherPage from "./src/screens/WeatherPage";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { useGetWeather } from "./src/hooks/useGetWeather";

export default function App() {
  const [
    isLoading,
    error,
    weather,
    fetchWeatherByCurrentLocation,
    fetchWeatherBySearchedLocation,
  ] = useGetWeather();

  if (weather && weather.list && !isLoading) {
    return (
      <WeatherPage
        weatherData={weather}
        fetchWeatherByCurrentLocation={fetchWeatherByCurrentLocation}
        fetchWeatherBySearchedLocation={fetchWeatherBySearchedLocation}
      />
    );
  }

  return (
    <View style={styles.container}>
      {error ? (
        <Text>{error}</Text>
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
