import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Header, CardButton, News } from '../UI';
import {   

    Layout } from '@ui-kitten/components';




export const HomeScreen = (props) => {
  console.log('PROPS HOME:', props)
    const navigateDetails = () => {
        props.navigation.navigate('Details');
      };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <Header />
      {/* <Layout style={styles.layout}>
      <Text category='h1'>HOME</Text>
      <Button onPress={navigateDetails}>Detalhe</Button>
      </Layout> */}
      <News />
    <Layout style={styles.container}>

      <Layout style={styles.layout} level='1'>
        
        <CardButton icon="compliant_icon" name="CheckList"/>
        <CardButton icon="compliant_icon" name="CheckList"/>
        
      </Layout>

  

      </Layout>


    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  layout: {
    flex: 1,
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
