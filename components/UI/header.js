import React from 'react';
import { ImageBackground} from 'react-native';
import { 
    Icon,
    Text, 
    Layout,
    TopNavigation, 
    Avatar,
    TopNavigationAction } from '@ui-kitten/components';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

export default ({ navigation }) => {

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    
  );
  const Profile = () => (
    <Avatar 
    source={require('../assets/image/perfil.webp')}
    size='giant'
    ImageComponent={ImageBackground}
  />
  )
  return (
    
        <TopNavigation
            title={() => <Text category='h5' appearance='hint'>Olá,Felipe Zanfolim</Text>}
            accessoryLeft={Profile}
        /> 
   

      
  );
};

