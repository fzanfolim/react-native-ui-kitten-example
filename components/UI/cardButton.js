import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Layout } from '@ui-kitten/components';
import { default as theme } from '../theme.json';
import { Svg } from '../../components/UI';
export default (props) => {

   

    return (
       
     <Layout style={styles.card}>
       <Svg name={props.icon}
                style={{ width: 60, height: 60, margin:20}}/> 
          <Text category='h6' appearance='alternative'>
           {props.name}
          </Text>
     </Layout>
    );
  };
  
  const styles = StyleSheet.create({
    card: {
      width:130,
      flexGrow:1,
      alignItems: 'center',
      backgroundColor: theme['color-primary-600'],
      margin:10,
      borderRadius:20,
      padding:20
      

    }
  });
