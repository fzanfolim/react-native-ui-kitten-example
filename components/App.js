

import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, TopNavigation } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme } from './theme.json';
import { AppNavigator } from './navigation';


const strictTheme = { ['text-font-family']: 'OpenSans' };
const customMapping = { strict: strictTheme };

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }} customMapping={customMapping}>
    {/* <TopNavigation title='Simple Checklist' alignment='center'/> */}
      <AppNavigator/>
    </ApplicationProvider>
  </>
);
