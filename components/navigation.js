import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './pages/home.component';
import { DetailsScreen } from './pages/details.component';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';

const { Navigator, Screen } = createBottomTabNavigator();
// const { Navigator, Screen } = createStackNavigator();

const PersonIcon = (props) => (
  <Icon {...props} name='home-outline'/>
);

const BookIcon = (props) => (
  <Icon {...props} name='book-open-outline'/>
);


const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab icon={PersonIcon} title='HOME'/>
    <BottomNavigationTab icon={BookIcon} title='DETALHE'/>
  </BottomNavigation>
);


export const AppNavigator = () => (
  <NavigationContainer>
      {/* <Navigator headerMode='none' > */}
      <Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Screen name='Home' component={HomeScreen}/>
        <Screen name='Details' component={DetailsScreen}/>
      </Navigator>
  </NavigationContainer>
);
