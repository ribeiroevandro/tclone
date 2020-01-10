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

export default function Tweet() {
  return (
    <Container>
      <Author>Evandro Ribeiro</Author>
      <Content>Teste</Content>
      <Button onPress={() => {}}>
        <ButtonIcon>
          <Ionicons name="ios-heart-empty" size={20} color={COLORS.LIKE} />
        </ButtonIcon>
        <ButtonText>5</ButtonText>
      </Button>
    </Container>
  );
}
