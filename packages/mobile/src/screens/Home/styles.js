import styled from 'styled-components/native';

import { COLORS } from '~/constants';

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.BACKGROUND};
`;

export const Tweets = styled.FlatList``;

export const Button = styled.TouchableOpacity``;

export const ButtonIcon = styled.View`
  margin-right: 20px;
`;
