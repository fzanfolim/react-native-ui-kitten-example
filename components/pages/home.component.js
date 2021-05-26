import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Header, CardButton } from '../UI';
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
    <Layout style={styles.container}>

    <Layout style={styles.layout} level='1'>
      <CardButton icon="toilet_icon" name="Banheiro"/>
      <CardButton icon="compliant_icon" name="Loja"/>
      <CardButton icon="compliant_icon" name="Estacionamento"/>
      <CardButton icon="compliant_icon" name="Deck"/>
    </Layout>

    {/* <Layout style={styles.layout} level='3'>
      <Text>3</Text>
    </Layout>

    <Layout style={styles.layout} level='2'>
      <Text>2</Text>
    </Layout>

    <Layout style={styles.layout} level='1'>
      <Text>1</Text>
    </Layout> */}

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
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
