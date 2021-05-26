import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button,Icon,Layout, Text, ViewPager, Card } from '@ui-kitten/components';
import { default as theme } from '../theme.json';
import { color } from 'react-native-reanimated';
import { Svg } from '../../components/UI';
export default (props) => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    

    console.log('INDICE:', selectedIndex);
    console.log('PROPS:', props);

    return (
       
      <ViewPager 
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        
        <Layout style={styles.slide} level='1'>
          
          <View style={styles.tab}>
         
            <View style={styles.card}>
            
            <Text
                style={styles.textCard}
                category='h5'>
                    Inicie seu checklist, é Fácil
            </Text>  
                
            </View>
            <View style={styles.conteudo}>
                
                <Svg 
                name='compliant_icon'
                style={{ width: 150, height: 110}}
            /> 
            </View>

          </View>
       
          

        </Layout>
        <Layout
          style={styles.slide}
          level='1'>
          <Text category='h5'>ORDERS</Text>
        </Layout>
        <Layout
          style={styles.slide}
          level='1'>
          <Text category='h5'>TRANSACTIONS</Text>
        </Layout>
        
      </ViewPager>
    );
  };
  
  const styles = StyleSheet.create({
    slide: {
      display:'flex',
      height: 200,
      flexDirection: 'row',
      
     
    },
    tab:{
        flex:1,
        backgroundColor: theme['color-primary-200'],
        alignSelf: 'stretch',
        flexDirection: 'row',
        padding:20,
        margin: 20,
        borderRadius: 50,
    },
    card:{
        
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        

    }, 
    conteudo: {
        
        color:'#FFF',
        

      }
  });
