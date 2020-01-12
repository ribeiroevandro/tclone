import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Constants from 'expo-constants';

const pad = Platform.OS === 'ios' ? `${getStatusBarHeight()}px` : '0';
const margin =
  Platform.OS === 'android' ? `${Constants.statusBarHeight}px` : '0';

import { COLORS } from '~/constants';

export const Container = styled.View`
  background-color: ${COLORS.TWITTER};
  margin-top: ${margin};
  padding-top: ${pad};
`;

export const Bar = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.TWITTER};
`;

export const TitleContainer = styled.View`
  flex: 2;
  justify-content: center;
  padding: 0 20px;
  align-items: center;
`;

export const TitleLogo = styled.Image`
  width: 150px;
  height: 40px;
`;

export const TitleText = styled.Text`
  color: ${COLORS.WHITE};
  font-size: 24px;
  font-weight: bold;
`;

export const ActionsContainer = styled.View`
  flex: 1;
  height: 50px;
`;

export const Actions = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

export const ActionsText = styled(TitleText)`
  color: ${COLORS.WHITE};
  font-size: 10px;
  font-weight: bold;
  margin-right: 5px;
`;
