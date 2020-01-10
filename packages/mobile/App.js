import React from 'react';
import { StatusBar } from 'react-native';

import { COLORS } from '~/constants';
import createRootNavigator from '~/routes';

export default function App() {
  const Routes = createRootNavigator();

  return (
    <>
      <StatusBar
        backgroundColor={COLORS.BACKGROUND_COLOR}
        translucent
        barStyle="light-content"
      />
      <Routes />
    </>
  );
}
