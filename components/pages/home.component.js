import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Header } from '../UI';
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
      
      <Header />
      {/* <Layout style={styles.layout}>
      <Text category='h1'>HOME</Text>
      <Button onPress={navigateDetails}>Detalhe</Button>
      </Layout> */}
     
     {/* <News /> */}
     <Layout style={styles.container}>

      <Layout style={styles.layout} level='1'>
      <Text
            style={styles.title}
            category='h3'>
                Checklist
        </Text>  
      </Layout>

      <Layout style={styles.layout} level='1'>
        <Text>3</Text>
      </Layout>

      <Layout style={styles.layout} level='1'>
        <Text>2</Text>
      </Layout>

      <Layout style={styles.layout} level='1'>
        <Text>1</Text>
      </Layout>

</Layout>


    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//     layout:{ flex: 1, justifyContent: 'center', alignItems: 'center' }
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  layout: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding:5,
    paddingLeft:15
  },
  title: {
    
  }
});
