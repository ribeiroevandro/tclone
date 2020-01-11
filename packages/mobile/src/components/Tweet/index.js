import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { COLORS } from '~/constants';

import {
  Container,
  Author,
  Content,
  Button,
  ButtonIcon,
  ButtonText,
} from './styles';

export default function Tweet({ tweets }) {
  return (
    <Container>
      <Author>{tweets.author}</Author>
      <Content>{tweets.content}</Content>
      <Button onPress={() => {}}>
        <ButtonIcon>
          <Ionicons name="ios-heart-empty" size={20} color={COLORS.LIKE} />
        </ButtonIcon>
        <ButtonText>{tweets.likes}</ButtonText>
      </Button>
    </Container>
  );
}
