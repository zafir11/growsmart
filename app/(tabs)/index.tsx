import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherApp: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Weather App</Text>
            <Text style={styles.subtitle}>Your city's weather at a glance</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
    },
});

export default WeatherApp;