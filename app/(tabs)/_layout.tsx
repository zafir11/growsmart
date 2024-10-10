import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import WeatherApp from '.';

const HomeRoute = () => < WeatherApp/>;

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      
      activeColor={Colors[colorScheme ?? 'light'].tint}
      inactiveColor={Colors[colorScheme ?? 'light'].tint}
      barStyle={{ backgroundColor: Colors[colorScheme ?? 'light'].background }}
    />
  );
}
