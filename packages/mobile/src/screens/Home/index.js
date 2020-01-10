import React from 'react';
import { Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import {
  Container,
  Title,
  Description,
  LinkContainer,
  Link,
  LinkText,
} from './styles';

export default function Home() {
  function hadleGithub() {
    Linking.openURL('https://github.com/ribeiroevandro/extboilerplate');
  }
  return (
    <Container>
      <Title>Expo</Title>
      <Description>Template Base</Description>
      <LinkContainer>
        <LinkText>Veja mais em:</LinkText>
        <Link onPress={hadleGithub}>
          <AntDesign name="github" size={25} color="#fff" />
          <LinkText>/ribeiroevandro/extboilerplate</LinkText>
        </Link>
      </LinkContainer>
    </Container>
  );
}

Home.navigationOptions = {
  header: null,
};
