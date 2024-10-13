import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from "react-native";
import LottieView from "lottie-react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Link } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function index() {
  const [text, setText] = useState({
    username: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.animationStyle}>
              <LottieView
                source={require("@/assets/animations/welcome.json")}
                autoPlay
                loop
                style={styles.lottie}
              />
            </View>
            <View style={styles.bottomView}>
              <Text style={styles.title}>GROWSMART</Text>
              <View style={styles.inputWrapper}>
                <View style={styles.inputContainer}>
                  <Icon name="user" size={20} color="#16423C" style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Username"
                    placeholderTextColor="#6A9C89"
                    value={text.username}
                    onChangeText={(value) => setText({ ...text, username: value })}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Icon name="lock" size={20} color="#16423C" style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    placeholderTextColor="#6A9C89"
                    value={text.password}
                    secureTextEntry={!passwordVisible}
                    onChangeText={(value) => setText({ ...text, password: value })}
                  />
                  <TouchableOpacity
                    onPress={() => setPasswordVisible(!passwordVisible)}
                  >
                    <Icon
                      name={passwordVisible ? "eye" : "eye-slash"}
                      size={20}
                      color="#16423C"
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <Link href={"/(tabs)"} asChild>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
              </Link>
              <Text style={styles.signUpText}>
                Don't have an account?{" "}
                <Link
                  href={"/register"}
                  style={styles.signUpLink}
                >
                  SignUp
                </Link>
              </Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  lottie: {
    height: height * 0.4,
    width: width * 0.8,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  animationStyle: {
    flex: 1,
    alignItems: "center",
  },
  bottomView: {
    flex: 2,
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
    width: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopColor: "#C4DAD2",
    backgroundColor: "#E9EFEC",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontWeight: "900",
    fontSize: 30,
    color: "#16423C",
  },
  inputWrapper: {
    marginTop: 60,
    width: "100%",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "#fff",
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 8,
    width: "90%",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    height: 40,
    flex: 1,
  },
  btn: {
    marginTop: 60,
    backgroundColor: "#16423C",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  signUpText: {
    color: "#6A9C89",
    marginTop: 2,
  },
  signUpLink: {
    textDecorationLine: "underline",
    fontWeight: "900",
    color: "#16423C",
  },
});