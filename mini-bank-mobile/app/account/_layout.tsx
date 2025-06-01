import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="[id]" 
      options={{ headerShown: true, headerTitle: "Cuenta" }} />
    </Stack>
  );
}
