import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "./src/components/button/button";
import { useState } from "react";

export default function App() {
  const [randomValue, setRandomValue] = useState(0);

  const handleSetRandomValue = () => {
    setRandomValue(Math.random());
  };

  return (
    <View style={styles.container}>
      <Text>Random value: {randomValue}</Text>
      <Button
        key={randomValue + 1}
        label="Button example 1"
        onPress={handleSetRandomValue}
      />
      <Button
        key={randomValue + 2}
        label="Button example 2"
        onPress={handleSetRandomValue}
      />
      <Button
        key={randomValue + 3}
        label="Button example 3"
        onPress={handleSetRandomValue}
      />
      <Button
        key={randomValue + 4}
        label="Button example 4"
        onPress={handleSetRandomValue}
      />
      <Button
        key={randomValue + 5}
        label="Button example 5"
        onPress={handleSetRandomValue}
      />
      <Button
        key={randomValue + 6}
        label="Button example 6"
        onPress={handleSetRandomValue}
      />
      <Button
        key={randomValue + 7}
        label="Button example 7"
        onPress={handleSetRandomValue}
      />
      <Button
        key={randomValue + 8}
        label="Button example 8"
        onPress={handleSetRandomValue}
      />
      <Button
        key={randomValue + 9}
        label="Button example 9"
        onPress={handleSetRandomValue}
      />
      <Button
        key={randomValue + 10}
        label="Button example 10"
        onPress={handleSetRandomValue}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
