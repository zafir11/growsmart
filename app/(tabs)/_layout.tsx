import React from 'react';
import { BottomNavigation } from 'react-native-paper';

import Camera from './index';
import Collection from './collection';
import Profile from './profile';

const CameraRoute = () => < Camera/>;
const CollectionRoute = () => < Collection/>;
const ProfileRoute = () => < Profile/>;

export default function TabLayout() {
  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
   
    { key: 'collection', title: 'collection', focusedIcon: 'folder' },
    { key: 'camera', title: 'camera', focusedIcon: 'camera' },
    { key: 'profile', title: 'profile', focusedIcon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    camera: CameraRoute,
    collection: CollectionRoute,
    profile: ProfileRoute,
  });

  return (
    
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor='#fff'
      labeled={false}
      activeIndicatorStyle={{ backgroundColor: '#16423C' }}
      inactiveColor='#000'
      barStyle={{ backgroundColor: '#C4DAD2'}}
    />
  );
}
