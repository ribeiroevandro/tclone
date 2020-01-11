import styled from 'styled-components/native';

import { COLORS } from '~/constants';

export const Container = styled.View`
  padding: 20px;
`;

export const Author = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${COLORS.PRIMARY};
`;

export const Content = styled(Author)`
  font-size: 15px;
  font-weight: normal;
  line-height: 20px;
  margin: 10px 0;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
`;

export const ButtonIcon = styled.View``;

export const ButtonText = styled.Text`
  color: ${COLORS.LIKE};
  margin-left: 5px;
`;
