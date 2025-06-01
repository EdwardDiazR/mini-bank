import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { formatCurrency, getSupportedCurrencies } from "react-native-format-currency";

type BalanceProps = {
  balance: number;
  currency: string;
};

export const BalanceCard = (props: BalanceProps) => {
  const currencyCodes = getSupportedCurrencies();

  const formattedBalance = formatCurrency({ amount: 1030.2, code: "USD" });
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 2, alignSelf: "center", alignItems: "center" }}>
        <Pressable
          delayLongPress={300}
          onLongPress={() => {
            Alert.alert("Copiada");
          }}
        >
          <Text style={{ textAlign: "center", color: "white", fontFamily: "PoppinsMedium", fontSize: 17 }}>880808</Text>
        </Pressable>

        <MaterialCommunityIcons name="content-copy" size={16} color={"white"} onPress={() => {}} />
      </View>
      <Text style={styles.balanceText}>{formattedBalance}</Text>
    </View>
  );
};

const borderBottomValue = 20;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3E7B27",
    elevation: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomEndRadius: borderBottomValue,
    borderBottomStartRadius: borderBottomValue,
    paddingBottom: 20,
    paddingTop: 10,
  },
  balanceText: {
    color: "white",
    fontSize: 30,
    fontFamily: "PoppinsMedium",
  },
});
