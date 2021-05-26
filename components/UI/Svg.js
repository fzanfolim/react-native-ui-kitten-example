import React from 'react';
import { View } from 'react-native';

import * as svg from '../assets/image';


export default (props) => {
    
    const SvgComponent = svg[props.name];
    
    return (
        <View style={props.style}>
          <SvgComponent width='100%' height='100%' />
        </View>
      );
}   

