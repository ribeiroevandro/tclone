import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import { COLORS } from '~/constants';

import { Container, Tweets, Button, ButtonIcon } from './styles';

const Mock = [];

export default function Home() {
  return (
    <Container>
      <Tweets
        data={Mock}
        keyExtractor={tweet => String(tweet)}
        renderItem={({ item }) => <Tweet data={item} />}
      />
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
});
