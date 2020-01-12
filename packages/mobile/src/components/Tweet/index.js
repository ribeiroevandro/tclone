import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { api } from '@tclone/services';

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
  async function handleLike() {
    const { _id } = tweets;
    await api.post(`likes/${_id}`);
  }

  return (
    <Container>
      <Author>{tweets.author}</Author>
      <Content>{tweets.content}</Content>
      <Button onPress={handleLike}>
        <ButtonIcon>
          <Ionicons name="ios-heart-empty" size={20} color={COLORS.LIKE} />
        </ButtonIcon>
        <ButtonText>{tweets.likes}</ButtonText>
      </Button>
    </Container>
  );
}
