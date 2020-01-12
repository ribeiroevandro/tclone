import styled from 'styled-components/native';

import { COLORS } from '~/constants';

export const Container = styled.View`
  width: 100%;
  margin: 0 0 15px;
`;

export const FieldContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const FieldBorder = styled.View`
  width: 100%;
  height: 2px;
  background-color: ${({ colors }) => colors};
`;

export const Field = styled.TextInput`
  flex: 1;
  padding: 10px;
  font-size: 18px;
  color: ${({ colors }) => colors};
  ${({ isMultiline }) => (isMultiline ? 'height: 150px' : '')};
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  padding: 5px 0;
  color: ${({ colors }) => colors};
`;

export const IconContainer = styled.View`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;
