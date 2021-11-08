import styled, { css } from 'styled-components/native'
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'

interface AppButtonWrapperProps {
  disabled?: boolean
  color?: string
  width?: string
}
export const AppButtonWrapper = styled.Pressable<AppButtonWrapperProps>`
  width: 90px;
  height: 45px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: ${colors.secondary.lightText};

  ${({ disabled }: AppButtonWrapperProps) =>
    disabled &&
    css`
      opacity: 0.7;
    `}
  ${({ color }: AppButtonWrapperProps) =>
    color &&
    css`
      background-color: ${color};
    `}
  ${({ width }: AppButtonWrapperProps) =>
    width &&
    css`
      width: ${width};
    `}
`
interface AppButtonTextProps {
  textColor?: string
}
export const AppButtonText = styled.Text<AppButtonTextProps>`
  text-align: center;
  color: ${colors.secondary.text};
  font-family: ${fonts.main};
  font-size: 16px;

  ${({ textColor }: AppButtonTextProps) =>
    textColor &&
    css`
      color: ${textColor};
    `}
`
