import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { skiaImageCache } from "./assets/graphics/skia-images";
import ButtonBackground from "./src/components/button/button-background/button-background";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [randomValue, setRandomValue] = useState(0);

  useEffect(() => {
    const buildCache = async () => {
      await skiaImageCache.generateCache();
      setIsLoading(false);
    };

    buildCache();
  }, []);

  const handleSetRandomValue = () => {
    setRandomValue(Math.random());
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSetRandomValue}
          >
            <Text>Regenerate button background</Text>
          </TouchableOpacity>
          <ButtonBackground
            key={randomValue + 2}
            height={40}
            width={200}
            sideWidth={25}
            tint="#000"
          />
          <ButtonBackground
            key={randomValue + 3}
            height={40}
            width={200}
            sideWidth={25}
            tint="#000"
          />
          <ButtonBackground
            key={randomValue + 4}
            height={40}
            width={200}
            sideWidth={25}
            tint="#000"
          />
          <ButtonBackground
            key={randomValue + 5}
            height={40}
            width={200}
            sideWidth={25}
            tint="#000"
          />
          <ButtonBackground
            key={randomValue + 6}
            height={40}
            width={200}
            sideWidth={25}
            tint="#000"
          />
        </>
      )}

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
  button: {
    padding: 10,
    backgroundColor: "blueviolet",
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 20,
  },
});
