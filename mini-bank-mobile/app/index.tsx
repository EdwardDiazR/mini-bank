import { Redirect } from "expo-router";
import React, { useEffect } from "react";
import { View } from "react-native";

export default function Index() {
  useEffect(() => {}, []);
  return (
    <View>
      <Redirect href={{pathname:"/account/[id]",params:{id:'800999665'}}} />
    </View>
  );
}
