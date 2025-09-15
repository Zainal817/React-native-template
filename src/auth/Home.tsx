import React from "react";
import { View } from "react-native";
import { Text, Button, useTheme } from "react-native-paper";

export default function Home({ navigation }) {
  const { colors } = useTheme();

  const handleLogout = () => {
    // Navigate back to Login
    navigation.replace("Login");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: colors.background,
      }}
    >
      <Text variant="headlineMedium" style={{ color: colors.primary, marginBottom: 20 }}>
        Welcome Home!
      </Text>

      <Button mode="contained" onPress={handleLogout}>
        Logout
      </Button>
    </View>
  );
}
