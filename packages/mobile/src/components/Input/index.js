import React from 'react';

import { COLORS } from '~/constants';

import { Container, FieldContainer, Field, Label, FieldBorder } from './styles';

export default function Input(props) {
  const { label, colors, isMultiline } = props;
  return (
    <Container>
      {label && <Label colors={colors}>{label}</Label>}
      <FieldContainer>
        <Field
          {...props}
          multiline={isMultiline}
          placeholderTextColor={colors}
          colors={colors}
        />
      </FieldContainer>
      <FieldBorder colors={colors} />
    </Container>
  );
}
