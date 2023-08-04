import WeatherPage from "./src/screens/WeatherPage";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { useGetWeather } from "./src/hooks/useGetWeather";

export default function App() {
  const [isLoading, error, weather] = useGetWeather();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return <WeatherPage weatherData={weather} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
