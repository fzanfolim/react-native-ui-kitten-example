import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button,Icon,Layout, Text, ViewPager, Card } from '@ui-kitten/components';
import { default as theme } from '../theme.json';


export default (props) => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    

    console.log('INDICE:', selectedIndex);
    console.log('PROPS:', props);

    return (
       
      <ViewPager
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      <Layout
        style={styles.tab}
        level='2'>
        <Text style={styles.text}category='h5'>Novidades!</Text>
        <Text >Nova versão do aplicativo ja possui preenchimento offline, busca de localização e sincronismo automatico quando estiver conectado no wifi!</Text>
      </Layout>
      <Layout
        style={styles.tab}
        level='2'>
        <Text style={styles.text}category='h5'>Novidade</Text>
      </Layout>
      <Layout
        style={styles.tab}
        level='2'>
        <Text category='h5'>Zanfo</Text>
      </Layout>
    </ViewPager>
    );
  };


  
const styles = StyleSheet.create({
  tab: {
    height: 192,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: theme['color-primary-100'],
    padding:20
  },
    text:{
      margin:10,
      color: theme['color-text-default'],
      fontWeight:'bold'
      
    }
});
