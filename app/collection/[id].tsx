import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function PlantDetail( ) {
const { id } = useLocalSearchParams();
  return (
    <ScrollView style={styles.container}>

      {/* Plant Image */}
      <Image source={{ uri: 'https://www.marthastewart.com/thmb/-5Nx4-_mbzpZFjOO81BfHtm-yqs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/monstera-deliciosa-or-swiss-cheese-plant-in-a-white-flower-pot-stands-on-a-white-wood-table-1333227721-3ea9525b85474fdda7b6857a248c7c2b.jpg' }} style={styles.image} />

      {/* Plant Name */}
      <Text style={styles.title}>{'Monstera'}</Text>

      {/* Placeholder Author */}
      <Text style={styles.author}>Botanical Name: Example Author</Text>

      {/* Plant Description */}
      <Text style={styles.description}>
        This is a sample description of the plant. It can be filled with detailed information about the plant's care, growth patterns, and other interesting facts about the species.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  author: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#444',
    lineHeight: 22,
  },
});
