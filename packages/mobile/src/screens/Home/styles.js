import styled from 'styled-components/native';

import { COLORS } from '~/constants';

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.BACKGROUND_COLOR};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${COLORS.TEXT_COLOR};
  font-size: 70px;
  font-weight: bold;
`;

export const Description = styled(Title)`
  font-size: 50px;
`;

export const LinkContainer = styled.View`
  margin-top: 20px;
  align-items: center;
`;

export const Link = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px 40px 20px;
  justify-content: center;
  align-items: center;
`;

export const LinkText = styled(Title)`
  font-size: 15px;
  font-weight: normal;
  margin-left: 10px;
`;
