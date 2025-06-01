import { BalanceCard } from "@/components/account/BalanceCard";
import AccountHeader from "@/components/utils/AccountHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AccountDetail() {
  const accountNumber = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <Stack.Screen options={{ header: () => <AccountHeader accountNumber={accountNumber.id} /> }} />

      <BalanceCard balance={20500} currency="USD" />

      {Platform.OS === "ios" && <MaterialCommunityIcons name="apple-ios" size={50} />}
      {Platform.OS === "android" && <MaterialCommunityIcons name="android" size={50} />}
    </View>
  );
}
