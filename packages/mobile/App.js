import React, { useState, useEffect } from 'react';
import { StatusBar, AsyncStorage } from 'react-native';

import createRootNavigator from '~/routes';

export default function App() {
  const [userExists, setUserExists] = useState(false);
  const [userChecked, setUserChecked] = useState(false);

  async function checkUser() {
    const isUser = await AsyncStorage.getItem('@TClone:userName');

    return isUser !== null;
  }

  useEffect(() => {
    checkUser().then(response => {
      setUserExists(response);
      setUserChecked(true);
    });
  }, []);

  if (!userChecked) return null;

  const Routes = createRootNavigator(userExists);

  return (
    <>
      <StatusBar backgroundColor="#fff" translucent barStyle="light-content" />
      <Routes />
    </>
  );
}
