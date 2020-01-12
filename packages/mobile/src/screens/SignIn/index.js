import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Input from '~/components/Input';

import { COLORS } from '~/constants';

import {
  Container,
  Content,
  IconContainer,
  Button,
  ButtonText,
} from './styles';

export default function SignIn({ navigation }) {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);

    setTimeout(async () => {
      await AsyncStorage.setItem('@TClone:userName', `${user}`);
      navigation.navigate('Home');
      setLoading(false);
    }, 3000);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1 }}
    >
      <Container>
        <Content>
          <IconContainer>
            <FontAwesome name="twitter" size={64} color={COLORS.WHITE} />
          </IconContainer>
          <Input
            value={user}
            onChangeText={text => setUser(text)}
            label="Username"
            placeholder="Informe o Username"
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            colors={COLORS.WHITE}
            isMultiline={false}
          />
          <Button onPress={handleLogin}>
            {loading ? (
              <ActivityIndicator size="small" color={COLORS.TWITTER} />
            ) : (
              <ButtonText>Entrar</ButtonText>
            )}
          </Button>
        </Content>
      </Container>
    </KeyboardAvoidingView>
  );
}

SignIn.navigationOptions = {
  header: null,
};
