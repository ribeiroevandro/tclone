import React, { useEffect, useState, useMemo } from 'react';
import { AsyncStorage } from 'react-native';
import socket from 'socket.io-client';
import { api } from '@tclone/services';

import { MaterialIcons } from '@expo/vector-icons';

import { COLORS } from '~/constants';
import Tweet from '~/components/Tweet';

import { Container, Tweets, Button, ButtonIcon } from './styles';

export default function Home({ navigation }) {
  const [tweets, setTweets] = useState([]);
  const io = useMemo(
    () => socket('https://f770f4b1.ngrok.io', { forceNew: true }),
    []
  );

  async function handleLogout() {
    await AsyncStorage.clear();
    return navigation.navigate('SignIn');
  }

  function subscribeToEvents() {
    io.on('tweet', data => {
      setTweets({ tweets: [data, ...tweets] });
    });
  }

  async function getTweets() {
    const response = await api.get('tweets');
    setTweets(response.data);
  }

  useEffect(() => {
    subscribeToEvents();
    getTweets();
  }, []);

  return (
    <Container>
      {console.log('teste', tweets)}
      <Tweets
        data={tweets}
        keyExtractor={tweet => String(tweet._id)}
        renderItem={({ item }) => <Tweet tweets={item} />}
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
