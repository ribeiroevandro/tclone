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

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: COLORS.TWITTER,
  size: 'large',
})``;

export const NodataContainer = styled(LoadingContainer)``;

export const NodataText = styled.Text`
  color: ${COLORS.TWITTER};
  font-weight: bold;
  font-size: 20px;
`;
