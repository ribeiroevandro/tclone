import React from 'react';

import { COLORS } from '~/constants';

import { Container, FieldContainer, Field, Label, FieldBorder } from './styles';

export default function Input(props) {
  const { label } = props;
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <FieldContainer>
        <Field {...props} placeholderTextColor={COLORS.TWITTER} />
      </FieldContainer>
      <FieldBorder />
    </Container>
  );
}
