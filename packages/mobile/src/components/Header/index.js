import React from 'react';
import { AsyncStorage } from 'react-native';
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from '@expo/vector-icons';

import { COLORS } from '~/constants';

import {
  Container,
  Bar,
  ActionsContainer,
  Actions,
  TitleText,
  TitleContainer,
} from './styles';

export default function Header({ title, navigation }) {
  const {
    state: { routeName },
  } = navigation;

  async function handleLogout() {
    return await AsyncStorage.clear().then(() => navigation.navigate('SignIn'));
  }

  return (
    <Container>
      <Bar>
        <ActionsContainer>
          {routeName === 'Home' ? (
            <Actions onPress={() => navigation.navigate('New')}>
              <MaterialIcons
                name="add-circle-outline"
                size={25}
                color={COLORS.WHITE}
              />
            </Actions>
          ) : (
            <Actions onPress={() => navigation.goBack()}>
              <Ionicons name="ios-arrow-back" size={25} color={COLORS.WHITE} />
            </Actions>
          )}
        </ActionsContainer>
        <TitleContainer>
          <TitleText>{title}</TitleText>
        </TitleContainer>
        <ActionsContainer>
          <Actions onPress={handleLogout}>
            <MaterialCommunityIcons
              name="logout-variant"
              size={25}
              color={COLORS.WHITE}
            />
          </Actions>
        </ActionsContainer>
      </Bar>
    </Container>
  );
}
