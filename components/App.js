

import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, TopNavigation } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme } from './theme.json';
import { AppNavigator } from './navigation';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
    {/* <TopNavigation title='Simple Checklist' alignment='center'/> */}
      <AppNavigator/>
    </ApplicationProvider>
  </>
);
