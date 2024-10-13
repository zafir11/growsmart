import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Link } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function index() {
  const [text, setText] = useState("");
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.bottomView}>
              <Text style={styles.title}>Register</Text>
              <View style={styles.inputWrapper}>
                <View style={styles.inputContainer}>
                  <Icon name="address-book" size={20} color="#16423C" style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Name"
                    placeholderTextColor="#6A9C89"
                    value={text}
                    onChangeText={(value) => setText(value)}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Icon name="user" size={20} color="#16423C" style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Username"
                    placeholderTextColor="#6A9C89"
                    value={text}
                    onChangeText={(value) => setText(value)}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Icon name="address-card" size={20} color="#16423C" style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Company(optional)"
                    placeholderTextColor="#6A9C89"
                    value={text}
                    onChangeText={(value) => setText(value)}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Icon name="envelope" size={20} color="#16423C" style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    placeholderTextColor="#6A9C89"
                    value={text}
                    onChangeText={(value) => setText(value)}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Icon name="lock" size={20} color="#16423C" style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    placeholderTextColor="#6A9C89"
                    value={text}
                    onChangeText={(value) => setText(value)}
                  />
                </View>
              </View>
              <Link href={"/(tabs)"} asChild>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>Register</Text>
                </TouchableOpacity>
              </Link>
              <Text style={styles.signInText}>
                Already have an account?{" "}
                <Link href="/" style={styles.signInLink}>
                  SignIn
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
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  bottomView: {
    flex: 1,
    alignItems: "center",
    padding: 20,
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
    marginTop: '95%',
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
  signInText: {
    color: "#6A9C89",
    marginTop: 2,
  },
  signInLink: {
    textDecorationLine: "underline",
    fontWeight: "900",
    color: "#16423C",
  },
});