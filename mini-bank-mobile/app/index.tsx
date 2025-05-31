import { Href, Redirect } from "expo-router";
import React, { useEffect } from "react";
import { View } from "react-native";

export default function Index() {
  useEffect(() => {}, []);
  return (
    <View>
      <Redirect href={"/(auth)" as Href} />
    </View>
  );
}
