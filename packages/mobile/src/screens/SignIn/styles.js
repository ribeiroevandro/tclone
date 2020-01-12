import styled from 'styled-components/native';

import { COLORS } from '~/constants';

export const Container = styled.View`
  flex: 1;
  background: ${COLORS.TWITTER};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const IconContainer = styled.View`
  margin-bottom: 50px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: 44px;
  align-self: stretch;
  margin-top: 10px;
  background-color: ${COLORS.WHITE};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${COLORS.TWITTER};
  font-size: 16px;
  font-weight: bold;
`;
