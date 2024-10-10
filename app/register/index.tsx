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
          <Text style={{ fontWeight: "900", fontSize: 30, color: "#16423C" }}>
            Register
          </Text>
          <View style={{ marginTop: 60, width: "100%", alignItems: "center" }}>
            <View style={styles.inputContainer}>
              <Icon name="address-book" size={20} color="#16423C" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Enter Name"
                value={text}
                onChangeText={(value) => setText(value)}
              />
            </View>
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
              <Icon name="address-card" size={20} color="#16423C" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Enter Company(optional)"
                value={text}
                onChangeText={(value) => setText(value)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="envelope" size={20} color="#16423C" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Enter Email"
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
              <Text style={styles.btnText}>Register</Text>
            </TouchableOpacity>
          </Link>
          <Text style={{color:'#6A9C89', marginTop:2}}>Aready have a account? <Link href='/' style={{textDecorationLine:'underline',fontWeight:'900'}}>SignIn</Link></Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: "#ffff",
  },
  bottomView: {
    flex: 1,
    alignItems: "center",
    padding: 50,
    width: "100%",
    height: "90%",
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
    marginTop: 120,
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