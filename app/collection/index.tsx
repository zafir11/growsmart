import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Link, router, useRouter } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Collection() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  // Dummy data for plants
  const plants = [
    { id: 1, name: 'Monstera', image: 'https://www.marthastewart.com/thmb/-5Nx4-_mbzpZFjOO81BfHtm-yqs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/monstera-deliciosa-or-swiss-cheese-plant-in-a-white-flower-pot-stands-on-a-white-wood-table-1333227721-3ea9525b85474fdda7b6857a248c7c2b.jpg' },
    { id: 2, name: 'Fiddle Leaf Fig', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKiC8XDVXkoc_BNndKeDgYsyk314_Q1zwsZQ&s' },
    { id: 3, name: 'Snake Plant', image: 'https://i0.wp.com/plant.pk/wp-content/uploads/2023/12/snake.webp?fit=800%2C800&ssl=1' },
  ];

  // Function to handle search bar input
  const onChangeSearch = (query: string) => setSearchQuery(query);

  // Filtered plants based on search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handlePress =(plantID:number) => {
    router.push(`/collection/${plantID}`);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Searchbar
            placeholder="Search plants"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.searchbar}
          />
          <Text style={styles.title}>My Collection</Text>
          <ScrollView contentContainerStyle={styles.scrollView}>
            {filteredPlants.map((plant) => (
           
                <TouchableOpacity key={plant.id} onPress={()=> handlePress(plant.id)} style={styles.card}>
                  <Image source={{ uri: plant.image }} style={styles.image} />
                  <Text style={styles.text}>{plant.name}</Text>
                </TouchableOpacity>
             
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '3%',
    flex: 1,
    backgroundColor: '#fff',
  },
  searchbar: {
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: '90%',
    marginVertical: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});