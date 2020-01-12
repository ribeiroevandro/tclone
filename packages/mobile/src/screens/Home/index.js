import React, { useEffect, useState } from 'react';
import socket from 'socket.io-client';
import { api } from '@tclone/services';

import Tweet from '~/components/Tweet';
import Header from '~/components/Header';

import {
  Container,
  Tweets,
  LoadingContainer,
  Loading,
  NodataContainer,
  NodataText,
} from './styles';

export default function Home() {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);

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
    const io = socket('https://052d8adf.ngrok.io');

    io.on('tweet', data => {
      setTweets([data, ...tweets]);
    });

    io.on('like', data => {
      setTweets(tweets.map(tweet => (tweet._id === data._id ? data : tweet)));
    });

    return () => {
      io.removeAllListeners();
    };
  }, [tweets]);

  useEffect(() => {
    setLoading(true);
    getTweets().then(() => setLoading(false));
  }, []);

  const renderTweets = () => (
    <Tweets
      data={tweets}
      keyExtractor={tweet => String(tweet._id)}
      renderItem={({ item }) => <Tweet tweets={item} />}
    />
  );

  const renderList = () =>
    tweets.length ? (
      renderTweets()
    ) : (
      <NodataContainer>
        <NodataText>Nenhum tweet encontrado!</NodataText>
      </NodataContainer>
    );

  return (
    <Container>
      {loading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        renderList()
      )}
    </Container>
  );
}

Home.navigationOptions = props => ({
  header: <Header {...props} title="Timeline" />,
  gesturesEnabled: false,
});
