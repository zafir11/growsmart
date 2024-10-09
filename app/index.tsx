import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import LottieView from "lottie-react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Link } from "expo-router";

export default function index() {
  const [text, setText] = useState("");
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.animationStyle}>
          <LottieView
            source={require("@/assets/animations/welcome.json")}
            autoPlay
            loop
            style={styles.lottie}
          />
        </View>
        <View style={styles.bottomView}>
          <Text style={{ fontWeight: "900", fontSize: 30, color: "#16423C" }}>
            GROWSMART
          </Text>
          <View style={{ marginTop: 60, width: "100%", alignItems: "center" }}>
            <View style={styles.inputContainer}>
              <Icon name="user" size={20} color="#16423C" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Enter Username"
                value={text}
                onChangeText={(value) => setText(value)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="lock" size={20} color="#16423C" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Enter Password"
                value={text}
                onChangeText={(value) => setText(value)}
              />
            </View>
          </View>
          <Link href={"/(tabs)"} asChild>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
          </Link>
          <Text style={{color:'#6A9C89', marginTop:2}}>Don't have a account? <Link href='/' style={{textDecorationLine:'underline',fontWeight:'900'}}>SignUp</Link></Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 26,
    flex: 1,
    backgroundColor: "#ffff",
  },
  lottie: {
    height: 300,
    width: 300,
  },
  animationStyle: {
    flex: 1,
    alignItems: "center",
  },
  bottomView: {
    flex: 2,
    alignItems: "center",
    padding: 50,
    width: "100%",
    height: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopColor: "#C4DAD2",
    backgroundColor: "#E9EFEC",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    bottom: 0,
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
  },
  icon: {
    marginRight: 10,
  },
  input: {
    height: 40,
    flex: 1,
  },
  btn: {
    marginTop: 150,
    backgroundColor: "#16423C",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width:'95%',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});