import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '~/screens/Home';
import SignIn from '~/screens/SignIn';

const createRootNavigator = (userExists = false) =>
  createAppContainer(
    createStackNavigator(
      {
        Home,
        SignIn,
      },
      {
        initialRouteName: userExists ? 'Home' : 'SignIn',
      }
    )
  );

export default createRootNavigator;
