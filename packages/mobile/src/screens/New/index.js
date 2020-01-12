import React, { useEffect, useState } from 'react';
import { AsyncStorage, KeyboardAvoidingView, Platform } from 'react-native';
import { api } from '@tclone/services';

import { COLORS } from '~/constants';

import Header from '~/components/Header';
import Input from '~/components/Input';

import {
  Container,
  LimitTextContainer,
  LimitText,
  Button,
  ButtonText,
} from './styles';

export default function New({ navigation }) {
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  async function handleNewTweet() {
    await api.post('tweets', { content, author });
    return navigation.navigate('Home');
  }

  async function getAuthor() {
    const response = await AsyncStorage.getItem('@TClone:userName');
    setAuthor(response);
  }

  useEffect(() => {
    getAuthor();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1, marginBottom: Platform.OS === 'android' && 100 }}
    >
      <Container>
        <Input
          value={content}
          onChangeText={text => setContent(text)}
          placeholder="O que está acontecendo"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          returnKeyType="send"
          colors={COLORS.TWITTER}
          isMultiline={true}
        />
        {content ? (
          <LimitTextContainer>
            <LimitText length={content.length}>
              {280 - content.length}
            </LimitText>
          </LimitTextContainer>
        ) : null}
        <Button
          onPress={handleNewTweet}
          length={content.length}
          disabled={content.length - 1 >= 280 ? true : false}
        >
          <ButtonText>Tweetar</ButtonText>
        </Button>
      </Container>
    </KeyboardAvoidingView>
  );
}

New.navigationOptions = props => ({
  header: <Header {...props} title="New Tweet" />,
});
