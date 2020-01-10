import React from 'react';
import { AsyncStorage } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { COLORS } from '~/constants';

import { Container, Tweets, Button, ButtonIcon } from './styles';

const Mock = [];

export default function Home({ navigation }) {
  async function handleLogout() {
    await AsyncStorage.clear();
    return navigation.navigate('SignIn');
  }

  return (
    <Container>
      <Tweets
        data={Mock}
        keyExtractor={tweet => String(tweet)}
        renderItem={({ item }) => <Tweet data={item} />}
      />
      <Button onPress={handleLogout}>
        <ButtonIcon>
          <MaterialIcons
            name="add-circle-outline"
            size={24}
            color={COLORS.TWITTER}
          />
        </ButtonIcon>
      </Button>
    </Container>
  );
}

Home.navigationOptions = props => ({
  title: 'Timeline',
  headerRight: (
    <Button {...props}>
      <ButtonIcon>
        <MaterialIcons
          name="add-circle-outline"
          size={24}
          color={COLORS.TWITTER}
        />
      </ButtonIcon>
    </Button>
  ),
  gesturesEnabled: false,
  headerLeft: null,
});
