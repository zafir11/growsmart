import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
  const [userInfo, setUserInfo] = useState({
    name:  '',
    username: '',
    email: '',
    company: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setUserInfo({ ...userInfo, [field]: value });
  };

  const handleSave = () => {
    // Handle save logic here
    console.log('User info saved:', userInfo);
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log('User logged out');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Name"
            value={userInfo.name}
            onChangeText={(value) => handleInputChange('name', value)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Username"
            value={userInfo.username}
            onChangeText={(value) => handleInputChange('username', value)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            value={userInfo.email}
            onChangeText={(value) => handleInputChange('email', value)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Company</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Company"
            value={userInfo.company}
            onChangeText={(value) => handleInputChange('company', value)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flexGrow: 1,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#16423C',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#16423C',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '55%',
  },
  button: {
    flex: 1,
    backgroundColor: '#16423C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  logoutButton: {
    backgroundColor: '#d9534f',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});