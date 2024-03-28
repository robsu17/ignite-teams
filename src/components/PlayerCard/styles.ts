import styled, { css } from "styled-components/native";

import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacityProps } from "react-native";

export const Container = styled.TouchableOpacity`
  height: 54px;
  width: 100%;

  margin-top: 8px;
  border-radius: 6px;

  justify-content: space-between;
  flex-direction: row;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray_500};
  `}
`

export const PlayerName = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.gray_200
}))`
  margin-left: 16px;
  margin-right: 4px;
`

export const Name = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_200};
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.md}px;
  `}
`

export const RemovePlayer = styled.TouchableOpacity<TouchableOpacityProps>`

`