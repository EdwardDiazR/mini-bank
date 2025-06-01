import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AccountHeader = ({ accountNumber }: { accountNumber: string }) => {
  const insets = useSafeAreaInsets();
  console.log(insets.top);

  return (
    <View
      style={{
        backgroundColor: "#3E7B27",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: insets.top - 10,
        height: 85,
      }}
    >
      <MaterialCommunityIcons
        name="arrow-left"
        color={"white"}
        size={35}
        style={{
          position: "absolute",
          left: 14,
          top: Platform.OS === "ios" ? 47 : 24,
        }}
      />
      <Text style={{ textAlign: "center", fontFamily: "PoppinsSemiBold", color: "white", fontSize: 18 }}>
        Cuenta de ahorro
      </Text>
    </View>
  );
};

export default AccountHeader;

const styles = StyleSheet.create({});
