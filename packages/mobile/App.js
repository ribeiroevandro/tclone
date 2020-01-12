import React, { useState, useEffect } from 'react';
import { StatusBar, AsyncStorage, YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?',
]);

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
