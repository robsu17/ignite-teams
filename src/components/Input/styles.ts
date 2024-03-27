import { TextInput } from 'react-native'

import styled from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme }) => theme.colors.gray_700};
  color: ${({ theme }) => theme.colors.white};

  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.md}px;

  border-radius: 6px;
  padding: 16px;

  margin-bottom: 16px;

`