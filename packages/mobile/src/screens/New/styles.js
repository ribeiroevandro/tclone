import styled from 'styled-components/native';

import { COLORS } from '~/constants';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.WHITE};
  padding: 0 20px;
`;

export const LimitTextContainer = styled.View`
  align-self: flex-end;
  padding: 10px;
`;

export const LimitText = styled.Text`
  color: ${({ length }) => (length >= 280 ? 'red' : COLORS.TWITTER)};
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: 44px;
  align-self: stretch;
  margin-top: 10px;
  background-color: ${({ length }) =>
    length - 1 >= 280 ? COLORS.LIKE : COLORS.TWITTER};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ length }) => (length - 1 >= 280 ? COLORS.LIKE : COLORS.WHITE)};
`;
