import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import {   
    Divider,
    Text,
    Button, 
    Layout } from '@ui-kitten/components';


export const HomeScreen = ({ navigation }) => {

    const navigateDetails = () => {
        navigation.navigate('Details');
      };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <Divider/>
      <Layout style={style.layout}>
      <Text category='h1'>HOME</Text>
      <Button onPress={navigateDetails}>Detalhe</Button>
      </Layout>
     
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
    layout:{ flex: 1, justifyContent: 'center', alignItems: 'center' }
})
