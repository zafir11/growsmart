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
import Icon from "react-native-vector-icons/FontAwesome";
import { Link } from "expo-router";

export default function index() {
  const [text, setText] = useState("");
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.bottomView}>
          <Text style={{ fontWeight: "900", fontSize: 30, color: "#16423C" ,marginBottom:150}}>
            GROWSMART
          </Text>
          
          <Link href={"/login"} asChild>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
          </Link>
          <Link href={"/register"} asChild>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Register</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: "#E9EFEC",
  },
  bottomView: {
    flex: 1,
    alignItems: "center",
    justifyContent:'center',
    padding: 50,

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
    marginTop: 30,
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