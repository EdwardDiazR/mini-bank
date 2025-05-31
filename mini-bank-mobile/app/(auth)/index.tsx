import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ActivityIndicator, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function Login() {
  const insets = useSafeAreaInsets();

  const [isLogging, setIsLogging] = useState<boolean>(false);

  const login = () => {
    setIsLogging(!isLogging);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? insets.top : 0,
        paddingHorizontal: 10,
        backgroundColor: "#b71bbc",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          position: "absolute",
          top: insets.top,
          justifyContent: "center",
          alignItems: "center",
          left: 0,
          right: 0,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            elevation: 1,
            width: 100,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
            height: 100,
          }}
        >
          <MaterialCommunityIcons name={"bank"} size={40} />
        </View>
      </View>
      <Text style={styles.headerText}>Iniciar sesion</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Usuario o cédula"
          style={styles.inputField}
          placeholderTextColor={"gray"}
          editable={!isLogging}
        />
        <TextInput
          placeholder="Contraseña"
          style={styles.inputField}
          placeholderTextColor={"gray"}
          editable={!isLogging}
        />
      </View>

      {Platform.OS === "ios" && <Text>Apple</Text>}
      {Platform.OS === "android" && <Text>Google </Text>}

      <Pressable
        style={styles.loginBtn}
        onPress={login}
        // disabled={isLogging}
      >
        {!isLogging ? <Text style={styles.loginBtnText}>Iniciar sesion</Text> : <ActivityIndicator color={"white"} />}
      </Pressable>
      <View>
        <Text>Recordarme</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },

  inputContainer: {
    gap: 5,
  },
  inputField: {
    backgroundColor: "lightgray",
    borderRadius: 10,
    padding: 5,
    color: "black",
    height: 40,
  },
  loginBtn: {
    backgroundColor: Colors.lightBlue,
    borderRadius: 20,
    elevation: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    height: 35,
    marginTop: 8,
  },
  loginBtnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
